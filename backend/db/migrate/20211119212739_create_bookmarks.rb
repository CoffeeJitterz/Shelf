class CreateBookmarks < ActiveRecord::Migration[6.1]
  def change
    create_table :bookmarks do |t|
      t.string :name
      t.string :url
      t.string :description
      t.string :color
      t.integer :shelf_id, index: true
      

      t.timestamps null: false
    end
  end
end
