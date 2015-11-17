class AddSinIdToComments < ActiveRecord::Migration
  def change
    add_column :comments, :sin_id, :integer, null: false, index: true
  end
end
