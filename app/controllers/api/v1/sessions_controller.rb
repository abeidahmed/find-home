class Api::V1::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(email_params, password_params)
    if @user.nil?
      render json: { message: "Invalid credentials" }, status: :unauthorized
    else
      encode_credential_for(@user)
      render "api/v1/users/new"
    end
  end

  def logged_in
    if current_user.nil?
      render json: { message: "You need to login" }, status: :unauthorized
    else
      render :show
    end
  end

  private

  def email_params
    params[:user][:email].downcase
  end

  def password_params
    params[:user][:password]
  end
end
