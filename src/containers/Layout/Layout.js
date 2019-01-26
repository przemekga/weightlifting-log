import React, { Component } from "react";
import Header from "../../components/Navigation/Header/Header";
import Sidebar from "../../components/Navigation/Sidebar/Sidebar";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import WorkoutDashboard from "../../components/Workout/WorkoutDashboard";
import AddWorkout from "../../components/Workout/AddWorkout";
import History from "../../components/History/History";
import * as ROUTES from '../../constants/routes';

export default class Layout extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <div className="row">
            <Header />
          </div>
          <div className="row mainContent">
            <Switch>
              <Route path={ROUTES.WORKOUT_DASHBOARD} component={WorkoutDashboard} />
              <Route path={ROUTES.ADD_WORKOUT} component={AddWorkout} />
              <Route path={ROUTES.HISTORY} component={History} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
