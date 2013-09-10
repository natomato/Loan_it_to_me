class AddAddressToHome < ActiveRecord::Migration
  def change
    add_column :homes, :address, :string
  end
end
