import React from "react";
import { Link } from "react-router-dom";
import { AuthUserContext } from "../../Session";

import SignOutButton from "../../SignOut/SignOut";
import * as ROUTES from "../../../constants/routes";

const NavLinks = () => (
  <div>
    <AuthUserContext.Consumer>
      {(authUser) => authUser ? <NavLinksAuth /> : <NaviLinksNonAuth />}
    </AuthUserContext.Consumer>
  </div>
);

const NavLinksAuth = () => (
  <>
    <li>
      <div className="user-view">
        <div className="background">
          <img src="https://placehold.it/400x300" />
        </div>
        <a href="#user" />
        <a href="#name">
          <span className="white-text name">John Doe</span>
        </a>
        <a href="#email">
          <span className="white-text email">jdandturk@gmail.com</span>
        </a>
      </div>
    </li>
    <li>
      <Link to={ROUTES.WORKOUT_DASHBOARD} className="sidenav-close">
        <i className="material-icons">add</i>Workout
      </Link>
    </li>
    <li>
      <Link to={ROUTES.HISTORY} className="sidenav-close">
        History
      </Link>
    </li>
    <li>
      <div className="divider" />
    </li>
    <li className="sidenav-close">
      <SignOutButton />
    </li>
  </>
);

const NaviLinksNonAuth = () => (
  <>
    <li>
      <Link to={ROUTES.HOME} className="sidenav-close">
        Home
      </Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN} className="sidenav-close">
        Sign In
      </Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_UP} className="sidenav-close">
        Sign Up
      </Link>
    </li>
  </>
);

export default NavLinks;
