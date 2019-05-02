import React, { Component } from "react"

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  render() {
    return (
      <div className="SignIn container section">
        <form onSubmit={ this.handleSubmit }>
          <div className="grey-text text-darken-3 h5">Sign In</div>

          <div className="input-field">
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" onChange={ this.handleInputChange } />
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={ this.handleInputChange } />
          </div>

          <div className="input-field">
            <button type="submit" className="btn pink lighten-1 z-depth-0">Login</button>
          </div>
        </form>
      </div>
    )
  }

  handleSubmit(e) {
    e.preventDefault()
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
}

export default SignIn