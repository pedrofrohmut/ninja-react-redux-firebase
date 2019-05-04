import React from "react"
import { Link } from "react-router-dom"
import SignedInLinks from "./SignedInLinks"
import SignedOutLinks from "./SignedOutLinks"
import { connect } from "react-redux"
import { getActionSignOutUser } from "../../store/actionCreators/authActions"

const Navbar = (props) => {
  const { onSignOut, isUserSignedIn } = props
  return (
    <nav className="Navbar nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">Mario Plan</Link>
        {isUserSignedIn ? (
          <SignedInLinks onSignOut={ onSignOut }/>
        ) : (
          <SignedOutLinks />
        )} 
      </div>
    </nav>
  )
}

// ######################################################################################################

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    isUserSignedIn: !state.firebase.auth.isEmpty
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