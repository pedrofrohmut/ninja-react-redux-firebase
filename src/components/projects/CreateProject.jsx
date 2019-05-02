import React, { Component } from "react"

class CreateProject extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      content: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  render() {
    return (
      <div className="CreateProject container section">
        <form onSubmit={ this.handleSubmit }>
          <div className="grey-text text-darken-3 h5">Create Project</div>

          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" onChange={ this.handleInputChange } tabIndex="1"/>
          </div>

          <div className="input-field">
            <label htmlFor="content">Content</label>
            <textarea className="materialize-textarea" name="content" onChange={ this.handleInputChange } 
              tabIndex="2"></textarea>
          </div>

          <div className="input-field">
            <button type="submit" className="btn pink lighten-1 z-depth-0" tabIndex="3">Create Project</button>
          </div>
        </form>
      </div>
    )
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state)
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
}

export default CreateProject
