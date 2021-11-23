class CreateBookmarksCategories < ActiveRecord::Migration[6.1]
  def change
    create_table :bookmarks_categories do |t|
      t.references :bookmarks, foreign_key: true
      t.references :categories, foreign_key: true

      t.timestamps
    end
  end
end
