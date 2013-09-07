class AddIndexToItems < ActiveRecord::Migration
  def change
    add_column :items, :main_photo_id, :integer
    add_index :items, :main_photo_id
  end
end
