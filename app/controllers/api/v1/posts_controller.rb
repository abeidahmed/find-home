class Api::V1::PostsController < ApplicationController
  def create
    @post = current_user.posts.create(post_params)
    if @post.save
      render :new, status: :created
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
    params.require(:post).permit(:title, :content, :excerpt, :category_id)
  end
end
