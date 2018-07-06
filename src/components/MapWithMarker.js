import React, { Component } from 'react';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"


class MapWithMarker extends Component {
  render() {
    const MyMapComponent = compose(
      withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCqMt2G9OftUPNZV2VCne0pnB5VIJV2Ct8",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
      }),
      withScriptjs,
      withGoogleMap
    )((props) =>
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 47.6579, lng: -122.3079 }}
      >
        {props.isMarkerShown && <Marker position={{ lat: 47.6579, lng: -122.3079 }} />}
      </GoogleMap>
    )

    return (
      <MyMapComponent isMarkerShown />
    )
  }
}

export default MapWithMarker
