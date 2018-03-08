import _ from "lodash";
import React from "react";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const mapStyles = require('./data/mapstyles.json')



const GoogleMapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDtY7XcAta9D76108tUv_JIOOfCFvvx-uQ&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `500px`, marginLeft: -15, marginRight:-15 }} />,
        mapElement: <div style={{ height: `100%` }} />
    }),
    withScriptjs,
    withGoogleMap
    )(props => (
    <GoogleMap 
        defaultZoom={11}
        defaultCenter={{ lat: 33.772782, lng: -118.187448 }}
        defaultOptions={{ styles: mapStyles, scrollwheel: false }}
        >
        <Marker position={{ lat: 33.773782, lng: -118.187448 }} />
    </GoogleMap>
));

const enhance = _.identity;



const ReactGoogleMaps = () => [

  <GoogleMapComponent key="map" />

];



export default enhance(ReactGoogleMaps);