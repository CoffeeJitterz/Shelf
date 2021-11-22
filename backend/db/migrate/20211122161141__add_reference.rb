class AddReference < ActiveRecord::Migration
  def change
    add_reference :bookmark, :shelf, foreign_key: true
  end
end
