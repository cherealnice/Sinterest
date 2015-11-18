class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.string :title
      t.references :imageable, null: false, polymorphic: true, index: true

      t.timestamps null: false
    end
      add_attachment :images, :image
  end
end
