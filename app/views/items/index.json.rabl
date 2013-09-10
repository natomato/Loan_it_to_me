collection @items
attributes *Item.column_names
node :avg_rating do |item|
  item.average_rating
end
node :num_reviews do |item|
  item.reviews.count
end
node :photo_tiny do |item|
  item.main_photo.photo.url(:small)
end