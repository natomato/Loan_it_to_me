collection @homes
attributes *Home.column_names
node :items do |home|
  home.items_by_category(@cat_id)
end
