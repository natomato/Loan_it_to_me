# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

ActiveRecord::Base.transaction do
  
  User.create!(username: "test", password_hash: "$2a$10$wtxQziDF.buPeAHJCHAkSOV1vRibyQ2eBGzWT7My3GoKJeW026JP2", selfie: "//test/pic/loc.png", session_token: "testtoken", bio: "im a test")
  User.create!(username: "moocher", password_hash: "$2a$10$JlRNa1UBoHPBJbQgEkuMcuNWjhA.x529wx//4Abv3LYjgodWUsb0a", session_token: "moochtoken", bio: "i like borrow things")
  User.create!(username: "giver", password_hash: "$2a$10$y1DwmLrCU2TBl5uaTUqoreexejaSNZr.QqrC2PHCEu/DpU9zOStA6", session_token: "givertoken", bio: "i like to loan things out", home_id: 1)
  User.create!(username: "scrub", password_hash: "$2a$10$wtxQziDF.buPeAHJCHAkSOV1vRibyQ2eBGzWT7My3GoKJeW026JP2", session_token: "scrubtoken", bio: "hangin out the passenger side of my best friends ride")
  
  #giver's home
  Home.create!(latitude: 80.1234, longitude: 34.1234)

  #giver's items
  Item.create!(home_id: 1, category_id: 1, name: "lawn mower", description: "runs good, don't break it", main_photo_id: 2)
  Item.create!(home_id: 1, category_id: 1, name: "leaf blower", description: "it blows", main_photo_id: 3)
  Item.create!(home_id: 1, category_id: 2, name: "hockey sticks", description: "like wayne gretzky", main_photo_id: 4)
  Item.create!(home_id: 1, category_id: 2, name: "orange cones", description: "tall, very orange", main_photo_id: 5)

  ItemPhoto.create(item_id: 0, photo: File.open("#{Rails.root}/app/assets/images/thumbnail-default-image.jpg"))
  ItemPhoto.create(item_id: 1, photo: File.open("#{Rails.root}/app/assets/images/lawnmower.jpg"))
  ItemPhoto.create(item_id: 2, photo: File.open("#{Rails.root}/app/assets/images/leaf-blower.jpeg"))
  ItemPhoto.create(item_id: 3, photo: File.open("#{Rails.root}/app/assets/images/hockey-sticks.jpg"))
  ItemPhoto.create(item_id: 4, photo: File.open("#{Rails.root}/app/assets/images/orange-cones.jpg"))
  
  Category.create!(name: "Lawn and Garden")
  Category.create!(name: "Sports Equipment")
  Category.create!(name: "Kitchen Supplies")
  Category.create!(name: "Party Supplies")

  #lawnmower for 1 - 30th of sept - mooch
  Rental.create!(item_id: 1, start_date: "2013-09-01T13:25:16-07:00", end_date: "2013-09-30T13:25:16-07:00", status: "pending", user_id: 2)
  #lawnmower for 14 - 21st of sept - test
  Rental.create!(item_id: 1, start_date: "2013-09-14T13:25:16-07:00", end_date: "2013-09-21T13:25:16-07:00", status: "pending", user_id: 1)
  #lawnmower for 1 - 15th of sept - mooch
  Rental.create!(item_id: 1, start_date: "2013-09-01T13:25:16-07:00", end_date: "2013-09-10T13:25:16-07:00", status: "pending", user_id: 2)
  #lawnmower for 20 - 30th of sept - mooch
  Rental.create!(item_id: 1, start_date: "2013-09-01T13:25:16-07:00", end_date: "2013-09-10T13:25:16-07:00", status: "pending", user_id: 2)
  
  #lawnmower rental history
  Rental.create!(item_id: 1, start_date: "2013-08-01T13:25:16-07:00", end_date: "2013-08-10T13:25:16-07:00", status: "approved", user_id: 2)
  Rental.create!(item_id: 1, start_date: "2013-08-11T13:25:16-07:00", end_date: "2013-08-20T13:25:16-07:00", status: "approved", user_id: 2)
  Rental.create!(item_id: 1, start_date: "2013-08-21T13:25:16-07:00", end_date: "2013-08-30T13:25:16-07:00", status: "approved", user_id: 2)
  Rental.create!(item_id: 1, start_date: "2013-07-01T13:25:16-07:00", end_date: "2013-07-10T13:25:16-07:00", status: "approved", user_id: 2)
  Rental.create!(item_id: 1, start_date: "2013-06-01T13:25:16-07:00", end_date: "2013-06-10T13:25:16-07:00", status: "approved", user_id: 2)

  #lawnmower denied requests
  Rental.create!(item_id: 1, start_date: "2013-08-01T13:25:16-07:00", end_date: "2013-08-10T13:25:16-07:00", status: "denied", user_id: 1)
  Rental.create!(item_id: 1, start_date: "2013-07-01T13:25:16-07:00", end_date: "2013-07-10T13:25:16-07:00", status: "denied", user_id: 3)
  Rental.create!(item_id: 1, start_date: "2013-06-01T13:25:16-07:00", end_date: "2013-06-10T13:25:16-07:00", status: "denied", user_id: 1)

  Rental.create!(item_id: 2, start_date: "2013-09-01T13:25:16-07:00", end_date: "2013-09-30T13:25:16-07:00", status: "pending", user_id: 1)
  Rental.create!(item_id: 2, start_date: "2013-09-01T13:25:16-07:00", end_date: "2013-09-10T13:25:16-07:00", status: "pending", user_id: 2)
  Rental.create!(item_id: 3, start_date: "2013-09-01T13:25:16-07:00", end_date: "2013-09-30T13:25:16-07:00", status: "pending", user_id: 2)
  Rental.create!(item_id: 4, start_date: "2013-09-01T13:25:16-07:00", end_date: "2013-09-30T13:25:16-07:00", status: "pending", user_id: 2)

  RentalReview.create(author_id: 2, title: "these are best!", body: "cool lawnmower bro", rating: 3.00, rental_id: 5 ) 
  RentalReview.create(author_id: 1, title: "these are best 2!", body: "it does this thing like vroom vroom and crack clang and I don't know man, maybe it needs oil or something.", rating: 4.00, rental_id: 6 ) 
  RentalReview.create(author_id: 4, title: "these are best 3!", body: "yeah cool", rating: 5.00, rental_id: 7 ) 
end