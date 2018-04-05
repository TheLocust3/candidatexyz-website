class SignUp < ApplicationRecord
    validates :email, presence: true, email: true
    validates :reason, presence: true
    validates :zipcode, presence: true, zipcode: true
end
  