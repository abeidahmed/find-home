class Tag < ApplicationRecord
  has_many :tagnations
  has_many :posts, through: :tagnations
  
  validates :title, presence: true, length: { maximum: 50 }, uniqueness: { case_sensitive: true }
  validates :description, length: { maximum: 250 }

  default_scope -> { order(created_at: :desc) }

  self.per_page = 5
end
