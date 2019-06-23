import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";
import { useDispatch } from "react-redux";
import { setUserData } from "../../store/actions/authActions";
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

const SignUpFormBase = ({ firebase, history }) => {
  const [signupState, setSignupState] = useState({ ...INITIAL_STATE });
  const dispatch = useDispatch();

  const onSubmit = event => {
    const { username, email, passwordOne } = signupState;

    firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        return firebase.user(authUser.user.uid).set({
          username,
          email,
          exercises: [],
          role: "user"
        });
      })
      .then(() => {
        const userData = {
          displayName: username,
          photoURL: "https://tinyurl.com/y3kswknr"
        }
        dispatch(setUserData(userData))
        return firebase.doUpdateProfile(userData);
      })
      .then(() => {
        setSignupState({ ...INITIAL_STATE });
        history.push(ROUTES.WORKOUT_DASHBOARD);
      })
      .catch(error => {
        setSignupState({ error });
      });

    event.preventDefault();
  };

  const onChange = event => {
    setSignupState({ [event.target.name]: event.target.value });
  };

  const { username, email, passwordOne, passwordTwo, error } = signupState;
  const isInvalid =
    passwordOne !== passwordTwo ||
    passwordOne === "" ||
    email === "" ||
    username === "";

  return (
    <form onSubmit={onSubmit} className="col s12">
      <div className="row">
        <div className="input-field col s12">
          <input
            name="username"
            value={username}
            onChange={onChange}
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
            onChange={onChange}
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
            onChange={onChange}
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
            onChange={onChange}
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
};

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
