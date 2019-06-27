const initState = {
  routineList: []
};

const routineReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_ROUTINES":
      return {
        ...state,
        routineList: action.routines
      };
    default:
      return state;
  }
};

export default routineReducer;
