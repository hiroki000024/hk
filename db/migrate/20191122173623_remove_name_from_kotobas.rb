class RemoveNameFromKotobas < ActiveRecord::Migration[5.2]
  def change
    remove_column :kotobas, :name, :string
  end
end
