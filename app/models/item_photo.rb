class ItemPhoto < ActiveRecord::Base
  attr_accessible :item_id, :photo
  validate :item_id, presence: true

  belongs_to :item

  has_attached_file :photo, :styles => {
    :big => "600x400>",
    :medium => "300x200>",
    :small => "80x80#"
  }

end
