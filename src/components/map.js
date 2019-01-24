import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import "../App.css"

const AnyReactComponent = ({ text }) => <div className="map">{ text }</div>;

class SimpleMap extends Component {
    static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 10
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '90vh', width: '100%' }}>
      {this.props.lat && this.props.lng && <GoogleMapReact
          bootstrapURLKeys={{ key:"AIzaSyBZpl_6Xqi8fy_p8gIRj1FyPxT6Y2Vk2T8"}}
          center={{lat:this.props.lat,lng:this.props.lng}}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={this.props.lat}
            lng={this.props.lng}
            text={this.props.description}
          />
        </GoogleMapReact>
      }
      {this.props.lat===undefined && this.props.lng===undefined && <GoogleMapReact
          bootstrapURLKeys={{ key:"AIzaSyBZpl_6Xqi8fy_p8gIRj1FyPxT6Y2Vk2T8"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={this.props.lat}
            lng={this.props.lng}
            text={this.props.description}
          />
        </GoogleMapReact>
      }
      </div>
      );
  }
    
}

export default SimpleMap;