class ReceivePullRequestEvent
  include Sidekiq::Worker
  include Skylight::Helpers

  instrument_method
  def perform(payload)
    Current.reset

    @payload = payload

    Raven.user_context(
      username: @payload["sender"]["login"]
    )
    Raven.tags_context(
      event: "pull_request",
      repo: @payload["repository"]["full_name"]
    )

    if (installation_id = @payload.dig("installation", "id"))
      Current.installation_id = installation_id
    end

    PaperTrail.whodunnit(@payload["sender"]["login"]) do
      case @payload["action"]
      when "opened"
        self.on_opened
      when "synchronize"
        self.on_synchronize
      when "closed"
        self.on_closed
      end
    end

    Current.reset
  end

  instrument_method
  def on_opened
    CreateOrUpdatePullRequest.new.perform(@payload["pull_request"])
  end

  instrument_method
  def on_closed
    number = @payload["number"]
    repository = @payload["repository"]["full_name"]
    if (pr = PullRequest.find_by(number: number, repository: repository))
      if pr.status == "pending_review"
        pr.status = PullRequest::STATUS_CLOSED
        pr.save!
        pr.update_status("Pull Request closed")
      end
    end
  end

  # The "synchronize" event occurs whenever a new commit is pushed to the branch
  # or the branch is rebased.
  #
  # In this case, we preserve the current review status and update the new
  # commit with the correct status indicator.
  instrument_method
  def on_synchronize
    number = @payload["number"]
    repository = @payload["repository"]["full_name"]

    if pr = PullRequest.find_by(number: number, repository: repository)
      pr.update_status
    else
      CreateOrUpdatePullRequest.new.perform(@payload["pull_request"])
    end
  end
end
