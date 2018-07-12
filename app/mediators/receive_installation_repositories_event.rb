class ReceiveInstallationRepositoriesEvent
  include Sidekiq::Worker

  def perform(repositories, installation_id = nil)
    if installation_id
      Current.installation_id = installation_id
    end

    repositories.each do |repository|
      owner, name = repository["full_name"].split("/", 2)
      repo = Repository.find_or_initialize_by(owner: owner, name: name)
      if repo.new_record?
        repo.save!
        ReceivePushEvent.perform_async(repo.full_name, installation_id)
      end
    end

    Current.reset
  end
end
