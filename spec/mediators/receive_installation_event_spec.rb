require 'rails_helper'

RSpec.describe ReceiveInstallationEvent do
  describe "#perform" do
    let(:payload) do
      json_fixture("installation_event")
    end

    context "when the action is 'created'" do
      it "creates an installation record" do
        job = ReceiveInstallationEvent.new
        expect { job.perform(payload) }.to change { Installation.count }.by(1)
      end
    end

    context "when the action is 'deleted'" do
      before do
        payload["action"] = "deleted"
      end

      it "destroys a preexisting record" do
        installation = Installation.create!(installation_id: payload["installation"]["id"])

        job = ReceiveInstallationEvent.new
        job.perform(payload)

        expect(Installation.exists?(id: installation.id)).to be_falsey
      end
    end
  end
end
