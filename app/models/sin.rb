class Sin < ActiveRecord::Base
  validates :title, :description, :board, :user, presence: true
  validates :title, length: {maximum: 100}
  validates :description, length: {maximum: 500}

  belongs_to :user
  belongs_to :board
  has_many   :comments
  has_many   :images, as: :imageable

end
