import React, {Component} from 'react'
import { StyleSheet, css } from 'aphrodite';

import RoomLink from './RoomLink'
import RoomForm from './RoomForm'
import base from './base'

// list of rooms in the sidebar
class RoomList extends Component {
  state = {
    rooms: {},
    showRoomForm: false,
  }
  
  componentDidMount() {
    base.syncState('rooms', {
        context: this,
        state: 'rooms',
      }
    );
  }

  addRoom = (room) => {
    const rooms = {...this.state.rooms};
    // add the incoming room to the object "rooms"
    rooms[room.name] = room;
    this.setState({rooms});
    // when a new room is added, show that room
    this.props.setRoom(room);
  }
  
  showRoomForm = () => {
    this.setState({ showRoomForm: true });
  }
  hideRoomForm = () => {
    this.setState({ showRoomForm: false });
  }
  
  render() {
    return (
      <nav className={`RoomList ${css(styles.nav)}`}>

        <RoomForm
          addRoom={this.addRoom} 
          visibility={this.state.showRoomForm} 
          show={this.showRoomForm}
          hide={this.hideRoomForm} 
        />

        <ul className={css(styles.ul)}>
          {/* "Object.keys" for iterating (mapping) through an object */
            Object.keys(this.state.rooms).map(roomName => (
              <RoomLink
                /* "key" added since iterating, and iterating needs an identification */
                key={roomName}
                /* using [roomName] instead of .roomName since "roomName" is a variable, not string "roomName" */
                room={this.state.rooms[roomName]}
              />
            ))
          }
        </ul>
      </nav>
    )
  }
}

export default RoomList;

const styles = StyleSheet.create({
  nav: {
    padding: '0 1rem',
  },
  //.RoomList ul
  ul: {
    listStyle: "none",
    marginLeft: "0",
    paddingLeft: "0"
    
  },
})