class RemoveUsernameFromUsers < ActiveRecord::Migration
  def change
    remove_column :users, :username
    change_column_null :users, :fname, true
    change_column_null :users, :lname, true
  end
end
