import React, { Component } from "react";
import M from "materialize-css";
import NavLinks from '../NavLinks/NavLinks';
import { withFirebase } from '../../Firebase';


class Sidebar extends Component {

  componentDidMount() {
    M.Sidenav.init(this.sidenav);
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
          <NavLinks />
        </ul>
      </>
    );
  }
}

export default Sidebar