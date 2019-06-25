import React, { useEffect } from "react";
import { withFirebase } from "../Firebase";
import { useDispatch, useSelector } from "react-redux";
import { setAuthUser } from "../../store/actions/authActions";

const withAuthentication = Component => {
  const WithAuthentication = props => {
    const dispatch = useDispatch();
    const authUser = useSelector(state => {
      return state.authReducer.authUser
    });

    useEffect(() => {
      const listener = props.firebase.auth.onAuthStateChanged(authUser => {
        authUser
          ? dispatch(setAuthUser(authUser))
          : dispatch(setAuthUser(null));
      });

      return function() {
        listener();
      };
    }, [props.firebase.auth, dispatch]);

    return (
        <Component {...props} authUser={authUser} />
    );
  };

  return withFirebase(WithAuthentication);
};

export default withAuthentication;
