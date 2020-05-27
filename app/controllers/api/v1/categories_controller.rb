class Api::V1::CategoriesController < ApplicationController
  before_action :check_authorization, except: [:index, :show]

  def index
    @categories = Category.search(params[:search]).paginate(page: params[:page])
  end

  def create
    @category = Category.create(category_params)
    if @category.save
      render :new, status: :created
    else
      render json: @category.errors.full_messages, status: :bad_request
    end
  end

  def show
    @category = Category.find(params[:id])
    @category_posts = @category.posts.search(params[:search]).paginate(page: params[:page], per_page: params[:per_page])
    render :show
  end

  def update
    @category = Category.find(params[:id])
    if @category.update_attributes(category_params)
      render :edit
    else
      render json: @category.errors.full_messages, status: :bad_request
    end
  end

  def destroy
    category = Category.find(params[:id])
    category.destroy
    render json: { message: "Successfully deleted category: #{category.title}" }
  end

  private

  def category_params
    params.require(:category).permit(:title, :description)
  end
end
