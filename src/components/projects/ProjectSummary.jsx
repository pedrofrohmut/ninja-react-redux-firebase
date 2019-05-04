import React from "react"

const ProjectSummary = (props) => {
  const { project } = props
  const createdAt = project.createdAt.toDate()
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{ project.title }</span>
        <p>{ project.content }</p>
        <p className="grey-text">Posted by { project.authorFirstName + " " + project.authorLastName }</p>
        <p className="grey-text">{ createdAt.toLocaleDateString() + " - " + createdAt.toLocaleTimeString() }</p>
      </div>
    </div>
  )
}

export default ProjectSummary
