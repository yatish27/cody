class SummaryMailer < ApplicationMailer
  def pending_reviews_summary(user)
    @pending_reviews =
      PullRequest.joins(:reviewers)
        .where(reviewers: { login: user.login })
        .where(reviewers: { status: "pending_approval" })
        .order("created_at DESC")
        .limit(10)

    mail(to: user.email)
  end

  def new_reviews(user)
    return unless user.email

    @pending_reviews =
      Reviewer.joins(:pull_request)
        .includes(:pull_request).includes(:review_rule)
        .where(login: user.login, status: Reviewer::STATUS_PENDING_APPROVAL)
        .where(pull_request: { status: "pending_review" })
        .order("reviewers.created_at DESC").all

    return if @pending_reviews.empty?

    @pending_reviews =
      @pending_reviews.group_by { |r| r.review_rule&.name || "Peer Review" }

    mail(
      to: user.email,
      subject: "New Code Reviews Summary"
    )
  end
end
