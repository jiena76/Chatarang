import React, { Component } from 'react'
import base from './base'

import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

class Chat extends Component{
  constructor(){
    // getting constructor from the parent class
    super()

    this.state = {
      messages: []
    }
  }

  componentWillMount() {
    base.syncState('general/messages', {
      context: this,
      state: 'messages',
      asArray: true,
    })
  }

  addMessage = (body) => {
    // making a deep copy using [...arrayName]
    const messages = [...this.state.messages]
    messages.push({
      id: Date.now(),
      userName: this.props.user.userName,
      body: body,
      // or just "body"
    })

    // {messages: messages} not required because variable name == tag name
    this.setState({messages});
  }

  render(){
    return(
      <div className="Chat" style={styles}>
        <ChatHeader />
        <MessageList messages={this.state.messages} />
        <MessageForm addMessage={this.addMessage}/>
      </div>
    );
  }
}

export default Chat;

const styles = {
  display: "flex",
  flex: "1",
  flexDirection: "column",
}