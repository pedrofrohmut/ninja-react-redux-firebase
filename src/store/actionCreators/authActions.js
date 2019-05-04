export const getActionSignInUser = (credentials) => {
  
  const callbackForTheMiddleware = (dispatch, getState, { getFirebase }) => {
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

export const getActionSignOutUser = () => {

  const callbackForTheMiddleware = (dispatch, getState, { getFirebase }) => {
    console.log("Action Sign Out")
    const firebase = getFirebase()
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGNOUT_SUCCESS" })
      })
  }

  return callbackForTheMiddleware
}

export const getActionSignUpUser = (newUser) => {

  const callbackForTheMiddleware = (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase()
    const firestore = getFirestore()

    const { firstName, lastName } = newUser
    const initials = (firstName[0] + lastName[0]).toUpperCase()
    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(resp => 
        firestore
          .collection("users")  
          .doc(resp.user.uid)
          .set({
            firstName,
            lastName,
            initials
          })
      )
      .then(() => dispatch({ type: "SIGNUP_SUCCESS" }))
      .catch(error => dispatch({ type: "SIGNUP_ERROR", error: error }))
  }

  return callbackForTheMiddleware
} 