// @flow

import React from "react";
import Profile from "../Profile";
import PageHead from "./PageHead";
import { QueryRenderer, graphql } from "react-relay";
import { type ProfileRouteQueryResponse } from "./__generated__/ProfileRouteQuery.graphql";

const ProfileRoute = ({ environment }: { environment: any }) => (
  <>
    <PageHead title="Profile" />
    <QueryRenderer
      environment={environment}
      query={graphql`
        query ProfileRouteQuery {
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
        props: ProfileRouteQueryResponse
      }) => {
        if (error) {
          return <div>{error.message}</div>;
        } else if (queryResponse) {
          return <Profile user={queryResponse.viewer} />;
        }
        return <div className="loader">Loading</div>;
      }}
    />
  </>
);

export default ProfileRoute;
