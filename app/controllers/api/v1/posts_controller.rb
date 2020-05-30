class Api::V1::PostsController < ApplicationController
  before_action :check_authentication, only: [:create, :update, :destroy]

  def index
    @posts = Post.search(params[:search]).paginate(page: params[:page], per_page: params[:per_page])
  end

  def create
    @post = current_user.posts.create(post_params)
    if @post.save
      render :new, status: :created
    else
      render json: @post.errors.full_messages, status: :bad_request
    end
  end

  def show
    @post = Post.find(params[:id])
    render :show
  end

  def update
    @post = Post.find(params[:id])
    if @post.update_attributes(post_params)
      render :edit
    else
      render json: @post.errors.full_messages, status: :bad_request
    end
  end

  def destroy
    post = Post.find(params[:id])
    post.destroy
    render json: { message: "Successfully deleted post: #{post.title}" }
  end

  private

  def post_params
    params.require(:post).permit(:title, :content, :excerpt, :category_id, tag_ids: [])
  end
end
