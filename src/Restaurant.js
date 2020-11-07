import React from 'react'
import { GoogleComponent } from 'react-google-location' 
import { orderByDistance } from 'geolib'

const geolib = require('geolib');
const API_KEY = process.env.REACT_APP_GOOGLE_KEY

class Restaurant extends React.Component {

    state = {
        place: '',
        searchLatitude: '',
        searchLongitude: '',
    }

    componentDidUpdate (prevprops, prevstate) {
        if (!prevstate.searchLatitude && this.state.searchLatitude && this.state.searchLongitude && !prevstate.searchLongitude) {
            let newArray = (geolib.orderByDistance( {latitude: this.state.searchLatitude, longitude: this.state.searchLongitude}, [...this.props.allRestaurants] )) 
            this.props.sortRestaurants(newArray)
        }
    }
    render() {
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











        