// @flow

import React from "react";
import Icon from "./Icon";
import { NavLink } from "react-router-dom";

const Nav = () => (
  <nav
    className="navbar has-shadow"
    role="navigation"
    aria-label="main-navigation"
  >
    <div className="container">
      <div className="navbar-brand">
        <NavLink
          to="/"
          className="navbar-item"
          activeClassName="is-active"
          title="Cody"
        >
          <strong>Cody</strong>
          &nbsp;
          <Icon icon="code" size="medium" />
        </NavLink>
        <div className="navbar-burger burger" data-target="navMenu">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div id="navMenu" className="navbar-menu">
        <div className="navbar-start">
          <NavLink
            to="/repos"
            className="navbar-item is-tab"
            activeClassName="is-active"
            title="Repos"
          >
            Repos
          </NavLink>
        </div>
        <div className="navbar-end">
          <NavLink
            to="/profile"
            className="navbar-item"
            activeClassName="has-text-info"
            title="Profile"
          >
            <Icon icon="user-circle" />
          </NavLink>
        </div>
      </div>
    </div>
  </nav>
);

export default Nav;
