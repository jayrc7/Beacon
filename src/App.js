import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/Map.jsx';
import Location from './components/Location.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Location />
        <Map app_id = "hM6QGhSurmnxc8i69ynP" app_code="GoO9Ti5ehS-nrEQQcm-KGQ" />
        </div>
      
    );
  }
}

export default App;
