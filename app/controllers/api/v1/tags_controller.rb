class Api::V1::TagsController < ApplicationController
  before_action :check_authorization, except: [:index, :show]
  before_action :set_tag, only: [:show, :update, :destroy]

  def index
    @tags = Tag.search(params[:search]).paginate(page: params[:page], per_page: params[:per_page])
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
    @tag_posts = @tag.posts.search(params[:search]).paginate(page: params[:page], per_page: params[:per_page])
    render :show
  end

  def update
    if @tag.update_attributes(tag_params)
      render :edit
    else
      render json: @tag.errors.full_messages, status: :bad_request
    end
  end

  def destroy
    @tag.destroy
    render json: { message: "Successfully deleted tag: #{@tag.title}" }
  end

  private

  def tag_params
    params.require(:tag).permit(:title, :description)
  end

  def set_tag
    @tag = Tag.find(params[:id])
  end
end
