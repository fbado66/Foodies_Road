import React from 'react'
import FilterRestaurantByLocation from './components/FilterRestaurantByLocation'
import {Route, Switch, Link, withRouter} from 'react-router-dom'

// import ReviewsOnRestaurant from './components/ReviewsOnRestaurant'

class Restaurant extends React.Component {
    render () {

        return (
            <div>
                <FilterRestaurantByLocation 
                restaurantsArray = {this.props.allRestaurants}
                 />
                <h2 className ='all_restaurant_text'>All Restaurants</h2>
                <div className='restaurants-holder'>{this.props.restaurants}</div>
        
            </div>
        )
    }

}

export default withRouter(Restaurant)