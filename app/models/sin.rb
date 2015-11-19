class Sin < ActiveRecord::Base
  validates :title, :description, :user, presence: true
  validates :title, length: {maximum: 100}
  validates :description, length: {maximum: 500}
  validate  :has_at_least_one_board

  belongs_to :user
  has_many   :sin_boards
  has_many   :boards, through: :sin_boards, source: :board
  has_many   :comments
  has_many   :images, as: :imageable

  def image
    images.first.image unless images.empty?
  end

  def image=(data)
    if image
      images.first.image = data
    else
      images.new({image: image})
    end
  end

  private
  def has_at_least_one_board
    if sin_boards.empty?
      self.errors[:boards] << 'There must be at least one board'
    end
  end

end
