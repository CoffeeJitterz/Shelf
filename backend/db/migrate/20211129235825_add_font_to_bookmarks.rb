class AddFontToBookmarks < ActiveRecord::Migration[6.1]
  def change
    add_column :bookmarks, :font, :string
  end
end
