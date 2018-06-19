import React from 'react'
import { StyleSheet, css } from 'aphrodite';

const RoomLink = ({room, setRoom}) => {
  const handleClick = (e) => {
    e.preventDefault();  // prevent refreshing
    setRoom(room);
  };

  return (
    <li className={css(styles.item)}>
      <a
        href="/"
        className={css(styles.link)}
        onClick={handleClick}
        // not "this.handleClick" because this component is not a class
      >
        { room.name }
      </a>
    </li>
  )
}

export default RoomLink;

const styles = StyleSheet.create({
  item: {
    marginBottom: '0.5rem',
  },
  link: {
    display: "block",
    color: "whitesmoke",
    textDecoration: "none",

    "::before": {
      content: '"# "',
    },
    ":hover": {
      backgroundColor: "rgba(225, 225, 225, 0.2",
    },
  }
});