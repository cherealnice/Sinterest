class AddIndexAndUniquenessToUsername < ActiveRecord::Migration
  def change
    change_column_null :users, :username, false
  end
  add_index :users, :username, unique: true
end
