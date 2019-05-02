import React, { Component } from "react"

class SignUp extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  render() {
    return (
      <div className="SignUp container section">
        <form onSubmit={ this.handleSubmit }>
          <div className="grey-text text-darken-3 h5">Sign Up</div>
          
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" value={ this.state.firstName } onChange={ this.handleInputChange } />
          </div>

          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" value={ this.state.lastName } onChange={ this.handleInputChange } />
          </div>

          <div className="input-field">
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" value={ this.state.email } onChange={ this.handleInputChange } />
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={ this.state.password } onChange={ this.handleInputChange } />
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
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
}

export default SignUp