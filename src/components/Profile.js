import React from 'react'

class Profile extends React.Component {

    render() {
        return (
            <div>
                Welcome {this.props.name}
                Email: {this.props.email}
                Phone: {this.props.phone_number}
                address: {this.props.address}

            </div>
        )
    }
}

export default Profile 