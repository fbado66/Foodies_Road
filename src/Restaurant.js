import React from 'react'
import { GoogleComponent } from 'react-google-location' 
// import { orderByDistance } from 'geolib'
import { Grid} from 'semantic-ui-react';


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


    handleClick = (evt) => {
        this.props.changeSelectedCusine(evt.target.value)
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
                

                <div className ='options_cuisines' value={this.selectedCusine} onClick = {this.handleClick} >
                    <option value='All'> All</option>
                    <option value='American'> American</option>
                    <option value='Italian'> Italian</option>
                    <option value='Bar'> Bar Food</option>
                    <option value='Asian'> Asian</option> 
                    <option value='Japanese'>Japanese</option>
                    <option value='Mexican'>Mexican</option>
                    <option value='BBQ'>BBQ</option>
                    <option value='French'>French</option>
                    <option value='European'>European</option>
                    <option value='Seafood'>Seafood</option>
                    <option value='Bakery'>Bakery</option>
                    <option value='Donuts'>Bagels</option>
                </div>

                    <Grid doubling columns={4} id="Grid-Container">
                        {this.props.restaurants}
                    </Grid>
            </div>
        )
    }
}

export default Restaurant











        