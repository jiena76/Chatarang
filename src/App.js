import React, { Component } from 'react';
import './App.css';

import Main from './Main'

class App extends Component {
state = {
  user: {
    ID: '1234',
    userName: 'chris',
  }
}

  render() {
    return (
      <div className="App">
        <Main user={this.state.user}/>
      </div>
    );
  }
}

export default App;
