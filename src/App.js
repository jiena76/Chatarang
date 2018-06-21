import React, { Component } from 'react';
import './App.css';

import Main from './Main'
import SignIn from './SignIn'
import {auth} from './base'

class App extends Component {
  state = {
    user: {}
  }

  signedIn = () => {
    return this.state.user.uid;
  }

  signOut = () => {
    auth.signOut();
    // set user as an empty object
    this.setState({user: {} });
    localStorage.removeItem("user");
  }

  handleAuth = (oauthUser) => {
    const user = {
      uid: oauthUser.uid,
      displayName: oauthUser.displayName,
      email: oauthUser.email,
      photoURL: oauthUser.photoURL,
    };
    // same as typing: this.setState({user: user});
    this.setState({user});
    // storing in local to stay signed in when page is refreshed
    // uses stringify since localStorage only stores strings
    localStorage.setItem('user', JSON.stringify(user));
  }
  
  handleUnauth = () => {
    this.setState({user: {}});
    localStorage.removeItem("user");
  }

  // runs once when the page loads
  componentDidMount() {
    // "localStorage.getItem('user');" will return a string,
    // so use JSON.parse to make it an object variable
    const user = JSON.parse(localStorage.getItem('user'));
    // if the variable "user" exists, then: 
    if(user){
      this.setState({user});
    }

    // whenever authentication information changes, call this function
    auth.onAuthStateChanged(
      user => {
        // if there's an user
        if(user){
          this.handleAuth(user);
        }
        else{
          // if signed out
          this.handleUnauth(user);
        }
      }
    )
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
