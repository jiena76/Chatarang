import React from 'react'

// very top headline of the chat component
const ChatHeader = ({room}) => {
  return(
    <div className="ChatHeader" style={styles.chatHeader}>
      <div className="roomInfo">
        <h2 style={styles.roomH2}>
          # {room.name}
        </h2>
        <p style={styles.roomP}>
          {room.description}
        </p>
      </div>
    </div>
  );
}

export default ChatHeader;

const styles = {
  //.ChatHeader
  chatHeader: {
    backgroundColor: "#f3f3f3",
    borderBottom: "1px solid #ccc",
    height: "3rem",
    padding: "0 1rem",
    display: "flex",
    alignItems: "center"
  },
  //.ChatHeader .roomInfo h2
  roomH2: {
    fontSize: "1.1rem",
    margin: "0"
  },
  //.ChatHeader .roomInfo p
  roomP: {
    color: "#999",
    margin: "0",
    fontSize: "0.8rem"
  }
}