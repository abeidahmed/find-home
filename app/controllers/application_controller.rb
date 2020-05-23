class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token

  include ApplicationHelper

  def encode_credential_for(user)
    secret_key = Rails.application.secrets.secret_key_base
    data_to_encode = { user_id: "#{user.id}" }
    token = JWT.encode data_to_encode, secret_key, "HS256"
    @hash = { token: token }
  end
end
