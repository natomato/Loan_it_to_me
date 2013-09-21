collection @rentals
attributes *Rental.column_names
child :user do |rental|
  attributes *User.column_names
end