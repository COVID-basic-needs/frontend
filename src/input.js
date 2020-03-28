import Geocode from "react-geocode";


function centerMap(address){
    Geocode.fromAddress(address).then(
        response => {
          const { lat, lng } = response.results[0].geometry.location;
          const viewport = {...this.state.viewport, longitude: lng, latitude: lat};
          this.setState({viewport});
          console.log(lat, lng);

        },
        error => {
          console.error(error);
        }
      );
    
}