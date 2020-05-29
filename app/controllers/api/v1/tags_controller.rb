class Api::V1::TagsController < ApplicationController
  before_action :check_authorization, except: [:index, :show]

  def index
    @tags = Tag.search(params[:search]).paginate(page: params[:page])
  end

  def create
    @tag = Tag.create(tag_params)
    if @tag.save
      render :new, status: :created
    else
      render json: @tag.errors.full_messages, status: :bad_request
    end
  end

  def show
    @tag = Tag.find(params[:id])
    @tag_posts = @tag.posts.paginate(page: params[:page], per_page: params[:per_page])
    render :show
  end

  def update
    @tag = Tag.find(params[:id])
    if @tag.update_attributes(tag_params)
      render :edit
    else
      render json: @tag.errors.full_messages, status: :bad_request
    end
  end

  def destroy
    tag = Tag.find(params[:id])
    tag.destroy
    render json: { message: "Successfully deleted tag: #{tag.title}" }
  end

  private

  def tag_params
    params.require(:tag).permit(:title, :description)
  end
end
