class Sin < ActiveRecord::Base
  validates :title, :description, :board_id, :user, presence: true
  validates :title, length: {maximum: 100}
  validates :description, length: {maximum: 500}

  belongs_to :user
  has_many :comments
end
