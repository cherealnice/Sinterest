class Like < ActiveRecord::Base
  validates :user, :likeable_id, :likeable_type, presence: true
  validates :likeable_type, inclusion: {in: %w(Sin Board)}

  belongs_to :user
  belongs_to :likeable, polymorphic: true
end
