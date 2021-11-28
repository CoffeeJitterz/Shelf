puts "Creating tables"
User.destroy_all
Shelf.destroy_all
BookmarksCategory.destroy_all
Bookmark.destroy_all




user1 = User.create(name: 'Jimmy', email: 'jimmy@gmail.com', password: 'password')
user2 = User.create(name: 'Bella', email: 'bella@gmail.com', password: 'password')
user3 = User.create(name: 'Bob', email: 'bob@gmail.com', password: 'password')
user4 = User.create(name: 'Dave', email: 'dave@gmail.com', password: 'password')
user5 = User.create(name: 'Jennifer', email: 'Jennifer@gmail.com', password: 'password')

shelf1 = Shelf.create(name: 'Games', user_id: user2.id)
shelf2 = Shelf.create(name: 'Social Media', user_id: user3.id)
shelf3 = Shelf.create(name: 'Other', user_id: user4.id)
shelf4 = Shelf.create(name: 'Other', user_id: user5.id)

# Jimmy's Shelves

jimmyShelf1 = Shelf.create(name: 'Main Shelf', user_id: user1.id)
jimmyShelf2 = Shelf.create(name: 'Games', user_id: user1.id)
jimmyShelf3 = Shelf.create(name: 'News', user_id: user1.id)
jimmyShelf4 = Shelf.create(name: 'Movies', user_id: user1.id)
jimmyShelf5 = Shelf.create(name: 'Blogs', user_id: user1.id)
jimmyShelf6 = Shelf.create(name: 'Articals', user_id: user1.id)


category1 = Category.create(name: 'Entertainment')
category2 = Category.create(name: 'News')
category3 = Category.create(name: 'Social Media')
category4 = Category.create(name: 'Games')
category5 = Category.create(name: 'News')

bookmark1 = Bookmark.create(name: 'Facebook', url: 'www.facebook.com', description: 'Social media app', color: 'Blue', shelf_id: shelf1.id)
bookmark2 = Bookmark.create(name: 'Google', url: 'www.google.com', description: 'search engine', color: 'Orange', shelf_id: shelf2.id)
bookmark3 = Bookmark.create(name: 'Lighthouse Labs', url: 'www.lighthouselabs.ca', description: 'Education', color: 'Green', shelf_id: shelf2.id)
bookmark4 = Bookmark.create(name: 'Youtube', url: 'www.youtube.com', description: 'music app', color: 'Yellow', shelf_id: shelf2.id)
bookmark5 = Bookmark.create(name: 'Hudson Bay', url: 'www.thebay.com', description: 'shopping', color: 'Pink', shelf_id: shelf2.id)

#Jimmy's Bookmarks main shelf
jimmyBookmark1 = Bookmark.create(name: 'Facebook', url: 'https://www.facebook.com/', description: 'Social media app', color: 'Blue', shelf_id: jimmyShelf1.id)
jimmyBookmark2 = Bookmark.create(name: 'Google', url: 'https://www.google.com/', description: 'search engine', color: 'Orange', shelf_id: jimmyShelf1.id)
jimmyBookmark3 = Bookmark.create(name: 'Lighthouse Labs', url: 'www.lighthouselabs.ca', description: 'Education', color: 'Green', shelf_id: jimmyShelf1.id)
jimmyBookmark4 = Bookmark.create(name: 'Youtube', url: 'https://www.youtube.com/', description: 'music app', color: 'Yellow', shelf_id: jimmyShelf1.id)
jimmyBookmark5 = Bookmark.create(name: 'Hudson Bay', url: 'https://www.thebay.com/', description: 'shopping', color: 'Pink', shelf_id: jimmyShelf1.id)

#Jimmy's Bookmarks games shelf
jimmyBookmark6 = Bookmark.create(name: 'Mini Clip', url: 'https://www.miniclip.com/', description: 'shopping', color: 'Pink', shelf_id: jimmyShelf2.id)
jimmyBookmark7 = Bookmark.create(name: 'Addicting Games', url: 'https://www.addictinggames.com/', description: 'shopping', color: 'Pink', shelf_id: jimmyShelf2.id)
jimmyBookmark8 = Bookmark.create(name: 'Coffee Break Arcade', url: 'https://www.coffeebreakarcade.com/', description: 'shopping', color: 'Pink', shelf_id: jimmyShelf2.id)

#Jimmy's Bookmarks news shelf
jimmyBookmark9 = Bookmark.create(name: 'CBC News', url: 'https://www.cbc.ca/news', description: 'shopping', color: 'Pink', shelf_id: jimmyShelf3.id)
jimmyBookmark10 = Bookmark.create(name: 'Guelph News', url: 'https://www.guelphtoday.com/', description: 'shopping', color: 'Pink', shelf_id: jimmyShelf3.id)

#Jimmy's Bookmarks Movies shelf
jimmyBookmark11 = Bookmark.create(name: 'Netflix', url: 'https://www.netflix.com/ca/', description: 'movies', color: 'pink', shelf_id: jimmyShelf4.id)
jimmyBookmark12 = Bookmark.create(name: 'Prime Videos', url: 'https://www.amazon.ca/b?ie=UTF8&node=16040885011', description: 'movies', color: 'pink', shelf_id: jimmyShelf4.id)

#Jimmy's Bookmarks Blogs shelf
jimmyBookmark11 = Bookmark.create(name: 'Freecodecamp', url: 'https://www.freecodecamp.org/news/tag/trees/', description: 'articles', color: 'pink', shelf_id: jimmyShelf5.id)
jimmyBookmark11 = Bookmark.create(name: 'Medium', url: 'https://medium.com/', description: 'movies', color: 'pink', shelf_id: jimmyShelf5.id)

bookmarks_categories1 = BookmarksCategory.create(bookmarks_id: bookmark1.id, categories_id: category1.id)
bookmarks_categories2 = BookmarksCategory.create(bookmarks_id: bookmark2.id, categories_id: category2.id)
bookmarks_categories3 = BookmarksCategory.create(bookmarks_id: bookmark3.id, categories_id: category3.id)
bookmarks_categories4 = BookmarksCategory.create(bookmarks_id: bookmark4.id, categories_id: category4.id)
bookmarks_categories5 = BookmarksCategory.create(bookmarks_id: bookmark5.id, categories_id: category5.id)

















