import React from 'react';
import Forecast from './Forecast';


class Home extends React.Component {    
     

    constructor() {
        super();
        this.state = {
            city: "",
        };
      }
      onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
      };
    render() {
       return (
        <Forecast/>
       )
    }
 }
 export default Home;