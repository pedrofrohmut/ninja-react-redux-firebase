const initState = {
  authError: null
}

const authReducer = (previousState = initState, action) => {
  const newState = { ...previousState }

  // console.log("Reducer Sign In")

  switch (action.type) {
    case "LOGIN_SUCCESS":
      newState.authError = null
      // console.log("LOGIN_SUCCESS")
      return newState
    case "LOGIN_ERROR":
      newState.authError = "Login Failed: " + action.error.message
      // console.log("LOGIN_ERROR")
      return newState
    default:
      return previousState
  }
}

export default authReducer
