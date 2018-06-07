class ReceiveInstallationRepositoriesEvent
  include Sidekiq::Worker

  def perform(repositories)
    repositories.each do |repository|
      owner, name = repository["full_name"].split("/", 2)
      Repository.find_or_create_by(owner: owner, name: name)
    end
  end
end
