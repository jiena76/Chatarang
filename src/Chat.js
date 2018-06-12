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

  addMessage = () => {
    // making a deep copy using [...arrayName]
    const messages = [...this.state.messages]
    messages.push({
      id: Date.now(),
      userName: "Jieun",
      body: "I'm excited for dinner",
    })

    // {messages: messages} not required because variable name == tag name
    this.setState({messages});
  }

  render(){
    return(
      <div className="Chat">
        <ChatHeader />
        <MessageList messages={this.state.messages} />
        <MessageForm addMessage={this.addMessage}/>
      </div>
    );
  }
}

export default Chat;