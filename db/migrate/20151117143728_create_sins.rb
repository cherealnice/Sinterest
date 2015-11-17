class CreateSins < ActiveRecord::Migration
  def change
    create_table :sins do |t|
      t.string :title, limit: 100, null: false, index: true
      t.string :description, limit: 500, null: false
      t.string :link, limit: 2083
      t.integer :board_id, index: true, null: false
      t.integer :user_id, index: true, null: false

      t.timestamps null: false
    end
  end
end
