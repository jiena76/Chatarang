import React from 'react'

import RoomList from './RoomList';
import UserInfo from './UserInfo'

const Sidebar = ({user, roomName, signOut, setRoom}) => {
  return(
    <aside className="Sidebar" style={styles.sidebar}>
    {/* adding multiple styles format: <h1 style={{ ...styles.children,  ...styles.h1  }}> */}
      <UserInfo user={user} signOut={signOut} />
      <h1 style={styles.h1}>
        XTBC 18
      </h1>
      <RoomList setRoom={setRoom} roomName={roomName} />
    </aside>
  )
}

const styles = {
  sidebar: {
    backgroundColor: "#333344",
    color: "rgba(255, 255, 255, 0.8)",
    width: "12rem",
    padding: "1rem 0",
    display: "flex",
    flexDirection: "column",
  },
  //.Sidebar h1
  h1: {
    color: "white",
    fontSize: "1.2rem",
    marginTop: "0",
    padding: "0 1rem",
  }
}

export default Sidebar;