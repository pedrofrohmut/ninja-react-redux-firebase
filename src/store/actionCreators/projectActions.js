/**
 *   You can not make async calls in the reducers. The reducers must remain pure function
 * without any outside influence. The async calls must be made before the reducer being called
 * and just the result is then send to the reducer.
 *   Reducers must be kept pure and predictable. Easier to debug this way too.
 */
export const createProjectAction = (project) => {
  // When using thunk middleware you do not return a object. You instead return a function
  const callbackForTheMiddleware = (dispatch, getState, { getFirebase, getFirestore }) => {
    // Make async call to database
    // Activates the callback from redux-firestore the returns a reference to our firestore database
    const firestore = getFirestore()

    const state = getState()
    const { firstName, lastName } = state.firebase.profile
    const authorId = state.firebase.auth.uid
    const { title, content } = project
    // Performs and insert into the database
    firestore.collection("projects").add({
      authorFirstName: firstName,
      authorId: authorId,
      authorLastName: lastName,
      content: content,
      createdAt: new Date(),
      title: title
    })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project: project })
      })
      .catch(error => {
        dispatch({ type: "CREATE_PROJECT_ERROR", error })
      })
  }
  return callbackForTheMiddleware
}