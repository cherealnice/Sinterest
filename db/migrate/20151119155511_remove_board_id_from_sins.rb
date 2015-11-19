class RemoveBoardIdFromSins < ActiveRecord::Migration
  def change
    remove_column :sins, :board_id
  end
end
