import React, { Component} from 'react';

class LocationTile extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      locations: this.props.locations
    }
    
    
  }
  
  renderTiles(locationData) {
    return (
      locationData.map(location => {
        return (
          <div>
            <h2>{location.name}</h2>
          </div>
        )
      })
    )
  }
  render() {
    console.log(this.props)
    const locationList = this.props.locations.map((location) =>
      <p key={location.id}>{location.name}</p>
    )

    return (
      <div>
        {locationList}
      </div>
    )
  }
}

export default LocationTile;
