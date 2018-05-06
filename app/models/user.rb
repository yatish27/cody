class User < ApplicationRecord
  validates :login, presence: true
  validates :uid, presence: true

  has_one :user_preference, inverse_of: :user

  USER_PREFERENCES = %i[
    send_new_reviews_summary
    send_new_reviews_summary?
  ].freeze

  # rubocop:disable Lint/AmbiguousOperator
  delegate *USER_PREFERENCES, to: :user_preference, allow_nil: true
  # rubocop:enable Lint/AmbiguousOperator

  def role
    ActiveSupport::StringInquirer.new(super)
  end
end
