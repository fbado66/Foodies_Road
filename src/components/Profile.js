import React from 'react'
import UpdateUserForm from './UpdateUserForm'
import {withRouter, Redirect } from 'react-router-dom'
import { ThreeSixtySharp } from '@material-ui/icons'

class Profile extends React.Component {

    handleClick = () => {
   this.props.history.push('/profile/edit')

    }

    render() {
        return (
            <div>
                <h2>Welcome {this.props.name}</h2>
                <p>Email: {this.props.email}</p>
                <p>Phone: {this.props.phone_number}</p>
                <p>address: {this.props.address}</p>

                <button onClick={this.handleClick}>Update Information</button>

            </div>
        )
    }
}

export default withRouter(Profile)