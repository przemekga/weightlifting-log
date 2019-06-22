const initState = {
  authUser: {}
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_AUTH_USER':
      return {
        ...state,
        authUser: action.authUser
      }
    case 'SET_USER_DATA':
      return {
        ...state,
        authUser: {
          ...state.authUser,
          ...action.data
        }
      }
    default:
      return state;
  }
};

export default authReducer