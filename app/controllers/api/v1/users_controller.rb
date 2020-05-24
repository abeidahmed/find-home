class Api::V1::UsersController < ApplicationController
  def index
    if current_user.admin?
      @users = User.search(params[:search]).user_role(params[:user_role]).paginate(page: params[:page])
    else
      render json: { message: "You are not authorized to view this page" }, status: :unauthorized
    end
  end

  def create
    @user = User.create(user_params)
    if @user.save
      encode_credential_for(@user)
      render :new, status: :created
    else
      render json: @user.errors.full_messages, status: :bad_request
    end
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password)
  end
end
