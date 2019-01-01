// @flow

import React from "react";
import RepositoryList from "../RepositoryList";
import PageHead from "./PageHead";
import { QueryRenderer, graphql } from "react-relay";
import { type ReposRouteQueryResponse } from "./__generated__/ReposRouteQuery.graphql";

const ReposRoute = ({ environment }: { environment: any }) => (
  <>
    <PageHead title="Repositories" />
    <QueryRenderer
      environment={environment}
      query={graphql`
        query ReposRouteQuery {
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
        props: ReposRouteQueryResponse
      }) => {
        if (error) {
          return <div>{error.message}</div>;
        } else if (queryResponse) {
          return <RepositoryList viewer={queryResponse.viewer} />;
        }
        return <div className="loader">Loading</div>;
      }}
    />
  </>
);

export default ReposRoute;
