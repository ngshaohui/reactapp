import React, { Component } from 'react';
import Menubar from './components/Menubar';
import Searchbar from './components/Searchbar';
import Planner from './components/Planner';
import './App.css';

class App extends Component {

  //data goes from top down
  render() {
    return (
      <div className="App">
        <Menubar />
        <Searchbar />
        <Planner />
      </div>
    );
  }
}

export default App;
