class Notifier
  include Sidekiq::Worker

  def perform(mailer_class, params)
    case mailer_class
    when "review_requested_mailer"
      ReviewRequestedMailer.with(params.with_indifferent_access)
        .review_requested
        .deliver_now
    end
  end
end
