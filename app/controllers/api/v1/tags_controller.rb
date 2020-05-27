class Api::V1::TagsController < ApplicationController
  def index
    @tags = Tag.paginate(page: params[:page])
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
