import React, { Component } from 'react';
import './App.css';

import Main from './Main'
import SignIn from './SignIn'

class App extends Component {
  state = {
    user: {}
  }

  signedIn = () => {
    return this.state.user.ID;
  }

  handleAuth = (user) => {
    this.setState({user})

    // this.setState.user = {
    //   ID: '1234',
    //   userName: 'chris',
    //   email: 'chris97@gmail.com',
    // }
  }

  render() {
    return (
      <div className="App">
        {
          /* if ther user is returned(exists),
          then open main, else open "sign in" page */
          this.signedIn()
            ? <Main user={this.state.user}/>
            : <SignIn handleAuth={this.handleAuth}/>
        }
      </div>
    );
  }
}

export default App;
