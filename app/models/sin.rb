class Sin < ActiveRecord::Base
  validates :title, :description, :board, :user, presence: true
  validates :title, length: {maximum: 100}
  validates :description, length: {maximum: 500}

  belongs_to :board
  belongs_to :user
end
