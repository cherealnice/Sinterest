class Image < ActiveRecord::Base
  validates :imageable, presence: true
  has_attached_file :image, styles: { medium: "300>x300", thumb: "100x100>", large: "900x900>" }, default_url: "missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :imageable, polymorphic: true, dependent: :destroy
end
