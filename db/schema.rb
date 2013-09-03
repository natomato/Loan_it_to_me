# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20130902051943) do

  create_table "categories", :force => true do |t|
    t.string   "name"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "homes", :force => true do |t|
    t.float    "latitude"
    t.float    "longitude"
    t.string   "street"
    t.string   "city"
    t.string   "state"
    t.string   "zipcode"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "item_photos", :force => true do |t|
    t.integer  "item_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
    t.string   "file_loc"
  end

  add_index "item_photos", ["item_id"], :name => "index_item_photos_on_item_id"

  create_table "items", :force => true do |t|
    t.integer  "home_id"
    t.integer  "category_id"
    t.string   "name"
    t.text     "description"
    t.decimal  "price",                                     :default => 0.0
    t.decimal  "avg_rating",  :precision => 3, :scale => 2
    t.datetime "created_at",                                                 :null => false
    t.datetime "updated_at",                                                 :null => false
  end

  add_index "items", ["category_id"], :name => "index_items_on_category_id"
  add_index "items", ["home_id"], :name => "index_items_on_home_id"

  create_table "rental_reviews", :force => true do |t|
    t.integer  "author_id"
    t.text     "body"
    t.decimal  "rating",     :precision => 3, :scale => 2
    t.integer  "rental_id"
    t.string   "title"
    t.datetime "created_at",                               :null => false
    t.datetime "updated_at",                               :null => false
  end

  add_index "rental_reviews", ["author_id"], :name => "index_rental_reviews_on_author_id"
  add_index "rental_reviews", ["rental_id"], :name => "index_rental_reviews_on_rental_id"

  create_table "rentals", :force => true do |t|
    t.integer  "item_id"
    t.datetime "start_date"
    t.datetime "end_date"
    t.string   "status"
    t.integer  "user_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "rentals", ["item_id"], :name => "index_rentals_on_item_id"
  add_index "rentals", ["user_id"], :name => "index_rentals_on_user_id"

  create_table "users", :force => true do |t|
    t.string   "username",      :null => false
    t.string   "password_hash", :null => false
    t.string   "selfie"
    t.string   "session_token", :null => false
    t.string   "bio"
    t.integer  "home_id"
    t.datetime "created_at",    :null => false
    t.datetime "updated_at",    :null => false
    t.string   "email"
  end

  add_index "users", ["home_id"], :name => "index_users_on_home_id"

end
