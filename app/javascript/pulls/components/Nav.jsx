// @flow

import React from "react";
import Icon from "./Icon";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

type State = {
  isExpanded: boolean
};

class Nav extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      isExpanded: false
    };
  }

  onClickBurger = () => {
    this.setState(({ isExpanded }) => {
      return { isExpanded: !isExpanded };
    });
  };

  render() {
    const burgerClass = classNames({
      "navbar-burger": true,
      burger: true,
      "is-active": this.state.isExpanded
    });

    const menuClass = classNames({
      "navbar-menu": true,
      "is-active": this.state.isExpanded
    });

    return (
      <nav
        className="navbar has-shadow"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" className="navbar-item" title="Cody">
              <strong>Cody</strong>
              &nbsp;
              <Icon icon="code" size="medium" />
            </NavLink>
            <div
              className={burgerClass}
              data-target="navMenu"
              onClick={this.onClickBurger}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id="navMenu" className={menuClass}>
            <div className="navbar-start">
              <NavLink
                to="/repos"
                className="navbar-item"
                activeClassName="has-text-info is-active"
                title="Repos"
              >
                Repos
              </NavLink>
            </div>
            <div className="navbar-end">
              <NavLink
                to="/profile"
                className="navbar-item"
                activeClassName="has-text-info is-active"
                title="Profile"
              >
                <Icon icon="user-circle" />
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
