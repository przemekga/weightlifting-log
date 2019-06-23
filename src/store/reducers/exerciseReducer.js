const initState = {
  exercises: []
};

const exerciseReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_EXERCISE":
      return {
        ...state,
        exercises: [...state.exercises, action.exercise]
      };
    case "SET_EXERCISE_LIST":
      return {
        ...state,
        exercises: [...action.exerciseList]
      }
    default:
      return state;
  }
};

export default exerciseReducer;
