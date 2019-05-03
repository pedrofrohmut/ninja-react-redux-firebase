import React from "react"
import ProjectSummary from "./ProjectSummary"
import { Link } from "react-router-dom"

const ProjectList = (props) => {
  const { projects } = props
  return (
    <div className="ProjectList section">
      {projects && (
        projects.map((project, i) => ( 
          <Link to={ ("/project/" + project.id) } key={ i } >
            <ProjectSummary project={ project } />
          </Link>
        ))
      )}
    </div>
  )
}

export default ProjectList
