class RenameFileMatchToSelector < ActiveRecord::Migration[5.1]
  def change
    rename_column :review_rules, :file_match, :selector
  end
end
