// import React from 'react'
// import { GoogleComponent } from 'react-google-location' 
// import Restaurant from '../Restaurant'
// // import { orderByDistance } from 'geolib'
// const geolib = require('geolib');

// const API_KEY = "AIzaSyBXXPrWYS7iy13CexF32T0gFShhkO5zHQs"

// class Search extends React.Component {

//     state = {
//         place: '',
//         searchLatitude: '',
//         searchLongitude: '',
//     }

//     render() {

//         let locationsArray = []

//         this.props.location.map(locationPojo => {
//             locationsArray.push(locationPojo.props)
//             })
      
//         if (this.state.searchLatitude && this.state.searchLongitude) {
//             console.log({latitude: this.state.searchLatitude, longitude: this.state.searchLongitude})
//             console.log(geolib.orderByDistance( {latitude: this.state.searchLatitude, longitude: this.state.searchLongitude}, locationsArray
//             // console.log(geolib.findNearest( {latitude: [40.721573], longitude: [-73.9956827]}, locationsArray
//             ))
//         }

//         console.log(locationsArray)

//         return (
//             <div>
//                 <GoogleComponent
//                 apiKey = {API_KEY}
//                 language = {'en'}
//                 country = {'country:us'}
//                 coordinates = {true}
//                 locationBoxStyle = {'custom-style'}
//                 locationListStyle = {'custom-style-list'}
//                 onChange = {
//                     (place) => {
//                         this.setState({
//                             place: place,
//                             searchLatitude: place.coordinates.lat,
//                             searchLongitude: place.coordinates.lng
//                             })
//                         }
//                     }
//                 />
//                 <button> GO</button>
//             </div>
//         )
//     }
// }

// export default Search