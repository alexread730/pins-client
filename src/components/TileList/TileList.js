import React, { Component} from 'react';
import LocationTile from '../LocationTile/LocationTile';
import './TileList.css';

class TileList extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      locations: this.props.locations
    }
  }
  

  render() {

    return (
      <div>
        {
          this.props.locations.map(location => {
            return <LocationTile locationDetails={location} key={location.id}/>
          })
        }
      </div>
    )
  }
}

export default TileList;
