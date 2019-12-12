class AddHitoIdToKotobas < ActiveRecord::Migration[5.2]
  def change
    add_column :kotobas, :hito_id, :integer
  end
end
