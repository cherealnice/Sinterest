class Board < ActiveRecord::Base

  include PgSearch
  multisearchable :against => [:title, :description]

  validates :author, :title, presence: true
  validates :title, length: {maximum: 50}
  validates :description, length: {maximum: 500, allow_nil: true}


  belongs_to :author, class_name: 'User'
  has_many   :sin_boards
  has_many   :sins, through: :sin_boards, source: :sin
  has_many   :likes, as: :likeable
  has_many   :users_liked, through: :likes, source: :user
  has_many   :follows, as: :followable
  has_many   :users_following, through: :follows, source: :user
  has_many   :user_follows, class_name: 'Follow', as: :followable
  has_many   :users_following, through: :user_follows, source: :user
  has_many   :images, through: :sins, source: :images
end
