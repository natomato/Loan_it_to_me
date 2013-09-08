class AddAttachmentPhotoToItemPhotos < ActiveRecord::Migration
  def self.up
    change_table :item_photos do |t|
      t.attachment :photo
    end
  end

  def self.down
    drop_attached_file :item_photos, :photo
  end
end
