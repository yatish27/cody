class ReviewRequestedMailer < ApplicationMailer
  def review_requested
    @reviewer = Reviewer.find(params[:reviewer_id])
    @user = User.find_by(login: @reviewer.login)
    email = @user&.email

    return unless email.present?
    return unless @user.send_review_requested_notification?

    mail(to: email, subject: "You were assigned a code review")
  end
end
