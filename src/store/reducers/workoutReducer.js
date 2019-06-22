const initState = {
  workout: {}
}

const workoutReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_WORKOUT':
      return {
        ...state,
        authUser: action.workout
      }
    default:
      return state;
  }
};

export default workoutReducer