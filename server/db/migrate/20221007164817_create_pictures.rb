class CreatePictures < ActiveRecord::Migration[7.0]
  def change
    create_table :pictures do |t|
      t.text :description
      t.string :img
      t.belongs_to :user
      t.timestamps
    end
  end
end
