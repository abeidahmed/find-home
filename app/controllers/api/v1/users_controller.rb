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

  def show
    @user = User.find(params[:id])
    @user_posts = @user.posts.search(params[:search]).paginate(page: params[:page], per_page: params[:per_page])
    render :show
  end

  def destroy
    user = User.find(params[:id])
    if user.admin? || user.id == current_user.id
      render json: { message: "You cannot perform this action" }, status: :forbidden
    else
      user.destroy
      render json: { message: "Successfully deleted user: #{user.first_name}" }, status: :ok
    end
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password)
  end
end
