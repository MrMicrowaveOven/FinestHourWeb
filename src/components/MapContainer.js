import {Map, GoogleApiWrapper} from "google-maps-react"

const MapContainer = (props) => {
    const mapStyles = {
        width: '100%',
        height: '100%',
    };
    return (
        <Map  
            google={props.google}
            zoom={8}
            style={mapStyles}
            initialCenter={{ lat: 47.444, lng: -122.176 }}
        />
    )
}
export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(MapContainer);