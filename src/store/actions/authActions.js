import Firebase from "../../components/Firebase";

export const setAuthUser = authUser => {
  return {
    type: "SET_AUTH_USER",
    authUser
  };
};

export const setUserData = data => {
  return {
    type: "SET_USER_DATA",
    data
  };
};

export const setUserRole = role => {
  return {
    type: "SET_USER_ROLE",
    role
  };
};

export const fetchUserRole = uid => {
  return dispatch => {
    Firebase.user(uid).onSnapshot(function(user) {
      dispatch(setUserRole(user.data().role));
    });
  };
};
