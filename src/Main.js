import React, { Component } from 'react'
// import {withRouter} from 'react-router-dom';

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
      idList: {},
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

    // add id config in idList
    const idList = {...this.state.idList};
    idList[room.name] = room.id;
    this.setState({idList});

    // when a new room is added, show that room
    // this.setRoom(room);

    // make the room "active" when newly added and direct to that path
    this.props.history.push(`/rooms/${room.name}`);
  }

  editRoomName = (oldName, newName) => {
    const id = this.state.idList[oldName];

    // update room Name
    base.update(`rooms/${id}`, {
      data: {name: newName}
    });
    
    // update idList
    const idList = {...this.state.idList};
    idList[newName] = id;
    this.setState({idList});
    base.remove(`/idList/${oldName}`).then(() => {
      if(this.props.match.params.roomName === oldName)
        this.props.history.push(`/rooms/${newName}`);
    });
  }
  
  componentDidMount(){
    // sync idList
    base.syncState("idList", {
      context: this,
      state: "idList",
    });
    // sync rooms
    base.syncState("rooms", {
      context: this, 
      state: "rooms", 
      then: () => {
        if(this.state.idList[this.props.match.params.roomName])
          this.setRoom(this.state.rooms[this.state.idList[this.props.match.params.roomName]]);
        // handles when the requested room is not available
        else
          this.props.history.push(`/rooms/General`);
      },
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
      this.setRoom(this.state.rooms[this.state.idList[this.props.match.params.roomName]]);
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
          editRoomName={this.editRoomName}
          rooms={this.state.rooms}
          history={this.props.history}
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