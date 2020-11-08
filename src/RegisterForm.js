import React, { Component } from 'react';

class RegisterForm extends Component {

  state = {
    name: "",
    password: "",
    email: "",
    phone_number: "",
    address: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleRegisterSubmit(this.state)
  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    let {formName} = this.props
    let {name, password, email, phone_number, address} = this.state

    return (
      <div className='registerForm'>
      <form onSubmit={this.handleSubmit}>
        <h1>{formName}</h1>

        <label htmlFor="name">Name:</label>
        <input type="text" autoComplete="off" 
          name="name" 
          value={name} 
          onChange={this.handleChange}
          />

        <label htmlFor="email">Email:</label>
        <input type="text" autoComplete="off" 
          name="email" 
          value={email} 
          onChange={this.handleChange}
          />

        <label htmlFor="phone_number">Phone Number:</label>
        <input type="number" autoComplete="off" 
          name="phone_number" 
          value={phone_number} 
          onChange={this.handleChange}
          />

        <label htmlFor="location">Address:</label>
        <input type="text" autoComplete="off" 
          name="address" 
          value={address} 
          onChange={this.handleChange}
          />

        <label htmlFor="password">Password:</label>
        <input type="password" autoComplete="off" 
          name="password" 
          value={password} 
          onChange={this.handleChange}
        />
        <input className= 'registerFormSubmit' type="submit" value="Join the fun"/>
      </form>
      </div>
    );
  }

}

export default RegisterForm;