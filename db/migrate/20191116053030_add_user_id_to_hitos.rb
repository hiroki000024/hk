class AddUserIdToHitos < ActiveRecord::Migration[5.2]
  def change
    add_column :hitos, :user_id, :integer
  end
end
