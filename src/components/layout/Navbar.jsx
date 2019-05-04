import React from "react"
import { Link } from "react-router-dom"
import SignedInLinks from "./SignedInLinks"
import SignedOutLinks from "./SignedOutLinks"
import { connect } from "react-redux"
import { getActionSignOutUser } from "../../store/actionCreators/authActions"

const Navbar = (props) => {
  const { onSignOut, isUserSignedIn, signedInUser } = props
  return (
    <nav className="Navbar nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">Mario Plan</Link>
        {isUserSignedIn ? (
          <SignedInLinks onSignOut={ onSignOut } signedInUser={ signedInUser } />
        ) : (
          <SignedOutLinks />
        )} 
      </div>
    </nav>
  )
}

// ######################################################################################################

const mapStateToProps = (state) => {
  console.log(state)
  const { firstName, lastName, initials } = state.firebase.profile
  return {
    isUserSignedIn: !state.firebase.auth.isEmpty,
    signedInUser: { firstName, lastName, initials }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSignOut: () => dispatch(getActionSignOutUser())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar)