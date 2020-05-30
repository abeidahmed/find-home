class Category < ApplicationRecord
  has_many :posts, dependent: :destroy
  
  validates :title, presence: true, length: { maximum: 255 }, uniqueness: { case_sensitive: false }
  validates :description, length: { maximum: 500 }

  default_scope -> { order(created_at: :desc) }

  def self.search(search)
    if search.present?
      where("lower(title) LIKE :search", search: "%#{search.downcase}%")
    else
      self.all
    end
  end
end
