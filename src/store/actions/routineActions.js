import Firebase from "../../components/Firebase";

export const setRoutines = routines => {
  return {
    type: "SET_ROUTINES",
    routines
  };
};

export const fetchRoutines = uid => {
  return async dispatch => {
    try {
      const querySnapshotRoutines = await Firebase.userRoutines(uid).get();
      const routines = [];
      querySnapshotRoutines.forEach(async doc => {
        const routineData = doc.data();
        routines.push(routineData);
      });

      dispatch(setRoutines(routines));
    } catch (err) {
      console.log(err);
    }
  };
};
