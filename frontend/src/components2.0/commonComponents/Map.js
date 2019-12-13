import React from 'react'
import MapGL, { Marker, Popup } from 'react-map-gl'

import 'mapbox-gl/dist/mapbox-gl.css'

import MapInfo from '../commonComponents/MapInfo'

const Token = 'pk.eyJ1IjoicGhvZWJleHh4YyIsImEiOiJjazMxenUxYmUwZGdhM2xzMmVwZG5iNnQ0In0.NS8058Cpk5wl3Qko8cJQiQ'


class Map extends React.Component { 
  constructor(props) {
    super(props)
    this.state = {
      viewport: {
        width: 800,
        height: 500,
        latitude: 51.5074,
        longitude: 0.1278,
        zoom: 10,
        bearing: 0,
        pitch: 0
      },
      info: null
    }
  }


  _updateViewport = viewport => {
    // console.log(this.props.data.lng)
    // console.log(this.props.data.lat)
    this.setState({ viewport })
  }


  _renderMarker = () => {
    const { data } = this.props
    return (
      <Marker longitude={data.lng} latitude={data.lat}>
        <img src='https://i.imgur.com/P1REhj4.png' 
          height="50" 
          width="50"
          onClick={() => this.setState({ info: this.props.data })}
        />
      </Marker> 
    )
  }


  _renderPopup() {
    const { info } = this.state

    return (
      info && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={info.lng}
          latitude={info.lat}
          closeOnClick={false}
          onClose={() => this.setState({ info: null })}
        >
          <MapInfo info={info}/>
        </Popup>
      )
    )
  }


  render() {
    if (!this.props.data.lng && !this.props.data.lat) return null
    // console.log(this.state.viewport)

    return <div>
      <MapGL
        { ...this.state.viewport }
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={this._updateViewport}
        mapboxApiAccessToken={Token}
      >
        {this._renderMarker()}
        {this._renderPopup()}
      </MapGL> 
    </div>
  }
}

export default Map