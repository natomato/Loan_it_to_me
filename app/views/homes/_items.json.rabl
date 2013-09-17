collection @items
attributes *Item.column_names
node :avg_rating do |item|
  item.average_rating
end
node :photo_small do |item|
  item.main_photo.photo.url(:small)
end
node :rentals do |item|
  item.pending_requests
end
