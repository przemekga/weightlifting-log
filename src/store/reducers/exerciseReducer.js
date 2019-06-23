const initState = {
  exercises: [
    { id: 1, name: "Bench Press" },
    { id: 2, name: "Pullup" },
    { id: 3, name: "Deadlift" }
  ]
};

const exerciseReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_EXERCISE":
      return {
        ...state,
        exercises: [...state.exercises, action.exercise]
      };
    default:
      return state;
  }
};

export default exerciseReducer;
