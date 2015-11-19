class Board < ActiveRecord::Base
  validates :author, :title, presence: true
  validates :title, length: {maximum: 50}
  validates :description, length: {maximum: 500, allow_nil: true}

  belongs_to :author, class_name: 'User'
  has_many   :sin_boards
  has_many   :sins, through: :sin_boards, source: :sin
end
