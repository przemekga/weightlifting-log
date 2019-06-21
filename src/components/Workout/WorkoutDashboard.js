import React, { Component } from "react";
import AddButton from "../UI/AddButton";
import classes from "./WorkoutDashboard.module.css";
import { withAuthorization } from '../Session';

class WorkoutDashboard extends Component {
  render() {
    return (
      <>
        <div className="col-12">
          <p>lorem200</p>
        </div>
        <AddButton path={"/add-workout"} newClasses={classes.bottomRight} />
      </>
    );
  }
}

const condition = (authUser, role) => !!authUser && true;

export default withAuthorization(condition)(WorkoutDashboard);