import Firebase from "../../components/Firebase";
import store from "../store";
import uuid from "uuid/v4";

export const addExerciseAsync = exercise => {
  return {
    type: "ADD_EXERCISE",
    exercise
  };
};

export const addExercise = exercise => {
  const uid = store.getState().authReducer.authUser.uid;

  return async dispatch => {
    try {
      exercise["id"] = uuid();
      await Firebase.userExercises(uid).add(exercise);
      dispatch(addExerciseAsync(exercise));
    } catch (err) {
      console.log(err);
    }
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
    try {
      const collection = await Firebase.userExercises(uid).get();
      const exerciseList = collection.docs.map(doc => doc.data());
      dispatch(setExerciseList(exerciseList));
    } catch (err) {
      console.log(err);
    }
  };
};

export const removeExercise = id => {
  return {
    type: "REMOVE_EXERCISE",
    id
  };
};

export const deleteExercise = id => {
  const uid = store.getState().authReducer.authUser.uid;

  return async dispatch => {
    try {
      const exercises = await Firebase.userExercises(uid);
      const query = await exercises.where("id", "==", id).get();
      await query.docs[0].ref.delete();
      dispatch(removeExercise(id));
    } catch (err) {
      console.log(err);
    }
  };
};
