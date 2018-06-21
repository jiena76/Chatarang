import React from 'react'

import Message from './Message'
import RoomAnnouncement from './RoomAnnouncement'

const MessageList = ({messages, room}) => {
  return(
    <div className="MessageList" style={styles}>
      <RoomAnnouncement room={room}/>

      {messages.map(mssg => (
        <Message key={mssg.id} message={mssg}/>
      ))}
    </div>
  )
}

export default MessageList;

const styles = {
  //.MessageList
  backgroundColor: "white",
  flex: "1",
  paddingBottom: "1rem",
  overflowY: "scroll"
}