import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";

import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";

const SignUpPage = () => (
  <>
    <div className="col s12">
      <h1>SignUp</h1>
    </div>
    <SignUpForm />
  </>
);

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};

class SignUpFormBase extends Component {
  state = { ...INITIAL_STATE };

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        return this.props.firebase
          .user(authUser.user.uid)
          .set({
            username,
            email,
          });
      })
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.WORKOUT_DASHBOARD);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";
    return (
      <form onSubmit={this.onSubmit} className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <input
              name="username"
              value={username}
              onChange={this.onChange}
              type="text"
              className="validate"
              id="username"
            />
            <label htmlFor="username">Username</label>
          </div>
          <div className="input-field col s12">
            <input
              name="email"
              value={email}
              onChange={this.onChange}
              type="email"
              className="validate"
              id="useremail"
            />
            <label htmlFor="useremail">Email</label>
          </div>
          <div className="input-field col s12">
            <input
              name="passwordOne"
              value={passwordOne}
              onChange={this.onChange}
              type="password"
              className="validate"
              id="password"
            />
            <label htmlFor="password">Password</label>
          </div>
          <div className="input-field col s12">
            <input
              name="passwordTwo"
              value={passwordTwo}
              onChange={this.onChange}
              type="password"
              className="validate"
              id="passwordTwo"
            />
            <label htmlFor="passwordTwo">Repeat password</label>
          </div>
          <div className="col s12">
            <button
              disabled={isInvalid}
              className="btn waves-effect waves-light red lighten-2 right"
              type="submit"
              name="signup"
            >
              Sign Up
              <i className="material-icons right">send</i>
            </button>
          </div>
          <div className="col s12 red-text text-darken-4">
            {error && <p>{error.message}</p>}
          </div>
        </div>
      </form>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = compose(
  withRouter,
  withFirebase
)(SignUpFormBase);

export default SignUpPage;

export { SignUpForm, SignUpLink };
