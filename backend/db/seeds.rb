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

Bookmark.create(name: 'Facebook', url: 'www.facebook.com', description: 'Social media app', color: 'Blue')
Bookmark.create(name: 'Google', url: 'www.google.com', description: 'search engine', color: 'Orange')
Bookmark.create(name: 'Lighthouse Labs', url: 'www.lighthouselabs.ca', description: 'Education', color: 'Green')
Bookmark.create(name: 'Youtube', url: 'www.youtube.com', description: 'music app', color: 'Yellow')
Bookmark.create(name: 'Hudson Bay', url: 'www.thebay.com', description: 'shopping', color: 'Pink')



Shelf.create(name: 'Main Shelf')
Shelf.create(name: 'Other')

User.create(name: 'Jimmy', email: 'jimmy@gmail.com', password: 'password')
User.create(name: 'Bella', email: 'bella@gmail.com', password: 'password')
User.create(name: 'Bob', email: 'bob@gmail.com', password: 'password')
User.create(name: 'Dave', email: 'dave@gmail.com', password: 'password')
User.create(name: 'Jennifer', email: 'Jennifer@gmail.com', password: 'password')


Category.create(name: 'Entertainment')
Category.create(name: 'News')
