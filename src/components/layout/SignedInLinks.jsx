import React from "react"
import { NavLink } from "react-router-dom"

const SignedInLinks = (props) => {
  const { onSignOut } = props

  const handleSignOut = e => {
    e.preventDefault()
    onSignOut()
  }

  return (
    <ul className="right">
      <li><NavLink to="/create">New Project</NavLink></li>
      <li><NavLink to="/" onClick={ handleSignOut }>Sign Out</NavLink></li>
      <li><NavLink to="/" className="btn btn-floating pink lighten-1">NN</NavLink></li>
    </ul>
  )
}

export default SignedInLinks