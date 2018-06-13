import React from 'react'

import Message from './Message'

const MessageList = (props) => {
  return(
    <div className="MessageList" style={styles.messageList}>
      <div className="roomAnnouncement" style={styles.roomAnnounce}>
        <h3 style={styles.roomH3}>#general</h3>
        <p>This is the very beginning of the #general room.</p>
      </div>

      {props.messages.map(mssg => (
        <Message key={mssg.id} message={mssg} />
      ))}
    </div>
  )
}

export default MessageList;

const styles = {
  //.MessageList
  messageList: {
    backgroundColor: "white",
    flex: "1",
    paddingBottom: "1rem",
    overflowY: "scroll"
  },
  //.MessageList .roomAnnouncement
  roomAnnounce: {
    padding: "2rem 1rem"
  },
  //.MessageList .roomAnnouncement h3
  roomH3: {
    fontSize: "1.5rem"
  }
}