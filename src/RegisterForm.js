import React, { Component } from 'react';
import { Form, Input, TextArea, Button } from 'semantic-ui-react'


class RegisterForm extends Component {

  state = {
    name: "",
    last_name: '',
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
    let {name, last_name, password, email, phone_number, address} = this.state

    return (      
      <div>
        <h2 id='registerTitleForm'>{formName}</h2>
          <Form
            onSubmit={this.handleSubmit}
            id='registerForm'>
              <Form.Field
                id='form-input'
                control={Input}
                label='First name'
                placeholder='First name'
                name="name" 
                value={name} 
                onChange={this.handleChange}
              />
              <Form.Field
                id='form-input'
                control={Input}
                label='Last name'
                placeholder='Last name'
                name="last_name" 
                value={last_name} 
                onChange={this.handleChange}
              />
              <Form.Field
                id='form-input'
                control={Input}
                label='Email'
                name="email"
                value={email}
                onChange={this.handleChange}
                placeholder='joe@schmoe.com'
                // error={{
                //   content: 'Please enter a valid email address',
                // pointing: 'below',
                // }}
              />
              <Form.Field>
                <label>Phone Number</label>
                <Input placeholder='xxx xxx xxxx'
                id='form-input'
                name="phone_number" 
                value={phone_number} 
                onChange={this.handleChange} />
              </Form.Field>
              <Form.Field
                id='form-input'
                control={TextArea}
                label='Address'
                placeholder='street, city, state, zipcode'
                name="address" 
                value={address} 
                onChange={this.handleChange}
              />
              <Form.Field
                id='form-input'
                control={Input}
                label='Password'
                placeholder='.........'
                type= 'password'
                name="password" 
                value={password} 
                onChange={this.handleChange}
              />
              <Button inverted color='red' type="submit"> Join the Fun</Button>
          </Form>
      </div>
    );
  }
}

export default RegisterForm;