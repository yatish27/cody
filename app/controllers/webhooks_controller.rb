# frozen_string_literal: true

class WebhooksController < ApplicationController
  protect_from_forgery with: :null_session

  before_action :verify_webhook_signature, only: [:integration]

  def pull_request
    body = JSON.parse(request.body.read)

    if %w(opened synchronize closed).include?(body["action"])
      ReceivePullRequestEvent.perform_async(body)
    end

    head :accepted
  end

  def issue_comment
    body = JSON.parse(request.body.read)

    if body.key?("zen")
      head :ok
      return
    end

    ReceiveIssueCommentEvent.perform_async(body)
    head :accepted
  end

  # The entry point for webhooks from the GitHub app
  def integration
    body = JSON.parse(request.body.read)

    if body.key?("zen")
      head :ok
      return
    end

    request.body.rewind

    event = request.headers["X-GitHub-Event"]
    case event
    when "push"
      ref = body["ref"]
      unless ref == "refs/heads/master"
        head :ok
        return
      end

      ReceivePushEvent.perform_async(
        body["repository"]["full_name"],
        body.dig("installation", "id")
      )
    when "pull_request"
      pull_request
      return
    when "issue_comment"
      issue_comment
      return
    when "installation"
      ReceiveInstallationRepositoriesEvent.perform_async(
        body["repositories"],
        body.dig("installation", "id")
      )
    when "installation_repositories"
      ReceiveInstallationRepositoriesEvent
        .perform_async(
          body["repositories_added"],
          body.dig("installation", "id")
        )
    end

    head :accepted
  end

  private

  def verify_webhook_signature
    request.body.rewind
    body = request.body.read
    unless valid_signature?(body)
      head :bad_request
      return
    end
    request.body.rewind
  end

  def valid_signature?(payload_body)
    secret = ENV.fetch("CODY_GITHUB_WEBHOOK_SECRET")
    signature = "sha1=#{OpenSSL::HMAC.hexdigest(OpenSSL::Digest.new("sha1"), secret, payload_body)}" # rubocop:disable Metrics/LineLength
    expected_signature = request.headers["X-Hub-Signature"]
    ActiveSupport::SecurityUtils.secure_compare(signature, expected_signature)
  end
end
