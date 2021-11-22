class Bookmark < ActiveRecord::Base
  belongs_to :shelf, foreign_key: true
end
