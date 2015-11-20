class CreateFollows < ActiveRecord::Migration
  def change
    create_table :follows do |t|
      t.integer :user_id, null: false, index: true
      t.references :followable, polymorphic: true, index: true

      t.timestamps null: false
    end
    add_index :likes, :user_id
  end
end
