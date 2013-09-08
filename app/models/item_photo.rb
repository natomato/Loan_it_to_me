class ItemPhoto < ActiveRecord::Base
  attr_accessible :item_id, :photo
  validate :item_id, presence: true

  belongs_to :item

  has_attached_file :photo, :styles => {
    :big => "639x426>",
    :small => "114x74>",
    :tiny => "40x40#"
  }
  
end
