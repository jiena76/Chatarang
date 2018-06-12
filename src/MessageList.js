import React from 'react'

import Message from './Message'

const MessageList = (props) => {
  return(
    <div className="MessageList">
      {props.messages.map(mssg => (
        <Message key={mssg.id} message={mssg} />
      ))}
    </div>
  )
}

export default MessageList;