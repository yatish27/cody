require "rails_helper"

RSpec.describe SlackIdentity, type: :model do
  it { is_expected.to validate_presence_of :uid }

  it { is_expected.to belong_to :user }
  it { is_expected.to belong_to :slack_team }
end
