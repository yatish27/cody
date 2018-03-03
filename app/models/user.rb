class User < ApplicationRecord
  validates :login, presence: true
  validates :uid, presence: true

  has_one :user_preference, inverse_of: :user

  USER_PREFERENCES = %i[
    send_new_reviews_summary
    send_new_reviews_summary?
  ].freeze

  delegate *USER_PREFERENCES, to: :user_preference, allow_nil: true
end
