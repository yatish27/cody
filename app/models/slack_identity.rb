# frozen_string_literal: true

class SlackIdentity < ApplicationRecord
  validates :uid, presence: true

  belongs_to :user, required: true
  belongs_to :slack_team, required: true
end
