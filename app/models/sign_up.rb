class SignUp < ApplicationRecord
    validates :email, presence: true, email: true
    validates :reason, presence: true
end
  