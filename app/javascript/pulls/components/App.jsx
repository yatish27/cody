// @flow

import React from "react";
import Nav from "./Nav";
import PullRequestList from "./PullRequestList";
import PullRequestDetail from "./PullRequestDetail";
import RepositoryList from "./RepositoryList";
import Profile from "./Profile";
import makeEnvironment from "../makeEnvironment";
import { QueryRenderer, graphql } from "react-relay";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { type App_RepoList_QueryResponse } from "./__generated__/App_RepoList_Query.graphql";
import { type App_List_QueryResponse } from "./__generated__/App_List_Query.graphql";
import { type App_Detail_QueryResponse } from "./__generated__/App_Detail_Query.graphql";
import { type App_Profile_QueryResponse } from "./__generated__/App_Profile_Query.graphql";

const csrfToken = document
  .getElementsByName("csrf-token")[0]
  .getAttribute("content");

const environment = makeEnvironment(csrfToken);

const App = () => (
  <BrowserRouter>
    <div>
      <Nav />
      <Switch>
        <Route
          exact
          path="/repos"
          render={() => {
            return (
              <QueryRenderer
                environment={environment}
                query={graphql`
                  query App_RepoList_Query {
                    viewer {
                      ...RepositoryList_viewer
                    }
                  }
                `}
                variables={{}}
                render={({
                  error,
                  props: queryResponse
                }: {
                  error: any,
                  props: App_RepoList_QueryResponse
                }) => {
                  if (error) {
                    return <div>{error.message}</div>;
                  } else if (queryResponse) {
                    return <RepositoryList viewer={queryResponse.viewer} />;
                  }
                  return <div className="loader">Loading</div>;
                }}
              />
            );
          }}
        />
        <Route
          exact
          path="/repos/:owner/:name/pulls"
          render={({ match }) => {
            return (
              <QueryRenderer
                environment={environment}
                query={graphql`
                  query App_List_Query(
                    $owner: String!
                    $name: String!
                    $cursor: String
                  ) {
                    viewer {
                      repository(owner: $owner, name: $name) {
                        ...PullRequestList_repository
                      }
                      login
                      name
                    }
                  }
                `}
                variables={{
                  owner: match.params.owner,
                  name: match.params.name
                }}
                render={({
                  error,
                  props: queryResponse
                }: {
                  error: any,
                  props: App_List_QueryResponse
                }) => {
                  if (error) {
                    return <div>{error.message}</div>;
                  } else if (queryResponse && queryResponse.viewer) {
                    return (
                      <PullRequestList
                        repository={queryResponse.viewer.repository}
                      />
                    );
                  }
                  return <div className="loader">Loading</div>;
                }}
              />
            );
          }}
        />
        <Route
          exact
          path="/repos/:owner/:name/pull/:number"
          render={({ match }) => {
            return (
              <QueryRenderer
                environment={environment}
                query={graphql`
                  query App_Detail_Query(
                    $owner: String!
                    $name: String!
                    $number: String!
                  ) {
                    viewer {
                      repository(owner: $owner, name: $name) {
                        pullRequest(number: $number) {
                          ...PullRequestDetail_pullRequest
                        }
                      }
                    }
                  }
                `}
                variables={{
                  owner: match.params.owner,
                  name: match.params.name,
                  number: match.params.number
                }}
                render={({
                  error,
                  props: queryResponse
                }: {
                  error: any,
                  props: App_Detail_QueryResponse
                }) => {
                  if (error) {
                    return <div>{error.message}</div>;
                  } else if (
                    queryResponse &&
                    queryResponse.viewer &&
                    queryResponse.viewer.repository
                  ) {
                    return (
                      <PullRequestDetail
                        pullRequest={
                          queryResponse.viewer.repository.pullRequest
                        }
                      />
                    );
                  }
                  return <div className="loader">Loading</div>;
                }}
              />
            );
          }}
        />
        <Route
          exact
          path="/repos/:owner/:name"
          render={({ match }) => {
            return (
              <Redirect
                to={`/repos/${match.params.owner}/${match.params.name}/pulls`}
              />
            );
          }}
        />
        <Route
          exact
          path="/profile"
          render={() => {
            return (
              <QueryRenderer
                environment={environment}
                query={graphql`
                  query App_Profile_Query {
                    viewer {
                      ...Profile_user
                    }
                  }
                `}
                variables={{}}
                render={({
                  error,
                  props: queryResponse
                }: {
                  error: any,
                  props: App_Profile_QueryResponse
                }) => {
                  if (error) {
                    return <div>{error.message}</div>;
                  } else if (queryResponse) {
                    return <Profile user={queryResponse.viewer} />;
                  }
                  return <div className="loader">Loading</div>;
                }}
              />
            );
          }}
        />
        <Redirect from="/" to="/repos" />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
