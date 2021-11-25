# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
puts "Creating tables"
BookmarksCategory.destroy_all
Bookmark.destroy_all
Shelf.destroy_all
User.destroy_all




user1 = User.create(name: 'Jimmy', email: 'jimmy@gmail.com', password: 'password')
user2 = User.create(name: 'Bella', email: 'bella@gmail.com', password: 'password')
user3 = User.create(name: 'Bob', email: 'bob@gmail.com', password: 'password')
user4 = User.create(name: 'Dave', email: 'dave@gmail.com', password: 'password')
user5 = User.create(name: 'Jennifer', email: 'Jennifer@gmail.com', password: 'password')


shelf1 = Shelf.create(name: 'Main Shelf', user_id: user1.id)
shelf2 = Shelf.create(name: 'Games', user_id: user2.id)
shelf3 = Shelf.create(name: 'Social Media', user_id: user3.id)
shelf4 = Shelf.create(name: 'Other', user_id: user4.id)
shelf5 = Shelf.create(name: 'Other', user_id: user5.id)

category1 = Category.create(name: 'Entertainment')
category2 = Category.create(name: 'News')
category3 = Category.create(name: 'Social Media')
category4 = Category.create(name: 'Games')
category5 = Category.create(name: 'News')

bookmark1 = Bookmark.create(name: 'Facebook', url: 'www.facebook.com', description: 'Social media app', color: 'Blue', shelf_id: shelf1.id)
bookmark2 = Bookmark.create(name: 'Google', url: 'www.google.com', description: 'search engine', color: 'Orange', shelf_id: shelf2.id)
bookmark3 = Bookmark.create(name: 'Lighthouse Labs', url: 'www.lighthouselabs.ca', description: 'Education', color: 'Green')
bookmark4 = Bookmark.create(name: 'Youtube', url: 'www.youtube.com', description: 'music app', color: 'Yellow')
bookmark5 = Bookmark.create(name: 'Hudson Bay', url: 'www.thebay.com', description: 'shopping', color: 'Pink')

bookmarks_categories1 = BookmarksCategory.create(bookmarks_id: bookmark1.id, categories_id: category1.id)
bookmarks_categories2 = BookmarksCategory.create(bookmarks_id: bookmark2.id, categories_id: category2.id)
bookmarks_categories3 = BookmarksCategory.create(bookmarks_id: bookmark3.id, categories_id: category3.id)
bookmarks_categories4 = BookmarksCategory.create(bookmarks_id: bookmark4.id, categories_id: category4.id)
bookmarks_categories5 = BookmarksCategory.create(bookmarks_id: bookmark5.id, categories_id: category5.id)



