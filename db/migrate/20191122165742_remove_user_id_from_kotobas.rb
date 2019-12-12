class RemoveUserIdFromKotobas < ActiveRecord::Migration[5.2]
  def change
    remove_column :kotobas, :user_id, :integer
  end
end
