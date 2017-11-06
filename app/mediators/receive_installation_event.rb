class ReceiveInstallationEvent
  include Sidekiq::Worker

  def perform(body)
    case body["action"]
    when "created"
      Installation.find_or_create_by!(
        installation_id: body["installation"]["id"]
      )
    when "deleted"
      Installation.find_by(installation_id: body["installation"]["id"])
        &.destroy!
    end
  end
end
