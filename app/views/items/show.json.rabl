collection @item
attributes *Item.column_names
child :rentals do
  attributes *Rental.column_names
end
child :reviews do
  attributes *RentalReview.column_names
end
child :photos do
  attributes *Photo.column_names
end
child :owner do
  attributes *User.column_names
end
