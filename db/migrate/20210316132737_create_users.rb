class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email
      t.string :username
      t.string :profile_name

      t.string :password_digest
      t.string :session_token
      t.datetime :date_of_birth
      t.string :country_or_region
      t.string :plan

      t.timestamps
    end
    add_index :users, :email 
    add_index :users, :username
    add_index :users, :profile_name
  end
end
