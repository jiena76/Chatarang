import React, { Component } from 'react';
import './App.css';

import Main from './Main'
import SignIn from './SignIn'

class App extends Component {
  state = {
    user: {}
  }

  signedIn = () => {
    return this.state.user.uID;
  }

  handleAuth = (user) => {
    // same as typing: this.setState({user: user});
    this.setState({user});
    // storing in local to stay signed in when page is refreshed
    // uses stringify since localStorage only stores strings
    localStorage.setItem('user', JSON.stringify(user));
  }

  signOut = () => {
    // set user as an empty object
    this.setState({user: {} });
  }

  render() {
    return (
      <div className="App">
        {
          /* if ther user is returned(exists),
          then open main, else open "sign in" page */
          this.signedIn()
            ? <Main user={this.state.user} signOut={this.signOut}/>
            : <SignIn handleAuth={this.handleAuth}/>
        }
      </div>
    );
  }
}

export default App;
