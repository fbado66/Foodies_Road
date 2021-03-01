import React, { Component } from 'react';
import { Form, Input, Button } from 'semantic-ui-react'


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
                    label='Password'
                    placeholder='.........'
                    type= 'password'
                    name="password" 
                    value={password} 
                    onChange={this.handleChange}
                  />
                  <Button inverted color='red' type="submit"> Log In</Button>
              </Form>
          </div>      
    );
  }

}

export default LogInForm;