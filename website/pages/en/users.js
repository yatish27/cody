/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");
const Container = CompLibrary.Container;

const siteConfig = require(process.cwd() + "/siteConfig.js");

class Users extends React.Component {
  render() {
    const showcase = siteConfig.users.map((user, i) => {
      return (
        <div key={i} className="userLogo">
          <a href={user.infoLink}>
            <img src={user.image} title={user.caption} alt={user.caption} />
          </a>
        </div>
      );
    });

    return (
      <div className="mainContainer">
        <Container padding={["bottom", "top"]}>
          <div className="showcaseSection">
            <div className="prose">
              <h1>Who's Using This?</h1>
            </div>
            <div className="userShowcase">{showcase}</div>
            <hr />
            <div className="prose small">
              <p>Logos are submitted by company and project representatives.</p>
              <p>
                To add your company or project to this page, please open a PR!
              </p>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Users;
