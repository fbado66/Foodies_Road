import React from 'react'
import { withRouter} from 'react-router-dom'

class UpdateUserForm extends React.Component {

    state = {
        name: this.props.name,
        password: this.props.password,
        email: this.props.email,
        phone_number: this.props.phone_number,
        address: this.props.address,
        id: this.props.user_id
      }
    
      handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleUpdateSubmit(this.state)
      }
    
      handleChange = (e) => {
        let {name, value} = e.target
        this.setState({
          [name]: value
        })
      }


    
    render(){

        let {name, phone_number, password, email, address} = this.state

        return (
            <div className='registerForm'>
            <form onSubmit={this.handleSubmit}>
              
      
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
      
              
              <input className= 'registerFormSubmit' type="submit" value="Update Information"/>
            </form>
            </div>
          );
        }
}

export default withRouter(UpdateUserForm)