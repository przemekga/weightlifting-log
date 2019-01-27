import React, { Component } from "react";
import { Link } from "react-router-dom";

import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";

const PasswordForgetPage = () => (
  <div>
    <h1>Reset password</h1>
    <PasswordForgetForm />
  </div>
);

const INITIAL_STATE = {
  email: "",
  error: null
};

class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email } = this.state;

    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
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
    const { email, error } = this.state;

    const isInvalid = email === "";

    return (
      <form onSubmit={this.onSubmit} className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <input
              name="email"
              value={email}
              onChange={this.onChange}
              type="email"
              className="validate"
            />
            <label htmlFor="useremail">Email</label>
          </div>
          <div className="col s12">
            <button
              disabled={isInvalid}
              className="btn waves-effect waves-light red lighten-2 right"
              type="submit"
              name="signup"
            >
              Reset my password
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

const PasswordForgetLink = () => (
  <p>
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
);

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };
