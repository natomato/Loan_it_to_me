collection @items
attributes *Item.column_names
node :rating do |item|
  item.average_rating
end
node :num_reviews do |item|
  item.reviews.count
end
node :photo_small do |item|
  item.main_photo.photo.url(:small)
end
node :photo_medium do |item|
  item.main_photo.photo.url(:medium)
end
node :photo_big do |item|
  item.main_photo.photo.url(:big)
end
