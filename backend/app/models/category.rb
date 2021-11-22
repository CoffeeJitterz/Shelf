class Category < ActiveRecord::Base
  has_many :bookmark_categories
  has_many :bookmarks, through: :bookmark_categories
end
