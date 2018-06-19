import React from 'react'

import RoomList from './RoomList';
import UserInfo from './UserInfo'

const Sidebar = ({user, SignOut, setRoom}) => {
  return(
    <aside className="Sidebar" style={styles.sidebar}>
      <UserInfo user={user} />
      <h1 style={styles.h1} signOut={SignOut}>
        XTBC 18
      </h1>
      <RoomList setRoom={setRoom}/>
    </aside>
  )
}

{/* adding multiple styles format
  <h1 style={{
  ...styles.children,
  ...styles.h1
  }}> */}

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
    marginTop: "0"
  }
}

export default Sidebar;