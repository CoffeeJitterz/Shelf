class Bookmark < ActiveRecord::Base
  belongs_to :shelf
  has_many :bookmark_categories
  has_many :categories, through: :bookmark_categories
end
