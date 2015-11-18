class CreateSinBoardsTable < ActiveRecord::Migration
  def change
    create_table :sin_boards do |t|
      t.integer :board_id, null: false, index: true
      t.integer :sin_id, null: false, index: true
      t.timestamps null: false
    end
  end
end
