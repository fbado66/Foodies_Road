import React from 'react'
// import ReviewsOnRestaurant from './components/ReviewsOnRestaurant'

class Restaurant extends React.Component {
    render () {

        
        return (
            <div>
                <h2 className ='all_restaurant_text'>All Restaurants</h2>
                <div className='restaurants-holder'>{this.props.restaurants}</div>
        
            </div>
        )
    }

}

export default Restaurant