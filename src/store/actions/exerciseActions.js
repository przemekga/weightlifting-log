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

export const setExerciseList = (exerciseList) => {
  return {
    type: 'SET_EXERCISE_LIST',
    exerciseList
  }
}

export const fetchExercises = (uid) => {
  console.log(uid);
  return dispatch => {
    Firebase.userExercise(uid).on('value', (snapshot) => {
      const snapshotList = snapshot.val();
      let exerciseList = [];
      for (let item in snapshotList) {
        exerciseList.push(snapshotList[item])
      }
      dispatch(setExerciseList(exerciseList));
    })
  }
}

