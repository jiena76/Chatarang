import React, {Component} from 'react'
import { StyleSheet, css } from 'aphrodite';
import base from './base'
import {NavLink} from 'react-router-dom';

import EditRoomForm from './EditRoomForm';

// room list links for entering the room and others (del, edit, etc)
class RoomLink extends Component{
  state = {
    visibility: false,
  }

  formVisibility = () => {
    if(this.state.visibility === false)
      this.setState({ visibility: true });
    else
      this.setState({ visibility: false });
  }

  showEditForm = () => {
    this.setState({ visibility: true });
  }
  hideEditForm = () => {
    this.setState({ visibility: false });
  }

  removeRoom = () => {
    base.remove(`rooms/${this.props.room.id}`);
    base.remove(`idList/${this.props.room.name}`);
    base.remove(`${this.props.room.id}`);

    // when the room is removed while user's on the page,
    // direct to /rooms/General
    if(this.props.roomName === this.props.room.name)
      this.props.history.push("/rooms/General");
  }

  render(){
    const room = this.props.room;

    if(room.name === "General"){
      return (
        <li className={css(styles.li)}>
          <div className={css(styles.liDiv)}>
            <NavLink title={room.name} to={`/rooms/${room.name}`} className={css(styles.liA)}>
              {room.name}
            </NavLink>

            <div className="buttons">
              <button className={css(styles.button, styles.smaller)} onClick={this.formVisibility}>
                <i className="fas fa-pencil-alt" title="Edit Room Name"></i>
              </button>
            </div>
          </div>

          <EditRoomForm 
            roomName={room.name}
            editRoomName={this.props.editRoomName}
            visibility={this.state.visibility} 
            show={this.showEditForm}
            hide={this.hideEditForm}
          />
        </li>
      );
    }
    else{
      return (
        <li className={css(styles.li)}>
          <div className={css(styles.liDiv)}>
            {/* not "this.handleClick" because this component is not a class */}
            <NavLink title={room.name} to={`/rooms/${room.name}`} className={css(styles.liA)}>
              {room.name}
            </NavLink>
  
            <div className="buttons">
              <button className={css(styles.button, styles.smaller)} onClick={this.formVisibility} >
                <i className="fas fa-pencil-alt" title="Edit Room Name"></i>
              </button>
              <button className={css(styles.button, styles.bigger)} onClick={this.removeRoom}>
                <i className="fas fa-times" title="Delete Room"></i>
              </button>
            </div>
          </div>

            <EditRoomForm 
              roomName={room.name}
              editRoomName={this.props.editRoomName}
              visibility={this.state.visibility} 
              show={this.showEditForm}
              hide={this.hideEditForm}
            />
        </li>
      );
    }
  }
}

export default RoomLink;

const styles = StyleSheet.create({
  //.RoomList li
  li: {
    marginBottom: "0.5rem",
  },
  liDiv: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    // button shows up while hovering li element
    ":hover button": {
      color: 'rgba(255,255,255, 0.3)',
    },
    ":hover button:hover": {
      color: 'rgba(255,255,255, 0.7)',
    }
  },
  //.RoomList li a
  liA: {
    display: "block",
    color: "whitesmoke",
    textDecoration: "none",
    borderRadius: "5px",
    padding: "0px 5px 2px 2px",

    ":before": {
      content: "'# '"
    },

    ":hover": {
      backgroundColor: "rgba(255, 255, 255, 0.2)"
    }
  },
  button: {
    border: 0,
    backgroundColor: 'transparent',
    outline: 0,
    padding: 0,
    marginLeft: "0.4em",
    fontSize: '1rem',
    color: 'transparent',
    cursor: 'pointer',
    transition: 'color 0.25s ease-out',
  },
  bigger: {
    fontSize: "1.1em",
  },
  smaller: {
    fontSize: "0.9em",
  }
});