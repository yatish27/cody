class Repository < ApplicationRecord
  has_many :pull_requests
  has_many :review_rules
  has_many :settings
end
