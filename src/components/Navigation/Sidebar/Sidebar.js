import React, { Component } from "react";
import M from "materialize-css";
import { Link } from "react-router-dom";

export default class Sidebar extends Component {
  componentDidMount() {
    M.Sidenav.init(this.sidenav)
  }


  render() {
    return (
      <>
        <ul
          ref={sidenav => {
            this.sidenav = sidenav;
          }}
          id="slide-out"
          className="sidenav"
        >
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
            <Link to="/workout-dashboard" className="sidenav-close">
              <i className="material-icons">add</i>Workout
            </Link>
          </li>
          <li>
            <Link to="/history" className="sidenav-close">History</Link>
          </li>
          <li>
            <div className="divider" />
          </li>
          <li>
            <a className="waves-effect" href="#!">
              Third Link With Waves
            </a>
          </li>
        </ul>
      </>
    );
  }
}
