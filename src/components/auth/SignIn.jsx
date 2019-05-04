import React, { Component } from "react"
import { connect } from "react-redux"
import { getActionSignInUser } from "../../store/actionCreators/authActions"
import ErrorAlert from "../alerts/ErrorAlert"
import { Redirect } from "react-router-dom"

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      isUserSignedIn: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  render() {
    const { authError, isUserSignedIn } = this.props
    if (isUserSignedIn) {
      return <Redirect to="/" />
    }
    return (
      <div className="SignIn container section">
        
        { authError && <ErrorAlert authError={ authError } /> }

        <form onSubmit={ this.handleSubmit }>
          <div className="grey-text text-darken-3 h5">Sign In</div>

          <div className="input-field">
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" onChange={ this.handleInputChange } tabIndex="1" />
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={ this.handleInputChange } tabIndex="2" />
          </div>

          <div className="input-field">
            <button type="submit" className="btn pink lighten-1 z-depth-0" tabIndex="3" >Sign In</button>
          </div>
        </form> 
      </div>
    )
  }

  handleSubmit(e) {
    e.preventDefault()
    const { email, password } = this.state
    this.props.onUserSignIn({ email, password })
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
}

// ######################################################################################################
// Connection and mapping to Redux store

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    isUserSignedIn: !state.firebase.auth.isEmpty
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUserSignIn: (credentials) => dispatch(getActionSignInUser(credentials))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn)