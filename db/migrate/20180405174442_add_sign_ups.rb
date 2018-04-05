class AddSignUps < ActiveRecord::Migration[5.1]
  
  def change
    enable_extension 'uuid-ossp'

    create_table :sign_ups, id: :uuid, default: 'uuid_generate_v4()' do |t|
      t.string :email
      t.string :zipcode
      t.string :name
      t.text :reason

      t.timestamps
    end
  end
end
