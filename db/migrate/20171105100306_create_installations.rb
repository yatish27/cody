class CreateInstallations < ActiveRecord::Migration[5.1]
  def change
    create_table :installations do |t|
      t.string :installation_id
      t.timestamps
    end
  end
end
