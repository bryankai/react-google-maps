import React, {Component} from 'react'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
 } from 'react-google-maps'



class Map extends Component {

  constructor(props) {
    super(props)
      this.state = {
        markers : [{
          position: {
            lat: 47.6579,
            lng: -122.3079,
            name: 'Marker 1'
          }
        },
        {
          position: {
            lat: 47.6579,
            lng: -122.3159,
            name: 'Marker 2'
        }
      }]
    }
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 2000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        ref={props.onMapLoad}
        defaultCenter = { { lat: 47.6599, lng: -122.3099 } }
        defaultZoom = { 13 }
        // onClick={props.onMapClick}
      >
        {this.state.markers.map(marker => (
          // <Marker
          //   {...marker}
          //   onRightClick={() => props.onMarkerRightClick(marker)}
          // />
          <Marker
            position={marker.position} />
        ))}
      </GoogleMap>
   ))


   return (
      <div>
        <GoogleMapExample
          containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
          markers={this.state.markers}
          isMarkerShown={this.state.isMarkerShown}
          onMarkerClick={this.handleMarkerClick}
        />
      </div>
   )
  }
}

export default Map
