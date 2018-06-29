Types::UserType = GraphQL::ObjectType.define do
  name "User"

  implements GraphQL::Relay::Node.interface

  global_id_field :id

  field :login, !types.String
  field :email, types.String
  field :name, !types.String
  field :sendNewReviewsSummary, !types.Boolean do
    resolve ->(obj, args, ctx) {
      !!obj.send_new_reviews_summary?
    }
  end

  connection :repositories, Types::RepositoryType.connection_type do
    resolve ->(user, args, ctx) {
      Pundit.policy_scope(user, Repository)
    }
  end

  field :repository do
    type Types::RepositoryType
    description "Find a given repository by the owner and name"
    argument :owner, !types.String
    argument :name, !types.String
    resolve ->(user, args, ctx) {
      Pundit.policy_scope(user, Repository)
        .find_by(owner: args[:owner], name: args[:name])
    }
  end
end
