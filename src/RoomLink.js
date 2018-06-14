import React from 'react'
import { StyleSheet, css } from 'aphrodite';

const RoomLink = (props) => {
  const handleClick = (e) => {
    e.preventDefault()
    props.setRoom(props.room)
  }

  return (
    <li className={css(styles.item)}>
      <a
        href="/"
        className={css(styles.link)}
        onClick={handleClick}
      >
        { props.room.name }
      </a>
    </li>
  )
}

export default RoomLink;

const styles = StyleSheet.create