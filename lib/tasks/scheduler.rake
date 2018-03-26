namespace :scheduler do
  desc "Send the new reviews summary to each user"
  task send_new_reviews_summary: [:environment] do
    User.joins(:user_preference)
      .where(user_preferences: { send_new_reviews_summary: true })
      .find_each do |user|

      user_timezone = user.timezone || Rails.application.config.time_zone
      Time.use_zone(user_timezone) do
        is_weekend = Time.zone.now.saturday? || Time.zone.now.sunday?
        unless is_weekend || Time.now.hour == SummaryMailer::DELIVERY_HOUR
          SummaryMailer.new_reviews(user).deliver_now
        end
      end
    end
  end
end
