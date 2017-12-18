/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

class HomeSplash extends React.Component {
  render() {
    return (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">
            <div className="inner">
              <h2 className="projectTitle">
                {siteConfig.title}
                <small>{siteConfig.tagline}</small>
              </h2>
              <div className="section promoSection">
                <div className="promoRow">
                  <div className="pluginRowBlock">
                    <Button
                      href={
                        siteConfig.baseUrl +
                        'docs/commands.html'
                      }>
                      Documentation
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Index extends React.Component {
  render() {
    let language = this.props.language || 'en';
    const showcase = siteConfig.users
      .filter(user => {
        return user.pinned;
      })
      .map(user => {
        return (
          <a href={user.infoLink}>
            <img src={user.image} title={user.caption} />
          </a>
        );
      });

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Container padding={['bottom', 'top']}>
            <GridBlock
              align="center"
              contents={[
                {
                  content: 'Review Rules analyze incoming Pull Requests to assign code reviewers according to your process.',
                  image: siteConfig.baseUrl + 'img/clipboard.png',
                  imageAlign: 'top',
                  title: 'Automated Code Review',
                },
                {
                  content: 'Users interact with Cody using comments right in the GitHub PR interface.',
                  image: siteConfig.baseUrl + 'img/comments-o.png',
                  imageAlign: 'top',
                  title: 'Intuitive Comment Interface',
                },
                {
                  content: 'The review status of every PR is reported as a [commit status](https://help.github.com/articles/about-statuses/) under the namespace **code-review/cody**.',
                  image: siteConfig.baseUrl + 'img/gear.png',
                  imageAlign: 'top',
                  title: 'Integrates With Other Tools',
                },
              ]}
              layout="threeColumn"
            />
          </Container>

          <Container padding={['bottom', 'top']} background="light">
            <GridBlock
              contents={[
                {
                  content: `Cody integrates smoothly into your workflow.\n\n1. Contributors open Pull Requests like normal.\n2. Cody analyzes incoming Pull Requests and applies your Review Rules.\n3. Code reviewers simply comment on the PR to give their approval.\n\nAs reviewers approve and as the PR is updated, Cody tracks the review status and reports it as a [commit status](https://help.github.com/articles/about-statuses/) on the Pull Request.`,
                  // image: siteConfig.baseUrl + 'img/docusaurus.svg',
                  imageAlign: 'right',
                  title: 'How It Works',
                },
              ]}
            />
          </Container>

          <Container padding={['bottom', 'top']} id="try">
            <GridBlock
              contents={[
                {
                  content: `You deploy Cody to your own servers and manage it yourself. Cody works particularly well with [Heroku](https://www.heroku.com/) but it should work on any host that supports the minimum requirements.\n\nRead the [deployment docs](${siteConfig.baseUrl}docs/deploying.md) for more information.`,
                  // image: siteConfig.baseUrl + 'img/docusaurus.svg',
                  imageAlign: 'left',
                  title: 'Try it Out',
                },
              ]}
            />
          </Container>

          {/* <div className="productShowcaseSection paddingBottom">
            <h2>{"Who's Using This?"}</h2>
            <p>This project is used by all these people</p>
            <div className="logos">{showcase}</div>
            <div className="more-users">
              <a
                className="button"
                href={
                  siteConfig.baseUrl + this.props.language + '/' + 'users.html'
                }>
                More {siteConfig.title} Users
              </a>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

module.exports = Index;
