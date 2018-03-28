// @flow

import React from "react";
import { commitMutation, createFragmentContainer, graphql } from "react-relay";
import moment from "moment-timezone";
import TextField from "./inputs/TextField";
import Checkbox from "./inputs/Checkbox";
import Select from "./inputs/Select";
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
  timezone: string,
  lastResponseSuccess: boolean
};

class Profile extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      email: this.props.user.email != null ? this.props.user.email : "",
      sendNewReviewsSummary: this.props.user.sendNewReviewsSummary,
      timezone:
        this.props.user.timezone != null ? this.props.user.timezone : "",
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
          sendNewReviewsSummary: this.state.sendNewReviewsSummary,
          timezone: this.state.timezone
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
                <Select
                  label="Time Zone"
                  name="timezone"
                  options={moment.tz.names()}
                  selected={this.state.timezone}
                  hint="Setting your time zone affects when certain digest emails are delivered to you."
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
                  hint="Delivered at 8 am in your selected time zone."
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
      timezone
    }
  `
);
