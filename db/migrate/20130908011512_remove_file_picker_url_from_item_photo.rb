class RemoveFilePickerUrlFromItemPhoto < ActiveRecord::Migration
  def up
    remove_column :item_photos, :filepicker_url
  end

  def down
    add_column :item_photos, :filepicker_url
  end
end
