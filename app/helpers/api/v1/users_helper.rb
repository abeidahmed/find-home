module Api::V1::UsersHelper
  # Return the link of the user's gravatar
  def gravatar_for(user, options = { size: 80, default_avatar: "mp" })
    size = options[:size]
    default_avatar = options[:default_avatar]
    gravatar_id = Digest::MD5::hexdigest(user.email.downcase)
    "https://secure.gravatar.com/avatar/#{gravatar_id}?s=#{size}&d=#{default_avatar}"
  end
end
