import React from 'react'

class Profile extends React.Component {

    render() {
        return (
            <div>
                Welcome {this.props.name}
            </div>
        )
    }
}

export default Profile 