class AddSendReviewRequestedNotificationToUserPreferences < ActiveRecord::Migration[5.1]
  def change
    add_column :user_preferences, :send_review_requested_notification, :boolean
  end
end
