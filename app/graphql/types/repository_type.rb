Types::RepositoryType = GraphQL::ObjectType.define do
  name "Repository"

  implements GraphQL::Relay::Node.interface

  global_id_field :id

  field :owner, !types.String
  field :name, !types.String

  connection :pullRequests, Types::PullRequestType.connection_type do
    description "This repository's Pull Requests"
    argument :status, types.String
    resolve -> (repository, args, ctx) {
      # status = args[:status] || "pending_review"
      repository.pull_requests.order("created_at DESC")
    }
  end

  field :pullRequest do
    type Types::PullRequestType
    argument :number, !types.String
    description "Find a PullRequest by number"
    resolve -> (repository, args, ctx) {
      repository.pull_requests.find_by(number: args[:number])
    }
  end

  connection :reviewRules do
    type Types::ReviewRuleType.connection_type
    description "This repository's review rules"
    resolve -> (repository, args, ctx) {
      repository.review_rules
    }
  end

  field :reviewRule do
    type Types::ReviewRuleType
    argument :shortCode, !types.String
    description "Find a Review Rule by code"
    resolve -> (repository, args, ctx) {
      repository.review_rules.find_by(short_code: args[:shortCode])
    }
  end
end
