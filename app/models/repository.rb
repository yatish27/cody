class Repository < ApplicationRecord
  has_many :pull_requests
  has_many :review_rules
  has_many :settings

  def self.find_by_full_name(full_name)
    owner, name = full_name.split("/", 2)
    self.find_by(owner: owner, name: name)
  end

  # @param key [String]
  # @return [String]
  def read_setting(key)
    self.settings.find_by(key: key)&.read
  end
end
