import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/temple-gym.png";
import "./Header.scss";

export default function Header() {
  return (
    <>
      <div className="navbar-fixed">
        <nav>
          <button href="#" data-target="slide-out" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </button>
          <div className="nav-wrapper">
            <Link to="/home" className="brand-logo">
              <img src={logo} alt="" />
            </Link>
          </div>
        </nav>
      </div>
      <Sidebar />
    </>
  );
}
