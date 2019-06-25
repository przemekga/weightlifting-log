const initState = {
  authUser: {},
  role: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_AUTH_USER":
      return {
        ...state,
        authUser: action.authUser
      };
    case "SET_USER_DATA":
      return {
        ...state,
        authUser: {
          ...state.authUser,
          ...action.data
        }
      };
    case "SET_USER_ROLE":
      return {
        ...state,
        role: action.role
      };
    default:
      return state;
  }
};

export default authReducer;
