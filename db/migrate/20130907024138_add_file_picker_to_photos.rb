class AddFilePickerToPhotos < ActiveRecord::Migration
  def change
    add_column :item_photos, :filepicker_url, :string
    remove_column :item_photos, :file_loc
    add_column :items, :main_photo, :integer
  end
end
