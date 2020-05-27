class Category < ApplicationRecord
  validates :title, presence: true, length: { maximum: 255 }
  validates :description, length: { in: 10..500 }

  default_scope -> { order(created_at: :desc) }
end
