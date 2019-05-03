import uuidv4 from "uuid/v4"
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
    // Performs and insert into the database
    firestore.collection("projects").add({
      ...project,
      author_first_name: "John",
      author_last_name: "Doe",
      author_id: uuidv4(),
      created_at: new Date()
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