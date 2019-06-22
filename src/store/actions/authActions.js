export const setAuthUser = (authUser) => {
  return {
    type: 'SET_AUTH_USER',
    authUser
  }
}

export const setUserData = (data) => {
  return {
    type: 'SET_USER_DATA',
    data
  }
}