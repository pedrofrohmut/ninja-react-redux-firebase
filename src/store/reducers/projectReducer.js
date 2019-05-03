const initState = {
  projects: [
    // { id: 1, title: "help me find peach", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    // { id: 2, title: "collect all stars", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    // { id: 3, title: "egg hunt with yoshi", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." }
  ] 
}

const projectReducer = (previousState = initState, action) => {
  const newState = { ...previousState }
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("Create Project:", action.project)
      // TODO: edit the state before returning it
      return newState
     
    case "CREATE_PROJECT_ERROR":
      console.log("Create project error:", action.error)
      // TODO: edit the state before returning it
      return newState

    default:
      return previousState
  }
}

export default projectReducer
