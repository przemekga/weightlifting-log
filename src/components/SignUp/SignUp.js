import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";
import { useDispatch } from "react-redux";
import { setUserData } from "../../store/actions/authActions";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";
import uuid from "uuid/v4";

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
  const [isInvalid, setIsInvalid] = useState(true);

  const dispatch = useDispatch();

  const onSubmit = event => {
    createUser(signupState);
    event.preventDefault();
  };

  async function createUser({ username, email, passwordOne }) {
    try {
      const authUser = await firebase.doCreateUserWithEmailAndPassword(
        email,
        passwordOne
      );

      await firebase.user(authUser.user.uid).set(
        {
          username,
          email,
          role: "user"
        },
        { merge: true }
      );

      await firebase.userExercises(authUser.user.uid).add({
        name: "Pullup",
        muscles: ["back", "biceps"]
      });

      const routineRef = await firebase.userRoutines(authUser.user.uid).add({
        id: uuid(),
        name: "Push monday",
        createdAt: Date.now()
      });

      // await firebase.userRoutineExercises(authUser.uid, routineId);
      await firebase
        .userRoutineExercises(authUser.user.uid, routineRef.id)
        .add({
          id: "-LiDl-Z6956ydmEz7hUv",
          name: "Deadlift",
          description: "Last set with belt",
          sets: [
            {
              reps: 3,
              wgt: 80,
              rest: 120000
            },
            {
              reps: 3,
              wgt: 90,
              rest: 120000
            },
            {
              reps: 3,
              wgt: 100,
              rest: 120000
            },
            {
              reps: 3,
              wgt: 110,
              rest: 120000
            },
            {
              reps: 3,
              wgt: 120,
              rest: 120000
            },
            {
              reps: 3,
              wgt: 130,
              rest: 120000
            }
          ]
        });

      const userData = {
        displayName: username,
        photoURL: "https://tinyurl.com/y3kswknr"
      };

      dispatch(setUserData(userData));
      await firebase.doUpdateProfile(userData);
      setSignupState({ ...INITIAL_STATE });
      history.push(ROUTES.WORKOUT_DASHBOARD);
    } catch (error) {
      setSignupState({ error });
    }
  }

  const { username, email, passwordOne, passwordTwo, error } = signupState;

  const onChange = event => {
    setSignupState({ ...signupState, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    setIsInvalid(
      passwordOne !== passwordTwo ||
        passwordOne === "" ||
        email === "" ||
        username === ""
    );
  }, [username, email, passwordOne, passwordTwo]);

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
