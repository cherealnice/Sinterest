class CreateBoards < ActiveRecord::Migration
  def change
    create_table :boards do |t|
      t.string :title, limit: 50, null: false, index: true
      t.string :description, limit: 500
      t.integer :author_id, null: false, index: true
      t.timestamps null: false
    end
  end
end
