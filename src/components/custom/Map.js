import React, { Component } from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

class Map extends Component {

  constructor(){
  	super()
  	this.state = {
  	  map: null
  	}
  }	

  mapMoved(){
  	console.log('mapMoved: ')
  }	

  mapLoaded(map){
  	console.log('mapLoaded: '+JSON.stringify(map.getCenter()))

  }

  render(){
    const markers = this.props.markers || []

    return(
      <GoogleMap
        ref={this.mapLoaded.bind(this)}
        onDragEnd={this.mapMoved.bind(this)}
        defaultZoom={this.props.zoom}
        defaultCenter={this.props.center}>
        {markers.map((marker, index) => (<Marker {...marker} />)

        )}
      </GoogleMap>
    )
  }
}

export default withGoogleMap(Map)