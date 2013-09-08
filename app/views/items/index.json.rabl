collection @items
attributes *Item.column_names
node :avg_rating do |item|
  item.average_rating
end
node :num_reviews do |item|
  item.reviews.count
end
node :home do |item|
  item.home.attributes
end