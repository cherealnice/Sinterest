class Comment < ActiveRecord::Base
  validates :author, :body, presence: true

  belongs_to :author, class_name: :user, foreign_key: :author_id
end
