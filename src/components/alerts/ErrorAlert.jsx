import React from "react"

const ErrorAlert = (props) => {
  const { authError } = props
  return (
    <div className="card-panel red lighten-4">
      <span className="red-text text-darken-4">{authError}</span>
    </div>
  )
}

export default ErrorAlert