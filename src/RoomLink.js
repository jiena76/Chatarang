import React from 'react'
import { StyleSheet, css } from 'aphrodite';
import base from './base'

// room list links for entering the room and others (del, edit, etc)
const RoomLink = ({room, setRoom}) => {
  const handleClick = (e) => {
    e.preventDefault();  // prevent refreshing
    setRoom(room);
  };

  const removeRoom = (e) => {
    e.preventDefault();
    base.remove(room.name);
    base.remove(`rooms/${room.name}`);
  }

  return (
    <li className={css(styles.li)}>
      <div className={css(styles.liDiv)}>
        {/* not "this.handleClick" because this component is not a class */}
        <a href="/" className={css(styles.liA)} onClick={handleClick}>
          {room.name}
        </a>
        <button className={css(styles.button)} onClick={removeRoom}>
          <i className="fas fa-times"></i>
        </button>
      </div>
    </li>
  )
}

export default RoomLink;

const styles = StyleSheet.create({
  //.RoomList li
  li: {
    marginBottom: "0.5rem"
  },
  liDiv: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    fontSize: '1rem',
    color: 'transparent',
    cursor: 'pointer',
    transition: 'color 0.25s ease-out',

    ':hover': {
      color: 'rgba(255,255,255, 0.7)',
    }
  },
});