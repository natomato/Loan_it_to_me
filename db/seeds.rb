# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

ActiveRecord::Base.transaction do
  
  User.create!(username: "test", password_hash: "$2a$10$wtxQziDF.buPeAHJCHAkSOV1vRibyQ2eBGzWT7My3GoKJeW026JP2", selfie: "//test/pic/loc.png" session_token: "testtoken", bio: "im a test")
  User.create!(username: "moocher", password_hash: "$2a$10$JlRNa1UBoHPBJbQgEkuMcuNWjhA.x529wx//4Abv3LYjgodWUsb0a", session_token: "moochtoken", bio: "i like borrow things")
  User.create!(username: "giver", password_hash: "$2a$10$y1DwmLrCU2TBl5uaTUqoreexejaSNZr.QqrC2PHCEu/DpU9zOStA6", session_token: "givertoken", bio: "i like to loan things out", home_id: 1)

  Home.create!(latitude: 123456.1234, longitude: 123456.1234)

  Item.create!(home_id: 1, category_id: 1, name: "lawn mower", description: "runs good, don't break it")
  Item.create!(home_id: 1, category_id: 1, name: "leaf blower", description: "it blows")
  Item.create!(home_id: 1, category_id: 2, name: "hockey sticks", description: "like wayne gretzky")
  Item.create!(home_id: 1, category_id: 2, name: "orange cones", description: "tall, very orange")

  Category.create!(name: "Lawn and Garden")
  Category.create!(name: "Sports Equipment")

end