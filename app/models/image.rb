class Image < ActiveRecord::Base
  validates :imageable, presence: true
  belongs_to: :imageable, polymorphic: true
end
