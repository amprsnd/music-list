class CreateTracks < ActiveRecord::Migration[5.0]
  def change
    create_table :tracks do |t|
      t.string :artist
      t.string :title
      t.string :genre
      t.integer :year

      t.timestamps
    end
  end
end
