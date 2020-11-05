import React from 'react'
import { GoogleComponent } from 'react-google-location' 
import Restaurant from '../Restaurant'
// import { orderByDistance } from 'geolib'
const geolib = require('geolib');

const API_KEY = "AIzaSyBXXPrWYS7iy13CexF32T0gFShhkO5zHQs"

class FilterRestaurantByLocation extends React.Component {

    state = {
        place: '',
        searchLatitude: '',
        searchLongitude: '',
    }

    render() {

        let locationsArray = []

        this.props.restaurantsArray.map(locationInfo => {
            locationsArray.push({latitude: locationInfo.latitude, longitude: locationInfo.longitude})
        })

      
        if (this.state.searchLatitude && this.state.searchLongitude) {
            console.log(geolib.orderByDistance( {latitude: this.state.searchLatitude, longitude: this.state.searchLongitude}, locationsArray
            ))
        }

        // console.log(locationsArray)
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