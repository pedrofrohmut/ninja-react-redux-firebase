export const getActionSignInUser = (credentials) => {
  
  const callbackForTheMiddleware = (dispatch, getState, { getFirebase, getFirestore }) => {
    // console.log("Action Sign In")
    const firebase = getFirebase()
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" })
      })
      .catch(error => {
        dispatch({ type: "LOGIN_ERROR", error: error })
      })
  }

  return callbackForTheMiddleware
}