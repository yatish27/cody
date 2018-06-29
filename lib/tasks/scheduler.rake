namespace :scheduler do
  desc "Send the new reviews summary to each user"
  task send_new_reviews_summary: [:environment] do
    # don't send summaries on weekends
    unless Time.zone.now.saturday? || Time.zone.now.sunday?
      User.joins(:user_preference)
        .where(user_preferences: { send_new_reviews_summary: true })
        .find_each do |user|

          SummaryMailer.new_reviews(user).deliver_now
        end
    end
  end
end
