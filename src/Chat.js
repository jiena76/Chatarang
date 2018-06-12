import React, { Component } from 'react'

import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

class Chat extends Component{
  constructor(){
    // getting constructor from the parent class
    super()

    this.state = {
      messages: [
        {
          id: 1,
          userName: 'dstrus',
          body: 'Strawberry.'
        },
        {
          id: 2,
          userName: 'dplazzo',
          body: 'This guy is so annoying, I hate my job.'
        }
      ]
    }
  }
  render(){
    return(
      <div className="Chat">
        <ChatHeader />
        <MessageList messages={this.state.messages} />
        <MessageForm />
      </div>
    );
  }
}

export default Chat;