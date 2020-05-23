class User < ApplicationRecord
  has_secure_password
  
  before_save do
    self.first_name = first_name.capitalize
    self.last_name = last_name.capitalize
    self.email = email.downcase
  end

  self.per_page = 5

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
  validates :email, presence: true, length: { maximum: 255 }, 
                    format: { with: VALID_EMAIL_REGEX }, uniqueness: { case_sensitive: false }
  validates :password, presence: true, length: { minimum: 6 }, allow_blank: true
  validates :first_name, :last_name, presence: true, length: { maximum: 255 }

  # Class method for finding a user ONLY if we have the correct email and password
  def self.find_by_credentials(email, password)
    user = self.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  # Use BCrypt's built-in method for checking if the password provided is the user's password
  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.search(search)
    if search
      self.where(
        "lower(first_name) LIKE :search OR lower(last_name) LIKE :search OR lower(email) LIKE :search", 
        search: "%#{search.downcase}%"
      )
    else
      self.all
    end
  end
end
