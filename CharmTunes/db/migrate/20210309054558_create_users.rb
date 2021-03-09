class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email
      t.string :username
      t.string :password_digest
      t.string :session_token
      t.string :date_of_birth
      t.string :country_or_region
      t.string :plan
    end
  end
end
