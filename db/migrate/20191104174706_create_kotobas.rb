class CreateKotobas < ActiveRecord::Migration[5.2]
  def change
    create_table :kotobas do |t|
      t.string        :name
      t.text          :image
      t.text          :word
      t.timestamps
    end
  end
end
