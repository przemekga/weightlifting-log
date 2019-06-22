const initState = {
  displayName: '',
  photoURL: ''
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_PROFILE_DATA':
      return {
        ...state,
        displayName: action.data.displayName,
        photoURL: action.data.photoURL
      }
    default:
      return state;
  }
};

export default authReducer