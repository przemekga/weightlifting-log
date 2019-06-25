import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { useDispatch, useSelector } from "react-redux";
import { setAuthUser } from "../../store/actions/authActions";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";

const withAuthorization = condition => Component => {
  const WithAuthorization = props => {
    const dispatch = useDispatch();
    const authUser = useSelector(state => state.authReducer.authUser);

    useEffect(() => {
      const listener = props.firebase.auth.onAuthStateChanged(authUser => {
        dispatch(setAuthUser(authUser));

        if (!condition(authUser)) {
          props.history.push(ROUTES.SIGN_IN);
        }
      });
      return function() {
        listener();
      };
    }, [props.firebase, props.history]);

    return (
      <>
        {condition(authUser) ? (
          <Component {...props} authUser={authUser} />
        ) : null}
      </>
    );
  };

  return compose(
    withRouter,
    withFirebase
  )(WithAuthorization);
};

export default withAuthorization;
