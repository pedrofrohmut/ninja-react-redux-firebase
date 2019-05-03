import React from "react"
// Connect this component's props to the redux store
import { connect } from "react-redux"
// Connect this component's props to firebase
import { firestoreConnect } from "react-redux-firebase"
// Used to combine more than one HOC function
import { compose } from "redux"

const ProjectDetails = (props) => {
  const id = props.match.params.id
  const { project } = props
  // console.log(props)
  return (
    <div className="ProjectDetail section container">
      {project ? (
        <div className="card z-depth-0">
          <div className="card-content">
            <div className="card-title">Project Title - {id}</div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nostrum ipsam libero expedita veritatis soluta repellat neque eum non eos saepe, magni iste? Vel et eum magni eligendi consequuntur amet sequi! Debitis dolor perspiciatis, quam dicta rem vitae cumque hic numquam sit aliquid harum obcaecati alias sapiente iste eum reprehenderit error suscipit porro fugit? Beatae praesentium tempora ea ut voluptatibus.</p>
          </div>
          <div className="card-action grey-text">
            <span>Posted by The Net Ninja</span>
            <span>2nd September, 2am</span>
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
  // const projects2 = state.firestore.ordered.projects
  // console.log("ID:", id, "Projects:", projects, "Ordered:", projects2)
  const project = projects ? projects[id] : null
  return {
    project
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "projects" }
  ])
)(ProjectDetails)