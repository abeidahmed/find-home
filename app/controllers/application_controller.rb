class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
  
  def encode_credential_for(user)
    secret_key = Rails.application.secrets.secret_key_base
    data_to_encode = { user_id: "#{user.id}" }
    token = JWT.encode data_to_encode, secret_key, "HS256"
    @hash = { token: token }
  end

  def current_user
    header = request.headers["Authorization"]
    unless header.blank?
      token = header.sub!("Bearer ", "")
      secret_key = Rails.application.secrets.secret_key_base
      decoded_token = JWT.decode header, secret_key, true, { algorithm: 'HS256' }
      id = decoded_token[0]["user_id"]
      User.find_by(id: id)
    end
  end
end
