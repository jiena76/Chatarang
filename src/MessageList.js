import React, { Component } from 'react'

import Message from './Message'

const MessageList = () => {
  const messages = [
    {
      id: 1,
      userName: 'dstrus',
      body: 'Chatting up a storm.'
    },
    {
      id: 2,
      userName: 'dplazzo',
      body: 'This guy is so annoying, I hate my job.'
    }
  ]

  return(
    <div className="MessageList">
      {messages.map(mssg => (
        <Message key={mssg.id} message={mssg} />
      ))}
    </div>
  )
}

export default MessageList;