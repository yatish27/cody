class UserPreference < ApplicationRecord
  belongs_to :user, inverse_of: :user_preference
end
