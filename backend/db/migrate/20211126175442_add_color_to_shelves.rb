class AddColorToShelves < ActiveRecord::Migration[6.1]
  def change
    add_column :shelves, :color, :string
  end
end
