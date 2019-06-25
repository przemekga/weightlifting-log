import Firebase from "../../components/Firebase";

export const setRoutines = routines => {
  return {
    type: "SET_ROUTINES",
    routines
  };
};

export const fetchRoutines = uid => {
  return dispatch => {
    Firebase.userRoutines(uid).on("value", snapshot => {
      const routines = snapshot.val();
      const routineArr = objectToArray(routines);
      const exercises = routineArr.map(routine => ({...routine, exercises: objectToArray(routine.exercises)})); 
      // const sets = exercises.map(exercise => {
      //   return {...exercise, sets: objectToArray(exercise.sets)}
      // }); 
      console.log(exercises)

      // console.log('sets', sets)
      // dispatch(setRoutines({
      //   ...routineArr,
      //   exercises: [...exercises]
      // }));
    });
  };
};

function objectToArray(obj) {
  const array = [];

  Object.keys(obj).forEach(key => {
    array.push({
      id: key, 
      ...obj[key] 
    });
  });
  return array;
}
