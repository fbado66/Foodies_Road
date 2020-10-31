import React, { Component } from 'react';

class LogInForm extends Component {

  state = {
    name: "",
    password: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state)
  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    let {formName} = this.props
    let {name, password} = this.state

    return (
      <div className ='loginForm'>
        <form onSubmit={this.handleSubmit}>
          <h1>{formName}</h1>
          <label htmlFor="username">Name:</label>
          <input type="text" autoComplete="off" 
            name="name" 
            value={name} 
            onChange={this.handleChange}
            />
          <label htmlFor="password">Password:</label>
          <input type="password" autoComplete="off" 
            name="password" 
            value={password} 
            onChange={this.handleChange}
          />
          <input className='loginFormsubmit'type="submit" value="Log in"/>
        </form>
      </div>
    );
  }

}

export default LogInForm;