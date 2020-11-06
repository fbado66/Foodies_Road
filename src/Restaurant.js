import React from 'react'
import FilterRestaurantByLocation from './components/FilterRestaurantByLocation'
import {Route, Switch, Link, withRouter} from 'react-router-dom'

import { GoogleComponent } from 'react-google-location' 
import { orderByDistance } from 'geolib'
const geolib = require('geolib');

const API_KEY = process.env.REACT_APP_GOOGLE_KEY

class Restaurant extends React.Component {

    state = {
        restaurants: this.props.restaurants,
        place: '',
        searchLatitude: '',
        searchLongitude: '',
    }

    render() {
        let newArray = ''
       
        let sortArray = () => {
            if (this.state.searchLatitude && this.state.searchLongitude) {
               newArray = (geolib.orderByDistance( {latitude: this.state.searchLatitude, longitude: this.state.searchLongitude}, [...this.props.allRestaurants] )) 
               
            }
        }
        sortArray()
        if (this.state.searchLatitude && this.state.searchLongitude) {
            console.log(newArray)
            // this.props.sortRestaurants(newArray)
            }
            
        
            // console.log(this.props.restaurants)

        return (
            <div>
                <GoogleComponent
                apiKey = {API_KEY}
                language = {'en'}
                country = {'country:us'}
                coordinates = {true}
                locationBoxStyle = {'custom-style'}
                locationListStyle = {'custom-style-list'}
                onChange = {
                    (place) => {
                        this.setState({
                            place: place,
                            searchLatitude: place.coordinates.lat,
                            searchLongitude: place.coordinates.lng
                            })
                        }
                    }
                />
                    <h2 className ='all_restaurant_text'>All Restaurants</h2>
                    <div className='restaurants-holder'>{this.props.restaurants}</div>

                <button> SEARCH</button>
            </div>
        )
    }
}

export default Restaurant








































































































    //     render () {
    //         console.log(this.props)
    
    //         return (
    //             <div>
    //                 <FilterRestaurantByLocation 
    //                 restaurantsArray = {this.props.allRestaurants}
    //                 sortRestaurants = {this.props.sortRestaurants}
    //                  />
    //                 <h2 className ='all_restaurant_text'>All Restaurants</h2>
    //                 <div className='restaurants-holder'>{this.props.restaurants}</div>
            
    //             </div>
    //         )
    //     }
    
    // }
    
    // export default Restaurant



















// import ReviewsOnRestaurant from './components/ReviewsOnRestaurant'

// class Restaurant extends React.Component {
//     render () {
//         console.log(this.props)

//         return (
//             <div>
//                 <FilterRestaurantByLocation 
//                 restaurantsArray = {this.props.allRestaurants}
//                 sortRestaurants = {this.props.sortRestaurants}
//                  />
//                 <h2 className ='all_restaurant_text'>All Restaurants</h2>
//                 <div className='restaurants-holder'>{this.props.restaurants}</div>
        
//             </div>
//         )
//     }

// }

// export default withRouter(Restaurant)