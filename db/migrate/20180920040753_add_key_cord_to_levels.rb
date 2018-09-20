class AddKeyCordToLevels < ActiveRecord::Migration[5.2]
  def change
    add_column :levels, :key_cord, :string
  end
end
