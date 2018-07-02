import React, { Component } from 'react'

import Sidebar from './Sidebar'
import Chat from './Chat'
import base from './base'

// either main or signin page will show
class Main extends Component{
  state = {
    room: {}
  }

  setRoom = (room) => {
    this.setState({room});
  }
  
  componentDidMount(){
    base.fetch("rooms", {}).then(data => {
      this.setRoom(data[this.props.match.params.roomName]);
    });    
    /*
    base.fetch("rooms", {}).then(data => {
      // const room = data[Object.keys(data)[0]];
      // this.setState({room});

      // if data object isn't empty,
      if(Object.keys(data).length !== 0) {this.setRoom(data[Object.keys(data)[0]])};
      // this.setState(data[Object.keys(data)[0]]) only saved the string "General"
      // but setRoom works for some reason
    });
    */
  }

  render(){
    return(
      <div className="Main" style={styles}>
      {/* {this.props.user} because Main is class not an object function */}
        <Sidebar
          user={this.props.user}
          signOut={this.props.signOut}
          setRoom={this.setRoom}  // this.setRoom because it's a class method
        />
        <Chat 
          user={this.props.user} 
          room={this.state.room}
        />
      </div>
    );
  }
}

const styles = {
  display: 'flex',
  alignItems: 'stretch',
  height: '100vh'
}

export default Main;