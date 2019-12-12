class AddAdanaToHitos < ActiveRecord::Migration[5.2]
  def change
    add_column :hitos, :adana, :string
  end
end
