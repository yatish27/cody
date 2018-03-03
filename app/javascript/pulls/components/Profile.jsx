// @flow

import React from "react";
import { commitMutation, createFragmentContainer, graphql } from "react-relay";
import TextField from "./inputs/TextField";
import Checkbox from "./inputs/Checkbox";
import type { Profile_user } from "./__generated__/Profile_user.graphql";

const UPDATE_USER_MUTATION = graphql`
  mutation ProfileUpdateUserMutation($input: UpdateUserInput!) {
    updateUser(input: $input) {
      user {
        ...Profile_user
      }
    }
  }
`;

type Props = {
  user: Profile_user,
  relay: any
};

type State = {
  email: string,
  sendNewReviewsSummary: boolean,
  lastResponseSuccess: boolean
};

class Profile extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      email: this.props.user.email != null ? this.props.user.email : "",
      sendNewReviewsSummary: this.props.user.sendNewReviewsSummary,
      lastResponseSuccess: false
    };
  }

  handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
    const target = event.currentTarget;
    const name = target.name;
    const value = target.type == "checkbox" ? target.checked : target.value;
    this.setState({ [name]: value });
  };

  saveChanges = () => {
    this.setState({ lastResponseSuccess: false });
    commitMutation(this.props.relay.environment, {
      mutation: UPDATE_USER_MUTATION,
      variables: {
        input: {
          email: this.state.email,
          sendNewReviewsSummary: this.state.sendNewReviewsSummary
        }
      },
      onCompleted: () => {
        this.setState({ lastResponseSuccess: true });
      }
    });
  };

  render() {
    return (
      <div>
        <section className="section">
          <div className="container">
            {this.state.lastResponseSuccess ? (
              <article className="message is-success">
                <div className="message-body">Profile updated successfully</div>
              </article>
            ) : null}
            <div className="columns">
              <div className="column is-half">
                <h1 className="title">Profile</h1>
                <TextField
                  label="Email"
                  name="email"
                  value={this.state.email}
                  handleChange={this.handleChange}
                />

                <h2 className="title is-4 is-spaced form-section-header">
                  Subscription Preferences
                </h2>
                <Checkbox
                  label="Send code review summary digests"
                  name="sendNewReviewsSummary"
                  checked={this.state.sendNewReviewsSummary}
                  handleChange={this.handleChange}
                />

                <div className="field">
                  <div className="control">
                    <button
                      className="button is-primary"
                      onClick={this.saveChanges}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default createFragmentContainer(
  Profile,
  graphql`
    fragment Profile_user on User {
      login
      email
      name
      sendNewReviewsSummary
    }
  `
);
