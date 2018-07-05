import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import './App.css';

import Main from './Main'
import SignIn from './SignIn'
import {auth} from './base'

// application
class App extends Component {
  constructor(){
    super();

    const user = JSON.parse(localStorage.getItem('user')) || {};

    this.state = {
      user
    }
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

  // runs once when the page loads (after rendering)
  // therefore signIn is false when checekd in render()
  // componentWillMount is not recommended to use anymore
  /*  (below was in componentDidMount)
  // "localStorage.getItem('user');" will return a string,
  // so use JSON.parse to make it an object variable
  const user = JSON.parse(localStorage.getItem('user'));
  // if the variable "user" exists, then: 
    if(user){
      this.setState({user});
    }
    */
  
  
  componentDidMount() {
    // whenever authentication information changes, call this function
    auth.onAuthStateChanged(
      user => {
        // if there's an user
        if (user) {this.handleAuth(user);}
        // if signed out
        else {this.handleUnauth(user);}
      }
    )
  }

  render() {
    return (
      <div className="App">
        <Switch>

          <Route exact path="/sign-in" render={ navProps => (
            this.signedIn()
            ? <Redirect to="/rooms/General" />
            : <SignIn {...navProps} />
          )}/>

          {/* when rendering, history, location, and match doesn't get passed down.
          navProps => ( {...navProps} ) required for this reason */}
          <Route exact path="/rooms/:roomName" render={ navProps => (
            this.signedIn()
              ? <Main user={this.state.user} signOut={this.signOut} {...navProps} />
              : <Redirect to="/sign-in" />
          )}/>

          <Route render={ () => (
            this.signedIn()
            ? <Redirect to="/room/General" />
            : <Redirect to="/sign-in" />
          )}/>
        </Switch>
        {
          /* if ther user is returned(exists),
          then open main, else open "sign in" page 
          this.signedIn()
            ? <Main user={this.state.user} signOut={this.signOut}/>
            : <SignIn handleAuth={this.handleAuth}/>*/
        }
      </div>
    );
  }
}

export default App;
