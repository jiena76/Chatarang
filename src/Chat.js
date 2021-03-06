import React, { Component } from 'react'
import base from './base' // importing re-base methods

import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'
// import RoomAnnouncement from './RoomAnnouncement'

// 1 of 2 main components, includes: ChatHeader, MessageForm, MessageList
class Chat extends Component{
  constructor(){
    // getting constructor from the parent class
    super()

    this.state = {
      messages: [],
      rebaseBinding: null,
    }
  }
  
  addMessage = (body) => {
    const messages = [...this.state.messages];
    messages.push({
      id: `${this.props.user.uid}-${Date.now()}`,
      createdAt: Date.now(),
      displayName: this.props.user.displayName,
      email: this.props.user.email,
      body: body,
      photoURL: this.props.user.photoURL,
    })
    // {messages: messages} not required because variable name == tag name
    this.setState({messages});
  }
  
  // only runs once when the page is loaded, therefore componentDidUpdate required
  componentDidMount(){
    this.syncMessages();
  }
  
  // runs only when the page is updated, not when the page is loaded
  componentDidUpdate(prevProps){  // previous props from the past
    if(prevProps.room.name !== this.props.room.name){
      this.syncMessages();
    }
  }

  syncMessages(){
    // ***stop syncing with the current endpoint***
    if(this.state.rebaseBinding){
      base.removeBinding(this.state.rebaseBinding)
    }

    // ***sync with the new endpoint***
    // syncState method returns an object that can be pass to removeBinding
    // if to remove the listener while the component is still mounted
    const rebaseBinding = base.syncState(`${this.props.room.id}/messages`, {
      context: this,
      state: 'messages',
      asArray: true,
    });
    this.setState({rebaseBinding});
  }

  render(){
   return(
    <div className="Chat" style={styles}>
      <ChatHeader room={this.props.room} />
      <MessageList messages={this.state.messages} room={this.props.room}/>
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