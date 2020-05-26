module ApplicationHelper
  # Find the current user from the token set on header: "Bearer token_key"
  def current_user
    header = request.headers["Authorization"]
    unless header.blank?
      @token = header.sub!("Bearer ", "")
      secret_key = Rails.application.secrets.secret_key_base
      decoded_token = JWT.decode header, secret_key, true, { algorithm: 'HS256' }
      id = decoded_token[0]["user_id"]
      @current_user ||= User.find(id)
    end
  end

  # Sets the date format to: 23rd May, 2020
  def format_date(current_date)
    current_date.strftime("#{current_date.day.ordinalize} %b, %Y")
  end
end
