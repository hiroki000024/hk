class RemoveUserIdHitos < ActiveRecord::Migration[5.2]
  def change
    remove_column : hitos,user_id, :integer
  end
end
