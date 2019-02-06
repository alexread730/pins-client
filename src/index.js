//import react and reactDOM libraries
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import LocationTile from './components/LocationTile'

//Create a react component
class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      locations: []
    };
  };
  
  componentDidMount() {
    this.setState({
      locations: [
        {
          id: 1,
          userId: 1,
          name: "Thailand/Bali",
          description: 'New Years trip to Thialand and Bali with the Tenners!',
          notes: '',
          startDate: new Date(2018,12,25),
          endDate: new Date(2019,1,4),
          photos: [],
          positions: []
        },
        {
          id: 2,
          userId: 1,
          name: "Christmas 2018",
          description: 'Christmas with the Reads',
          notes: '',
          startDate: new Date(2018,12,19),
          endDate: new Date(2018,12,25),
          photos: [],
          positions: []
        },
        {
          id: 3,
          userId: 1,
          name: "Utah",
          description: 'Alex and Tenner trip in the desert.',
          notes: '',
          startDate: new Date(2018,8,21),
          endDate: new Date(2018,8,24),
          photos: [],
          positions: []
        }
      ]
    })
  }
  
  render() {
    // const locations = [
    //   {
    //     id: 1,
    //     userId: 1,
    //     name: "Thailand/Bali",
    //     description: 'New Years trip to Thialand and Bali with the Tenners!',
    //     notes: '',
    //     startDate: new Date(2018,12,25),
    //     endDate: new Date(2019,1,4),
    //     photos: [],
    //     positions: []
    //   },
    //   {
    //     id: 2,
    //     userId: 1,
    //     name: "Christmas 2018",
    //     description: 'Christmas with the Reads',
    //     notes: '',
    //     startDate: new Date(2018,12,19),
    //     endDate: new Date(2018,12,25),
    //     photos: [],
    //     positions: []
    //   },
    //   {
    //     id: 3,
    //     userId: 1,
    //     name: "Utah",
    //     description: 'Alex and Tenner trip in the desert.',
    //     notes: '',
    //     startDate: new Date(2018,8,21),
    //     endDate: new Date(2018,8,24),
    //     photos: [],
    //     positions: []
    //   }
    // ]
    
    return (
      <div>
        <LocationTile locations={this.state.locations} />
      </div>
    )
  };
};

ReactDOM.render(<App />, document.querySelector('#root'));
