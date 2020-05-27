class Api::V1::PostsController < ApplicationController
  def create
    @post = current_user.posts.create(post_params)
    if @post.save
      render :new, status: :created
    else
      render json: @post.errors.full_messages, status: :bad_request
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :content, :excerpt, :category_id)
  end
end
