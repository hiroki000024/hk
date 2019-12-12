class RemoveUserIdFromHitos < ActiveRecord::Migration[5.2]
  def change
    remove_column :hitos, :user_id, :string
  end
end
