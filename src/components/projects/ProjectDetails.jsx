import React from "react"
import { connect } from "react-redux"
import { firestoreConnect } from "react-redux-firebase"
import { compose } from "redux"
import { Redirect } from "react-router-dom"

const ProjectDetails = (props) => {
  const { project, isUserSignedIn } = props
  const createdAt = project && project.createdAt.toDate()

  if (!isUserSignedIn) {
    return <Redirect to="/signin" />
  }

  return (
    <div className="ProjectDetail section container">
      {project ? (
        <div className="card z-depth-0">
          <div className="card-content">
            <div className="card-title">{ project.title }</div>
            <p>{ project.content }</p>
          </div>
          <div className="card-action grey-text">
            <p>Posted by { project.authorFirstName + " " + project.authorLastName }</p>
            <p>{ createdAt.toLocaleDateString() + " " + createdAt.toLocaleTimeString() }</p>
          </div>
        </div>
      ) : (
        <p>Loading Project...</p>
      )}
    </div>
  )
}

// You use own props so you can access the components props
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id
  const projects = state.firestore.data.projects
  const project = projects ? projects[id] : null
  return {
    project,
    isUserSignedIn: !state.firebase.auth.isEmpty
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "projects" }
  ])
)(ProjectDetails)