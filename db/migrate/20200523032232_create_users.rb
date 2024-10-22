class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :first_name,         null: false
      t.string :last_name,          null: false
      t.string :email,              null: false
      t.string :password_digest
      t.boolean :admin,             default: false

      t.timestamps
    end
    add_index :users, [:first_name, :last_name, :email]
  end
end
