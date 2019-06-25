const initState = {
  routineList: [
    {
      id: 'sdasd1223',
      name: 'Push monday',
      createdAt: '1561473531498',
      exercises: [
        {
          id: '-LiDl-Z6956ydmEz7hUv',
          name: 'Deadlift',
          description: 'Last set with belt',
          sets: [
            {
              reps: 3,
              wgt: 80,
              rest: 120000
            },
            {
              reps: 3,
              wgt: 90,
              rest: 120000
            },
            {
              reps: 3,
              wgt: 100,
              rest: 120000
            },
            {
              reps: 3,
              wgt: 110,
              rest: 120000
            },
            {
              reps: 3,
              wgt: 120,
              rest: 120000
            },
            {
              reps: 3,
              wgt: 130,
              rest: 120000
            },
          ]
        }
      ]
    }
  ]
}

const routineReducer = (state = initState, action) => {
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

export default routineReducer
