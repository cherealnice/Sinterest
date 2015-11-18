class Sin < ActiveRecord::Base
  validates :title, :description, :user, presence: true
  validates :title, length: {maximum: 100}
  validates :description, length: {maximum: 500}

  belongs_to :user
  has_many :comments
  has_many :sin_boards
  has_many :boards, through: :sin_boards

  def find_by_params(board_ids)

  end

end
