class Post < ApplicationRecord
  belongs_to :user
  belongs_to :category

  validates :title, presence: true, length: { maximum: 255 }, uniqueness: { case_sensitive: false }
  validates :content, presence: true
  validates :excerpt, length: { maximum: 500 }

  default_scope -> { order(created_at: :desc) }

  self.per_page = 5

  def self.search(search)
    if search.present?
      where("lower(title) LIKE :search", search: "%#{search.downcase}%")
    else
      self.all
    end
  end
end
