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
  return async dispatch => {
    await Firebase.userExercises(uid).add(exercise);
    dispatch(addExerciseAsync(exercise));
  };
};

export const setExerciseList = exerciseList => {
  return {
    type: "SET_EXERCISE_LIST",
    exerciseList
  };
};

export const fetchExercises = uid => {
  return async dispatch => {
    const collection = await Firebase.userExercises(uid).get();
    const exerciseList = collection.docs.map(doc => doc.data());
    dispatch(setExerciseList(exerciseList));
  };
};
