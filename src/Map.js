import React from "react";
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoicnBhbDEyMyIsImEiOiJjazhhdW45OHAwMXp2M2ZsZjlsaHRiM2N3In0.thpEURn-ky_vpH6iABc5nw';

class Map extends React.Component {
  // Code from the next few steps will go here
  constructor(props) {
    super(props);
    this.state = {
    lng: -118.8882,
    lat: 37.5634,
    zoom: 5.28
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
    container: this.mapContainer,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [this.state.lng, this.state.lat],
    zoom: this.state.zoom
    });

    map.on('move', () => {
      this.setState({
      lng: map.getCenter().lng.toFixed(4),
      lat: map.getCenter().lat.toFixed(4),
      zoom: map.getZoom().toFixed(2)
      });
    });
  }

  render() {
    return (
      <div>
        <div className='sidebarStyle'>
          <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
        </div>
        <div ref={el => this.mapContainer = el} className='mapContainer' />
      </div>
    )
  }



}

export default Map;
