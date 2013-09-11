class ItemPhoto < ActiveRecord::Base
  attr_accessible :item_id, :photo
  validate :item_id, presence: true

  belongs_to :item

  has_attached_file :photo, :styles => {
    :big => "420x420>",
    :medium => "160x160>",
    :small => "80x80#"
  }

end
