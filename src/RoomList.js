import React from 'react'

const RoomList = () => {
  return(
    <nav className="RoomList">
      <h2 style={styles.h2}>Rooms</h2>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <a href="#" style={styles.liA}>general</a>
        </li>
        <li style={styles.li}>
          <a href="#" style={styles.liA}>random</a>
        </li>
      </ul>
    </nav>
  );
}

export default RoomList;

const styles = {
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
    textDecoration: "none"
  },
  //.RoomList li a::before
  liABefore: {
    content: "'# '"
  },
  //.RoomList li a:hover
  liAHover: {
    backgroundColor: "rgba(255, 255, 255, 0.2)"
  }
}