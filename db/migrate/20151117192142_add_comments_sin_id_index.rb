class AddCommentsSinIdIndex < ActiveRecord::Migration
  def change
    add_index :comments, :sin_id
  end
end
