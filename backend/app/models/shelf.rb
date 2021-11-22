class Shelf < ActiveRecord::Base
  has_many :bookmarks
  belongs_to :user
end
