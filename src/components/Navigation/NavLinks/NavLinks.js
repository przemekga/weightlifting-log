import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SignOutButton from "../../SignOut/SignOut";
import * as ROUTES from "../../../constants/routes";

const NavLinks = () => {
  const authUser = useSelector(state => state.authReducer.authUser);
  useEffect(() => {
    console.log(authUser);
  }, [authUser])
  return <div>{authUser ? <NavLinksAuth /> : <NaviLinksNonAuth />}</div>;
};

const NavLinksAuth = () => {
  const profileData = useSelector(state => {
    return {
      email: state.authReducer.authUser.email,
      photoURL: state.authReducer.authUser.photoURL,
      displayName: state.authReducer.authUser.displayName
    }
  });

  return (
    <>
      <li>
        <div className="user-view">
          <div className="background">
            <img src={profileData.photoURL} alt="user"/>
          </div>
          <a href="#name">
            <span className="white-text name">{profileData.displayName}</span>
          </a>
          <a href="#email">
            <span className="white-text email">{profileData.email}</span>
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
      <li>
        <Link to={ROUTES.ACCOUNT} className="sidenav-close">
          Account
        </Link>
      </li>
      <li>
        <Link to={ROUTES.ADMIN} className="sidenav-close">
          Admin
        </Link>
      </li>
      <li className="sidenav-close">
        <SignOutButton />
      </li>
    </>
  );
};

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
