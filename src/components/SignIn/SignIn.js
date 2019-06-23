import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { SignUpLink } from '../SignUp/SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const SignInPage = () => (
  <div>
    <h1>SignIn</h1>
    <SignInForm />
    <SignUpLink />
    <PasswordForgetLink />
  </div>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
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
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

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
              id="useremail"
            />
            <label htmlFor="useremail">Email</label>
          </div>
          <div className="input-field col s12">
            <input
              name="password"
              value={password}
              onChange={this.onChange}
              type="password"
              className="validate"
              id="password"
            />
            <label htmlFor="password">Password</label>
          </div>
          <div className="col s12">
            <button
              disabled={isInvalid}
              className="btn waves-effect waves-light red lighten-2 right"
              type="submit"
              name="signup"
            >
              Sign In
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

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm };