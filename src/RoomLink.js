import React from 'react'
import { StyleSheet, css } from 'aphrodite';

const RoomLink = ({room, setRoom}) => {
  const handleClick = (e) => {
    e.preventDefault();  // prevent refreshing
    setRoom(room);
  };

  return (
    <li className={css(styles.li)}>
      {/* not "this.handleClick" because this component is not a class */}
      <a href="/" className={css(styles.liA)} onClick={handleClick}>
        {room.name}
      </a>
      {console.log(room.name)}
    </li>
  )
}

export default RoomLink;

const styles = StyleSheet.create({
  //.RoomList li
  li: {
    marginBottom: "0.5rem"
  },
  //.RoomList li a
  liA: {
    display: "block",
    color: "whitesmoke",
    textDecoration: "none",

    ":before": {
      content: "'# '"
    },

    ":hover": {
      backgroundColor: "rgba(255, 255, 255, 0.2)"
    }
  },
});