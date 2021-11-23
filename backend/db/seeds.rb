# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
puts "Creating tables"
Bookmark.destroy_all
Shelf.destroy_all
User.destroy_all




user1 = User.create(name: 'Jimmy', email: 'jimmy@gmail.com', password: 'password')
user2 = User.create(name: 'Bella', email: 'bella@gmail.com', password: 'password')
User.create(name: 'Bob', email: 'bob@gmail.com', password: 'password')
User.create(name: 'Dave', email: 'dave@gmail.com', password: 'password')
User.create(name: 'Jennifer', email: 'Jennifer@gmail.com', password: 'password')


shelf1 = Shelf.create(name: 'Main Shelf', user_id: user1.id)
shelf2 = Shelf.create(name: 'Other', user_id: user2.id)

category1 = Category.create(name: 'Entertainment')
category2 = Category.create(name: 'News')

bookmark1 = Bookmark.create(name: 'Facebook', url: 'www.facebook.com', description: 'Social media app', color: 'Blue', shelf_id: shelf1.id)
bookmark2 = Bookmark.create(name: 'Google', url: 'www.google.com', description: 'search engine', color: 'Orange', shelf_id: shelf2.id)
Bookmark.create(name: 'Lighthouse Labs', url: 'www.lighthouselabs.ca', description: 'Education', color: 'Green')
Bookmark.create(name: 'Youtube', url: 'www.youtube.com', description: 'music app', color: 'Yellow')
Bookmark.create(name: 'Hudson Bay', url: 'www.thebay.com', description: 'shopping', color: 'Pink')

bookmarks_categories1 = BookmarksCategory.create(bookmark_id: bookmark1.id, category_id: category1.id)
bookmarks_categories2 = BookmarksCategory.create(bookmark_id: bookmark2.id, category_id: category2.id)



