class AddUserIdKotobas < ActiveRecord::Migration[5.2]
  def change
    add_column :kotobas, :user_id, :integer
  end
end
