collection @items
attributes *Item.column_names
node :home do |item|
  item.home.attributes
end