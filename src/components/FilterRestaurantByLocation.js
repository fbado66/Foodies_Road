import React from 'react'
import { GoogleComponent } from 'react-google-location' 
import Restaurant from '../Restaurant'
import { orderByDistance } from 'geolib'
const geolib = require('geolib');

const API_KEY = "GOOGLE_KEY"

class FilterRestaurantByLocation extends React.Component {

    state = {
        restaurants: this.props.restaurantsArray,
        place: '',
        searchLatitude: '',
        searchLongitude: '',
    }

    render() {

        let locationsArray = []

        // this.props.restaurantsArray.map(locationInfo => {
        //     locationsArray.push({latitude: locationInfo.latitude, longitude: locationInfo.longitude})
        // })
        let sortArray = () => {
            if (this.state.searchLatitude && this.state.searchLongitude) {
               locationsArray.push(geolib.orderByDistance( {latitude: this.state.searchLatitude, longitude: this.state.searchLongitude}, [...this.props.restaurantsArray] ))
                
            }
        }
       
        if (this.state.searchLatitude && this.state.searchLongitude) {
        sortArray()
        console.log(locationsArray)
        }
        // this.props.sortRestaurants(locationsArray)

        
        

        // this.props.addOrderToState(createdOrder)
        // sortRestaurants = {this.props.sortRestaurants}
        console.log(this.state.restaurants)
       
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
                <button> SEARCH</button>
            </div>
        )
    }
}

export default FilterRestaurantByLocation