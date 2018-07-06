import React, { Component } from 'react'

import Sidebar from './Sidebar'
import Chat from './Chat'
import base from './base'

// either main or signin page will show
class Main extends Component{
  constructor(props){
    super(props)

    this.state = {
      room: {},
      rooms: {},
    }
  }

  setRoom = (room) => {
    this.setState({room});
  }
  
  addRoom = (room) => {
    const rooms = {...this.state.rooms};
    // add the incoming room to the object "rooms"
    rooms[room.id] = room;
    this.setState({rooms});
    // when a new room is added, show that room
    this.setRoom(room);
  }
  
  componentDidMount(){
    base.syncState("rooms", {
      context: this, 
      state: "rooms", 
      then: () => {this.setRoom(this.state.rooms[this.props.match.params.roomName])},
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

  componentDidUpdate(prevProps){
    if(prevProps.match.params.roomName !== this.props.match.params.roomName){
      this.setRoom(this.state.rooms[this.props.match.params.roomName]);
    }
  }

  render(){
    return(
      <div className="Main" style={styles}>
      {/* {this.props.user} because Main is class not an object function */}
        <Sidebar
          user={this.props.user}
          roomName={this.props.match.params.roomName}
          signOut={this.props.signOut}
          addRoom={this.addRoom}
          setRoom={this.setRoom}  // this.setRoom because it's a class method
          rooms={this.state.rooms}
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