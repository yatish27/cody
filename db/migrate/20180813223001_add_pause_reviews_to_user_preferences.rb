class AddPauseReviewsToUserPreferences < ActiveRecord::Migration[5.1]
  def change
    add_column :user_preferences, :pause_reviews, :boolean
  end
end
