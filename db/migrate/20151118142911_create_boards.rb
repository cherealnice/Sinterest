class CreateBoards < ActiveRecord::Migration
  def change
    create_table :boards do |t|
      t.text :title, limit: 50, null: false, index: true
      t.text :description, limit: 500
      t.integer :author_id, null: false, index: true
      t.timestamps null: false
    end
  end
end
