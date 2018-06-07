require "rails_helper"

RSpec.describe ReceiveInstallationRepositoriesEvent, type: :model do
  it "creates a Repository for each name" do
    expect(Repository).to receive(:find_or_create_by).with(owner: "test-ops", name: "test-base")
    expect(Repository).to receive(:find_or_create_by).with(owner: "test-ops", name: "test-app")
    expect(Repository).to receive(:find_or_create_by).with(owner: "test-ops", name: "test-db")

    ReceiveInstallationRepositoriesEvent.new.perform([{"id"=>1, "name"=>"test-base", "full_name"=>"test-ops/test-base", "private"=>true}, {"id"=>2, "name"=>"test-app", "full_name"=>"test-ops/test-app", "private"=>true}, {"id"=>3, "name"=>"test-db", "full_name"=>"test-ops/test-db", "private"=>true}])
  end
end
