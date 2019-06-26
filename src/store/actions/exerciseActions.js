import Firebase from "../../components/Firebase";
import store from "../store";

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

export const setExerciseList = exerciseList => {
  return {
    type: "SET_EXERCISE_LIST",
    exerciseList
  };
};

export const fetchExercises = uid => {
  return dispatch => {
    Firebase.userExercises(uid)
      .get()
      .then(collection => {
        const snapshotList = collection.docs.map(doc => doc.data());
        console.log(snapshotList);
        dispatch(setExerciseList(snapshotList));
      });
  };
};
