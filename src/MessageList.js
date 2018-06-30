import React from 'react'

import Message from './Message'
import RoomAnnouncement from './RoomAnnouncement'

// list containing all the messages in that room
const MessageList = ({messages, room}) => {
  return(
    <div className="MessageList" style={styles}>
      <RoomAnnouncement roomName={room.name} exist={true}/>

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