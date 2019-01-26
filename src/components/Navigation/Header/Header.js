import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import logo from "../../../assets/images/temple-gym.png";
import "./Header.scss";

export default function Header() {
  return (
    <>
      <div className="navbar-fixed">
        <nav>
        <a href="#" data-target="slide-out" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">
              <img src={logo} alt="" />
            </a>
          </div>
        </nav>
      </div>
      <Sidebar />
    </>
  );
}
