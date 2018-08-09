require "graphql/client"
require "graphql/client/http"

module Github
  module Graphql
    ENDPOINT = "https://api.github.com/graphql".freeze

    HTTP = GraphQL::Client::HTTP.new(ENDPOINT) do
      def headers(context)
        {
          "Authorization": "bearer #{context[:token]}"
        }
      end
    end

    Schema = GraphQL::Client.load_schema(
      Rails.root.join("github_graphql_schema.json")
    )

    Client = GraphQL::Client.new(
      execute: Github::Graphql::HTTP,
      schema: Github::Graphql::Schema
    )
  end
end
