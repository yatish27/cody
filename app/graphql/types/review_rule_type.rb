Types::ReviewRuleType = GraphQL::ObjectType.define do
  name "ReviewRule"

  implements GraphQL::Relay::Node.interface

  global_id_field :id

  field :name, !types.String, "The rule's name"
  field :shortCode, !types.String do
    description "Short code identifying the rule in commands"
    resolve ->(obj, args, ctx) {
      obj.short_code
    }
  end
  field :type, !types.String, "The rule's type"
  field :reviewer, !types.String, "The reviewer assigned to this rule" do
    resolve ->(obj, args, ctx) {
      obj.reviewer_human_name
    }
  end
  field :repository, !types.String, "The repository that owns this rule"
  field :match, !types.String, "The criteria used to match this rule" do
    resolve ->(obj, args, ctx) {
      case obj
      when ReviewRuleAlways
        true
      else
        obj.file_match
      end
    }
  end
end
