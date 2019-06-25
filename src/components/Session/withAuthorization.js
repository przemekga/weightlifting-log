import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { useDispatch, useSelector } from "react-redux";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";

const withAuthorization = condition => Component => {
  const WithAuthorization = props => {
    const dispatch = useDispatch();
    const authUser = useSelector(state => state.authReducer.authUser);
    const role = useSelector(state => state.authReducer.role);

    useEffect(() => {
      const listener = props.firebase.auth.onAuthStateChanged(authUser => {
        if (!condition(authUser, role) && role) {
          props.history.push(ROUTES.SIGN_IN);
        }
      });
      return function() {
        listener();
      };
    }, [props.firebase, props.history, role, dispatch]);

    return (
      <>
        {condition(authUser, role) && role ? (
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
