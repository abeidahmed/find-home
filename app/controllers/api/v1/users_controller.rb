class Api::V1::UsersController < ApplicationController
  before_action :check_authorization, except: [:create]

  def index
    @users = User.search(params[:search]).user_role(params[:user_role]).paginate(page: params[:page])
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

  def destroy
    user = User.find(params[:id])
    user.destroy
    render json: { message: "Successfully deleted" }, status: :ok
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password)
  end

  def check_authorization
    render json: { message: "You are not authorized to perform this action" }, 
    status: :unauthorized unless current_user.admin? 
  end
end
