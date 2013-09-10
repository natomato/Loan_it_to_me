class AddGmapsToHome < ActiveRecord::Migration
  def change
    add_column :homes, :gmaps, :boolean
  end
end
