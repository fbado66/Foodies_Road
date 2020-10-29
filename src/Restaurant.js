import React from 'react'

class Restaurant extends React.Component {
    render () {

        return (
            <div>
                {this.props.restaurants}
            </div>
        )
    }

}

export default Restaurant