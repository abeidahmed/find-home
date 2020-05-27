class Category < ApplicationRecord
  validates :title, presence: true, length: { maximum: 255 }, uniqueness: { case_sensitive: false }
  validates :description, length: { in: 10..500 }

  default_scope -> { order(created_at: :desc) }

  self.per_page = 5
end
