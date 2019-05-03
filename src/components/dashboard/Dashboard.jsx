import React, { Component } from "react"
import ProjectList from "../projects/ProjectList"
import Notifications from "./Notifications"
// Function the makes a component connected to the redux store
import { connect } from "react-redux"
// When you want to pass more than one HOC to the same component
import { compose } from "redux"
// connects this component to the firestore
import { firestoreConnect } from "react-redux-firebase"

class Dashboard extends Component {
  render() {
    const { projects } = this.props
    return (
      <div className="Dashboard container">
        <div className="row">
          <div className="col s12 m8">
            <ProjectList projects={ projects } />
          </div>
          <div className="col s12 m3 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.projects
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

// connect => HOC to connect to redux store
// firestoreConnect => HOC to connect to firestore database collection
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "projects" }
  ])
)(Dashboard)
