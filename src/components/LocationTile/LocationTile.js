import React, { Component} from 'react';
import './LocationTile.css';

class LocationTile extends Component {
  
  constructor(props) {
    super(props);
    
  }
  
  
  render() {
    console.log(this.props);
    return (
      <div className="location-tile">
        <h1>{this.props.locationDetails.name}</h1>
      </div>
    )
  }
}

export default LocationTile;
