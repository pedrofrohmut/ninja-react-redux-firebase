import React from "react"
import ProjectSummary from "./ProjectSummary"

const ProjectList = (props) => {
  const { projects } = props
  return (
    <div className="ProjectList section">
      {projects.length > 0 && (
        projects.map((project, i) => ( 
          <ProjectSummary project={ project } key={ i } />
        ))
      )}
    </div>
  )
}

export default ProjectList
