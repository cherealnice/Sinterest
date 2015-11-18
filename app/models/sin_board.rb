class SinBoard < ActiveRecord::Base
  validates :board, :sin, presence: true

  belongs_to :board
  belongs_to :sin
end
