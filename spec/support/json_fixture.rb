require "json"
require "erb"

module JsonFixture
  # Parse a JSON fixture, optionally evaluating ERB if the `.erb` extension is
  # used.
  #
  # @param path [String] the name of the fixture file without extensions
  # @param locals [Hash] a Hash of local variables if using ERB
  # @return the result of loading the JSON
  def json_fixture(path, locals = {})
    contents =
      if Rails.root.join("spec", "fixtures", "#{path}.json.erb").exist?
        erb = File.open(Rails.root.join("spec", "fixtures", "#{path}.json.erb")).read
        ERB.new(erb).result_with_hash(locals)
      else
        File.open(Rails.root.join("spec", "fixtures", "#{path}.json"))
      end
    JSON.load(contents)
  end
end

RSpec.configure do |config|
  config.include JsonFixture
end
