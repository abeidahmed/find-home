class CreateTagnations < ActiveRecord::Migration[6.0]
  def change
    create_table :tagnations do |t|
      t.references :tag, null: false, foreign_key: true
      t.references :post, null: false, foreign_key: true

      t.timestamps
    end
  end
end
