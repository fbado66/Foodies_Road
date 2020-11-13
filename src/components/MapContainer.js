import React, {useState} from 'react'
import {withRouter} from 'react-router-dom'
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from 'react-google-maps'
// import { Search } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react';

function MapContainer (props) {

    function Map() {
        const [selectedRestaurant, setSelectedRestaurant] = useState(null);
            return (
                    <GoogleMap 
                        defaultZoom={14} 
                        defaultCenter={{lat: 40.783058, lng: -73.984016}}>
                        {props.restaurants.map(restaurantPojo => 
                            <Marker
                                key={restaurantPojo.id}
                                position={{
                                    lat: restaurantPojo.latitude,
                                    lng: restaurantPojo.longitude
                                }}
                                onClick={() => {
                                    setSelectedRestaurant(restaurantPojo)
                                }}
                            />
                        )}
                        {selectedRestaurant &&(
                            <InfoWindow
                                position={{
                                    lat: selectedRestaurant.latitude,
                                    lng: selectedRestaurant.longitude
                                }}
                                onCloseClick={() => {
                                    setSelectedRestaurant(null);
                                }}>
                                <div>
                                    <div id='rstName_on_map'
                                        onClick={() => {
                                            props.history.push(`/restaurants/${selectedRestaurant.id}`)
                                        }}>
                                        {selectedRestaurant.name}
                                    </div>
                                    <p>{selectedRestaurant.cuisines}</p>
                                    <p>{selectedRestaurant.phone_number}</p>
                                    <p>{selectedRestaurant.address}</p>
                                    <p>{selectedRestaurant.user_rating_text} with {selectedRestaurant.user_rating} <Icon name='star' /> </p>

                                </div>
                            </InfoWindow>
                        )}
                    </GoogleMap>
            )
    }

        let WrappedMap = withScriptjs(withGoogleMap(Map))
        return (<div>
                    <div id='map_title'>Bringing the options to you </div>
                    <div style={{margin: '5%', width: '90vw', height: '100vh'}}>
                        <WrappedMap
                            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing.places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
                            loadingElement={<div style={{height: "100%"}} />} 
                            containerElement={<div style={{height: "100%"}} />} 
                            mapElement={<div style={{height: "100%"}} />} 
                        />
                    </div>
                </div>
        )
    
}

export default withRouter(MapContainer)