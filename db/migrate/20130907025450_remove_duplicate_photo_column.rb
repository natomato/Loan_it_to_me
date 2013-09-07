class RemoveDuplicatePhotoColumn < ActiveRecord::Migration
  def up
    remove_column :items, :main_photo
  end

  def down
    add_column :items, :main_photo, :integer
  end
end
