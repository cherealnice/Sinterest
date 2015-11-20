class Follow < ActiveRecord::Base
  validates :user, :followable_id, :followable_type, presence: true
  validates :followable_type, inclusion: {in: %w(User Board)}

  belongs_to :user
  belongs_to :followable, polymorphic: true
end
