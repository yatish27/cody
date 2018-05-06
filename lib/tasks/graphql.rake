namespace :graphql do
  desc "Export the GraphQL schema"
  task schema: :environment do
    File.write(
      Rails.root.join("schema.graphql"),
      GraphQL::Schema::Printer.print_schema(CodySchema)
    )
  end

  desc "Run Relay compiler"
  task relay: :schema do
    sh "bin/yarn relay"
  end
end
