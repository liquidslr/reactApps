import React, {Component} from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
const api_key = 'AIzaSyBAaGsI52ejmKW3u3oxUmEYu_9tqosRnpw' ;

class Gaurav extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedPlace : 'india'
        }
    }
    render(){
        return(
            <Map google={this.props.google} initialCenter={{ lat: 40.854885,lng: -88.081807}} zoom={10}>
            
                   <Marker onClick={this.onMarkerClick}
                           name={'Current location'} />
            
                   <InfoWindow onClose={this.onInfoWindowClose}>
                       <div>
                         <h1>{this.state.selectedPlace.name}</h1>
                       </div>
                   </InfoWindow>
            </Map>
        )
    }
}
export default GoogleApiWrapper({
    apiKey: (api_key)
  })(Gaurav)