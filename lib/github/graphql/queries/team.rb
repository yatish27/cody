Github::Graphql::Queries::Team = Github::Graphql::Client.parse <<-'GRAPHQL'
  query($org: String!, $slug: String!, $cursor: String) {
    organization(login: $org) {
      team(slug: $slug) {
        name
        combinedSlug
        url
        members(first: 10, after: $cursor) {
          edges {
            node {
              login
            }
          }
          pageInfo {
            endCursor
            hasNextPage
          }
        }
      }
    }
  }
GRAPHQL
