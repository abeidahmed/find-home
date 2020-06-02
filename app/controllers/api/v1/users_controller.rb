class Api::V1::UsersController < ApplicationController
  before_action :check_authorization, except: [:create]
  before_action :set_user, only: [:show, :destroy]

  def index
    @users = User.search(params[:search]).user_role(params[:user_role]).paginate(page: params[:page], per_page: params[:per_page])
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
    @user_posts = @user.posts.search(params[:search]).paginate(page: params[:page], per_page: params[:per_page])
    render :show
  end

  def destroy
    if prohibited?
      render json: { message: "You cannot perform this action" }, status: :forbidden
    else
      @user.destroy
      render json: { message: "Successfully deleted user: #{@user.full_name}" }
    end
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password)
  end

  def set_user
    @user = User.find(params[:id])
  end

  def prohibited?
    @user.admin? || @user.id == current_user.id
  end
end
