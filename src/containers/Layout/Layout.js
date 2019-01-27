import React from "react";
import Header from "../../components/Navigation/Header/Header";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import WorkoutDashboard from "../../components/Workout/WorkoutDashboard";
import AddWorkout from "../../components/Workout/AddWorkout";
import History from "../../components/History/History";
import SignUp from "../../components/SignUp/SignUp";
import SignIn from "../../components/SignIn/SignIn";
import PasswordForget from "../../components/PasswordForget";
import * as ROUTES from "../../constants/routes";
import { withAuthentication } from '../../components/Session';

const Layout = () => {
  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          <Header />
        </div>
        <div className="row mainContent">
          <Switch>
            <Route
              path={ROUTES.WORKOUT_DASHBOARD}
              component={WorkoutDashboard}
            />
            <Route path={ROUTES.ADD_WORKOUT} component={AddWorkout} />
            <Route path={ROUTES.HISTORY} component={History} />
            <Route path={ROUTES.SIGN_UP} component={SignUp} />
            <Route path={ROUTES.SIGN_IN} component={SignIn} />
            <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForget} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default withAuthentication(Layout);
