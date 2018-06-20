import React, {Component} from 'react'
import { StyleSheet, css } from 'aphrodite';

import RoomLink from './RoomLink'
import NewRoomForm from './NewRoomForm'
import base from './base'

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
  }
  
  showRoomForm = () => {
    this.setState({ showRoomForm: true })
  }
  hideRoomForm = () => {
    this.setState({ showRoomForm: false })
  }
  
  render() {
    return (
      <nav className={`RoomList ${css(styles.nav)}`}>

        <div className={css(styles.label)}>
          <h2 className={css(styles.h2)}>Rooms</h2>
          <button className={css(styles.button)} onClick={this.showRoomForm}>
            <i className="fas fa-plus-circle" title="Add room"></i>
          </button>
        </div>

        <NewRoomForm addRoom={this.addRoom} visibility={this.state.showRoomForm} hide={this.hideRoomForm} />

        <ul className={css(styles.ul)}>
          {/* "Object.keys" for iterating (mapping) through an object */
            Object.keys(this.state.rooms).map(roomName => (
              <RoomLink
                /* "key" added since iterating, and iterating needs an identification */
                key={roomName}
                /* using [roomName] instead of .roomName since "roomName" is a variable, not string "roomName" */
                room={this.state.rooms[roomName]}
                setRoom={this.props.setRoom}
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
  //.RoomList h2
  h2: {
    fontSize: "1rem"
  },
  //.RoomList ul
  ul: {
    listStyle: "none",
    marginLeft: "0",
    paddingLeft: "0"
    
  },
  label: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    border: 0,
    backgroundColor: 'transparent',
    outline: 0,
    padding: 0,
    fontSize: '1rem',
    color: 'rgba(255,255,255, 0.4)',
    cursor: 'pointer',
    transition: 'color 0.25s ease-out',

    ':hover': {
      color: 'white',
    }
  },
})