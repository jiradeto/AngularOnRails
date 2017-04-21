class CreatePhotos < ActiveRecord::Migration[5.0]
  def change
    create_table :photos do |t|
      t.string :title
      t.text :url
      t.boolean :private, default: false, null: false
      t.integer :price
      t.text :description
      t.timestamps
    end
  end
end
