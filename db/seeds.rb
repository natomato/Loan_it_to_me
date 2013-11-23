ActiveRecord::Base.transaction do
  
  User.create!(username: "Sam Sample", password_hash: "$2a$10$OrGpIS0j/IMmpHzitqyYmOVcVECIAUwguH3kVbj9FmMMxIumWqyfW", selfie: "//test/pic/loc.png", session_token: "testtoken", bio: "im a test", home_id: 8)
  User.create!(username: "Mr. Borrower", password_hash: "$2a$10$OrGpIS0j/IMmpHzitqyYmOVcVECIAUwguH3kVbj9FmMMxIumWqyfW", session_token: "moochtoken", bio: "i like borrow things", home_id: 7)
  User.create!(username: "Demo Dan", password_hash: "$2a$10$OrGpIS0j/IMmpHzitqyYmOVcVECIAUwguH3kVbj9FmMMxIumWqyfW", session_token: "givertoken", selfie: "#{Rails.root}/app/assets/images/default-user-image.png", bio: "Hi Neighbor! I have collected quite a few tools over the years. I don't mind loaning them to ya, so long as you take good care of them.", home_id: 1)
  User.create!(username: "Mandi setz", password_hash: "$2a$10$OrGpIS0j/IMmpHzitqyYmOVcVECIAUwguH3kVbj9FmMMxIumWqyfW", session_token: "guesttoken", bio: "", home_id: 2)
  User.create!(username: "Oddy Asmani", password_hash: "$2a$10$OrGpIS0j/IMmpHzitqyYmOVcVECIAUwguH3kVbj9FmMMxIumWqyfW", session_token: "guesttoken", bio: "", home_id: 3)
  User.create!(username: "Kehuda Yatz", password_hash: "$2a$10$OrGpIS0j/IMmpHzitqyYmOVcVECIAUwguH3kVbj9FmMMxIumWqyfW", session_token: "guesttoken", bio: "", home_id: 4)
  User.create!(username: "Mukihiro Yatsumoto", password_hash: "$2a$10$OrGpIS0j/IMmpHzitqyYmOVcVECIAUwguH3kVbj9FmMMxIumWqyfW", session_token: "guesttoken", bio: "", home_id: 5)
  User.create!(username: "Pris Chine", password_hash: "$2a$10$OrGpIS0j/IMmpHzitqyYmOVcVECIAUwguH3kVbj9FmMMxIumWqyfW", session_token: "guesttoken", bio: "", home_id: 6)
    
  
  Home.create!(latitude: 37.7811812, longitude: -122.4116329)
  Home.create!(latitude: 37.7808, longitude: -122.4100)     
  Home.create!(latitude: 37.7477, longitude: -122.4219)    
  Home.create!(latitude: 37.82638, longitude: -122.422543)
  Home.create!(latitude: 37.7676, longitude: -122.435782)
  Home.create!(latitude: 37.7577, longitude: -122.4569)
  Home.create!(latitude: 37.7627, longitude: -122.4799)
  Home.create!(latitude: 37.7607, longitude: -122.4101)

  #giver's items
  Item.create!(home_id: 1, category_id: 1, name: "lawn mower", description: "runs good, don't break it", main_photo_id: 2)
  Item.create!(home_id: 1, category_id: 1, name: "leaf blower", description: "it blows", main_photo_id: 3)
  Item.create!(home_id: 1, category_id: 2, name: "hockey sticks", description: "like wayne gretzky", main_photo_id: 4)
  Item.create!(home_id: 1, category_id: 2, name: "orange cones", description: "tall, very orange", main_photo_id: 5)
  #guest's items
  Item.create!(home_id: 2, main_photo_id: 1, category_id: 1, name: "a rake", description: "asldf alsdf alsdf")

  Item.create!(home_id: 1, main_photo_id: 6, category_id: 1, name: "chainsaw", price: 6.50, description: "im a green chainsaw")
  Item.create!(home_id: 4, main_photo_id: 7, category_id: 1, name: "chain saw", price: 8.00, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam maxime possimus aperiam.")
  Item.create!(home_id: 1, main_photo_id: 8, category_id: 1, name: "hedge trimmer", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam maxime possimus aperiam.")
  Item.create!(home_id: 2, main_photo_id: 9, category_id: 1, name: "hedgetrimmer", price: 3.00, description: "Cuts bushes and stuff. Very sheek. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam maxime possimus aperiam.")
  Item.create!(home_id: 3, main_photo_id: 10, category_id: 1, name: "lawn mower", price: 7.50, description: "One wheel is broke, so you can only turn left. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam maxime possimus aperiam.")
  Item.create!(home_id: 4, main_photo_id: 11, category_id: 1, name: "lawn mower", price: 7.50, description: "Im yellow. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam maxime possimus aperiam.")
  Item.create!(home_id: 1, main_photo_id: 12, category_id: 1, name: "leaf blower", price: 7.00, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam maxime possimus aperiam.")
  Item.create!(home_id: 5, main_photo_id: 13, category_id: 1, name: "rake for leaves", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam maxime possimus aperiam.")
  Item.create!(home_id: 3, main_photo_id: 14, category_id: 1, name: "rakes and shovels", price: 3.00, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam maxime possimus aperiam.")
  Item.create!(home_id: 1, main_photo_id: 15, category_id: 1, name: "old rake", price: 0.00, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam maxime possimus aperiam.")
  Item.create!(home_id: 5, main_photo_id: 16, category_id: 1, name: "riding lawnmower", price: 15.00, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam maxime possimus aperiam.")
  Item.create!(home_id: 8, main_photo_id: 17, category_id: 1, name: "pole saw", price: 2.00, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam maxime possimus aperiam.")
  Item.create!(home_id: 3, main_photo_id: 18, category_id: 1, name: "saw on a pole", price: 1.50, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam maxime possimus aperiam.")
  Item.create!(home_id: 1, main_photo_id: 19, category_id: 1, name: "folding shovel", price: 2.00, description: "Its a small portable shovel. adipisicing elit. Numquam maxime possimus aperiam.")
  Item.create!(home_id: 7, main_photo_id: 20, category_id: 1, name: "shovels", price: 3.00, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam maxime possimus aperiam.")
  Item.create!(home_id: 2, main_photo_id: 21, category_id: 1, name: "shovels", price: 2.00, description: "My shovels are the cutest. Please dont get them dirty. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam maxime possimus aperiam.")
  Item.create!(home_id: 3, main_photo_id: 22, category_id: 1, name: "Shovels", price: 3.50, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam maxime possimus aperiam.")
  Item.create!(home_id: 1, main_photo_id: 23, category_id: 1, name: "wheelbarrow", price: 4.00, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam maxime possimus aperiam.")
  Item.create!(home_id: 2, main_photo_id: 24, category_id: 1, name: "wheelbarrow", price: 4.00, description: "Rickety old wheelbarrow. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam maxime possimus aperiam.")
  Item.create!(home_id: 6, main_photo_id: 25, category_id: 1, name: "wheelbarrow", price: 5.00, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam maxime possimus aperiam.")

  #default image
  ItemPhoto.create(item_id: 1, photo: File.open("#{Rails.root}/app/assets/images/default-thumbnail-image.jpg"))
  #demo images
  ItemPhoto.create(item_id: 2, photo: File.open("#{Rails.root}/app/assets/images/lawnmower.jpg"))
  ItemPhoto.create(item_id: 3, photo: File.open("#{Rails.root}/app/assets/images/leaf-blower.jpeg"))
  ItemPhoto.create(item_id: 4, photo: File.open("#{Rails.root}/app/assets/images/hockey-sticks.jpg"))
  ItemPhoto.create(item_id: 5, photo: File.open("#{Rails.root}/app/assets/images/orange-cones.jpg"))
  ItemPhoto.create(item_id: 6, photo: File.open("#{Rails.root}/app/assets/images/chainsaw green.jpeg"))
  ItemPhoto.create(item_id: 7, photo: File.open("#{Rails.root}/app/assets/images/chainsaw-orange.jpeg"))
  ItemPhoto.create(item_id: 8, photo: File.open("#{Rails.root}/app/assets/images/hedge-trimmer.jpeg"))
  ItemPhoto.create(item_id: 9, photo: File.open("#{Rails.root}/app/assets/images/hedge-trimmer2.jpeg"))
  ItemPhoto.create(item_id: 10, photo: File.open("#{Rails.root}/app/assets/images/lawnmower black.jpeg"))
  ItemPhoto.create(item_id: 11, photo: File.open("#{Rails.root}/app/assets/images/lawnmower-yellow.jpeg"))
  ItemPhoto.create(item_id: 12, photo: File.open("#{Rails.root}/app/assets/images/default-thumbnail-image.jpg"))
  ItemPhoto.create(item_id: 13, photo: File.open("#{Rails.root}/app/assets/images/rake-blue.jpeg"))
  ItemPhoto.create(item_id: 14, photo: File.open("#{Rails.root}/app/assets/images/rake-shovel.jpeg"))
  ItemPhoto.create(item_id: 15, photo: File.open("#{Rails.root}/app/assets/images/rake.jpeg"))
  ItemPhoto.create(item_id: 16, photo: File.open("#{Rails.root}/app/assets/images/riding-lawn-mower.jpeg"))
  ItemPhoto.create(item_id: 17, photo: File.open("#{Rails.root}/app/assets/images/saw pole.jpeg"))
  ItemPhoto.create(item_id: 18, photo: File.open("#{Rails.root}/app/assets/images/saw pole.jpg"))
  ItemPhoto.create(item_id: 19, photo: File.open("#{Rails.root}/app/assets/images/shovel-portable.jpeg"))
  ItemPhoto.create(item_id: 20, photo: File.open("#{Rails.root}/app/assets/images/shovels-again.jpeg"))
  ItemPhoto.create(item_id: 21, photo: File.open("#{Rails.root}/app/assets/images/shovels-cute.jpeg"))
  ItemPhoto.create(item_id: 22, photo: File.open("#{Rails.root}/app/assets/images/shovels-magnets.jpeg"))
  ItemPhoto.create(item_id: 23, photo: File.open("#{Rails.root}/app/assets/images/wheelbarrow-blue.jpeg"))
  ItemPhoto.create(item_id: 24, photo: File.open("#{Rails.root}/app/assets/images/wheelbarrow-rickety.jpeg"))
  ItemPhoto.create(item_id: 25, photo: File.open("#{Rails.root}/app/assets/images/wheelbarrow.jpeg"))
  
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
  #wheelbarrows  
  Rental.create!(item_id: 25, start_date: "2013-08-01T13:25:16-07:00", end_date: "2013-08-10T13:25:16-07:00", status: "approved", user_id: 5)
  Rental.create!(item_id: 24, start_date: "2013-08-01T13:25:16-07:00", end_date: "2013-08-10T13:25:16-07:00", status: "approved", user_id: 4)
  Rental.create!(item_id: 23, start_date: "2013-08-01T13:25:16-07:00", end_date: "2013-08-10T13:25:16-07:00", status: "approved", user_id: 6)
  
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
  RentalReview.create(author_id: 1, title: "needs maintenance", body: "it does this thing like vroom vroom and crack clang and I don't know man, maybe it needs oil or something.", rating: 2.00, rental_id: 6 ) 
  RentalReview.create(author_id: 4, title: "these are best 3!", body: "yeah cool", rating: 5.00, rental_id: 7 ) 
  RentalReview.create(author_id: 5, title: "", body: "I like.", rating: 5.00, rental_id: 8 ) 
  RentalReview.create(author_id: 4, title: "meh", body: "Ok I guess.", rating: 1.00, rental_id: 9 ) 
  RentalReview.create(author_id: 6, title: "", body: "I like it a little bit, i guess.", rating: 2.00, rental_id: 10 ) 
end