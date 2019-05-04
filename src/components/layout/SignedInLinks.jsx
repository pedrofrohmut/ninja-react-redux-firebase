import React from "react"
import { NavLink } from "react-router-dom"

const SignedInLinks = (props) => {

  const { onSignOut, signedInUser } = props

  return (
    <ul className="right">
      <li><NavLink to="/create">New Project</NavLink></li>
      <li><NavLink to="/signin" onClick={ onSignOut }>Sign Out</NavLink></li>
      <li><NavLink to="/" className="btn btn-floating pink lighten-1">{ signedInUser.initials }</NavLink></li>
    </ul>
  )
}

export default SignedInLinks