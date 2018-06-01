Mutations::UpdateUser = GraphQL::Relay::Mutation.define do
  name "UpdateUser"
  return_field :user, Types::UserType

  input_field :email, !types.String
  input_field :sendNewReviewsSummary, !types.Boolean
  input_field :sendReviewRequestedNotifications, !types.Boolean

  resolve ->(obj, args, ctx) {
    ctx[:current_user].update!(email: args[:email])
    unless ctx[:current_user].user_preference.present?
      ctx[:current_user].build_user_preference
    end
    ctx[:current_user].user_preference
      .update!(
        send_new_reviews_summary: args[:sendNewReviewsSummary],
        send_review_requested_notification: args[:sendReviewRequestedNotifications]
      )

    {
      user: ctx[:current_user]
    }
  }
end
