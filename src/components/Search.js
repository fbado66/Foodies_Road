import React from 'react'
import { GoogleComponent } from 'react-google-location' 
import Restaurant from '../Restaurant'
import { findNearest } from 'geolib'
const geolib = require('geolib');

const API_KEY = "AIzaSyBXXPrWYS7iy13CexF32T0gFShhkO5zHQs"

class Search extends React.Component {

    state = {
        place: '',
        searchLatitude: '',
        searchLongitude: '',
        restaurantLat: ''
        

    }

    render() {

        // this.props.location.map(locationPojo => {
        //     this.setState({
        //         restaurantLat: locationPojo.props.latitude,
        //         restuarantLng: locationPojo.props.longitude
        //     })
        // })
        
        let restaurantsCoordinate = this.props.location.map(locationPojo => {
            return (locationPojo.props.latitude)
                        
        })
        this.setState({
            restaurantLat: restaurantsCoordinate
        })


        let test = geolib.findNearest({ latitude: -74.00889, longitude: 12.63128 }, [
            restaurantsCoordinate])

            console.log(this.state.restaurantLat)

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
                }/>
            </div>
        )
    }
}


// const Search = () => {
//     return (
//         <div className="">
//             <input
//                 type="text"
//                 placeholder={"Your address"}
//                 // value={props.SearchCategory}
//                 // onChange={handleInput }
//             />
//         </div>
//     )
// }
export default Search