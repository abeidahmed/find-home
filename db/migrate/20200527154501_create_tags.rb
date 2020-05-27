class CreateTags < ActiveRecord::Migration[6.0]
  def change
    create_table :tags do |t|
      t.string :title,      null: false
      t.text :description

      t.timestamps
    end
    add_index :tags, :title
  end
end
