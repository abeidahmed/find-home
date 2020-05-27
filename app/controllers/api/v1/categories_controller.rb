class Api::V1::CategoriesController < ApplicationController
  before_action :check_authorization, only: [:index, :create]

  def index
    @categories = Category.paginate(page: params[:page])
  end

  def create
    @category = Category.create(category_params)
    if @category.save
      render :new, status: :created
    else
      render json: @category.errors.full_messages, status: :bad_request
    end
  end

  private

  def category_params
    params.require(:category).permit(:title, :description)
  end
end
