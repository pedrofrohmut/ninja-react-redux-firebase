import React, { Component } from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { getActionSignUpUser } from "../../store/actionCreators/authActions"
import ErrorAlert from "../alerts/ErrorAlert"

class SignUp extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      isUserSignedIn: false
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  render() {
    const { isUserSignedIn, authError } = this.props
    if (isUserSignedIn) {
      return <Redirect to="/" />
    }
    return (
      <div className="SignUp container section">

        { authError && <ErrorAlert authError={ authError } /> }

        <form onSubmit={ this.handleSubmit }>
          <div className="grey-text text-darken-3 h5">Sign Up</div>
          
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" onChange={ this.handleInputChange } />
          </div>

          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" onChange={ this.handleInputChange } />
          </div>

          <div className="input-field">
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email"  onChange={ this.handleInputChange } />
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={ this.handleInputChange } />
          </div>

          <div className="input-field">
            <button type="submit" className="btn pink lighten-1 z-depth-0">Sign Up</button>
          </div>
        </form>
      </div>
    )
  } // render

  handleSubmit(e) {
    e.preventDefault()
    const { firstName, lastName, email, password } = this.state
    const newUser = {
      firstName, lastName, email, password
    }
    this.props.onSignUpUser(newUser)
    this.props.history.push("/")
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
}

const mapStateToProps = (state) =>   {
  return {
    isUserSignedIn: !state.firebase.auth.isEmpty,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSignUpUser: (newUser) => dispatch(getActionSignUpUser(newUser))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp)