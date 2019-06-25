import Firebase from "../../components/Firebase";

export const setRoutines = () => {
  return {
    type: "SET_ROUTINES",
    routines
  };
};

export const fetchRoutines = uid => {
  return dispatch => {
    Firebase.userRoutines(uid).on("value", snapshot => {
      dispatch(setRoutines(snapshot.val()))
    });
  };
};
