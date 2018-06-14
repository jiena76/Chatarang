import React from 'react'
import { StyleSheet, css } from 'aphrodite';

const RoomList = () => {
  return(
    <nav className="RoomList">
      <h2 className={css(styles.h2)}>Rooms</h2>
      <ul className={css(styles.ul)}>
        <li className={css(styles.li)}>
          <a onClick={this.props.} className={css(styles.liA)}>general</a>
        </li>
        <li className={css(styles.li)}>
          <a onClick= className={css(styles.liA)}>random</a>
        </li>
      </ul>
    </nav>
  );
}

export default RoomList;

const styles = StyleSheet.create({
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
  }
})