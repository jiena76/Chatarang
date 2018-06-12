import React, { Component } from 'react'
import { EMSGSIZE } from 'constants';

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
      {messages.map(mssg => <div>{mssg.userName}: {mssg.body}</div>)}
    </div>
  )
}

export default MessageList;