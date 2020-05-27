class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token

  include ApplicationHelper

  def encode_credential_for(user)
    secret_key = Rails.application.secrets.secret_key_base
    data_to_encode = { user_id: "#{user.id}" }
    token = JWT.encode data_to_encode, secret_key, "HS256"
    @hash = token
  end

  def check_authorization
    render json: { message: "You are not authorized to perform this action" }, 
                  status: :unauthorized if !current_user.nil? && !current_user.admin?
  end
end
