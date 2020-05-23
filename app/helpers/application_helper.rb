module ApplicationHelper
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
