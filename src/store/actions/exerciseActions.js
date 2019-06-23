import Firebase from "../../components/Firebase";
import store from "../store";
import authReducer from "../reducers/accountReducer";

export const addExerciseAsync = exercise => {
  return {
    type: "ADD_EXERCISE",
    exercise
  };
};

export const addExercise = exercise => {
  const uid = store.getState().authReducer.authUser.uid;
  return dispatch => {
    Firebase.userExercise(uid)
      .push(exercise)
      .then(() => {
        dispatch(addExerciseAsync(exercise));
      });
  };
};
