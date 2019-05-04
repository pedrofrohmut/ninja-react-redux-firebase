const initState = {
  authError: null
}

const authReducer = (previousState = initState, action) => {
  const newState = { ...previousState }

  switch (action.type) {
    case "LOGIN_SUCCESS":
      newState.authError = null
      return newState
    case "LOGIN_ERROR":
      newState.authError = "Login Failed: " + action.error.message
      return newState
    case "SIGNOUT_SUCCESS":
      return previousState
    case "SIGNUP_SUCCESS":
      newState.authError = null
      console.log("Sign Up Success from Auth Reducer")
      return newState
    case "SIGNUP_ERROR":
      newState.authError = "SignUp Failed: " + action.error.message
      console.log("Sign Up Error from Auth Reducer", action.error.message)
      return newState
    default:
      return previousState
  }
}

export default authReducer
