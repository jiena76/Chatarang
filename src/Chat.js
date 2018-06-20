import React, { Component } from 'react'
import base from './base' // importing re-base methods

import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

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
      id: Date.now(),
      userName: this.props.user.userName,
      email: this.props.user.email,
      body: body,
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
    const rebaseBinding = base.syncState("general/messages", {
      context: this,
      state: 'messages',
      asArray: true,
    });
    this.setState({rebaseBinding});
  }
  
  /*
  componentWillMount() {
    this.syncMessages()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.room.name !== this.props.room.name) {
      this.syncMessages()
    }
  }

  syncMessages = () => {
    // https://github.com/tylermcginnis/re-base#syncstateendpoint-options
    // stop syncing with the current endpoint
    if(this.state.rebaseBinding){
      base.removeBinding(this.state.rebaseBinding);
    }

    // sync with the new endpoint
    const rebaseBinding = base.syncState( `${this.props.room.name}/messages`, {
      context: this,
      state: 'messages',
      asArray: true,
    })

    this.setState({rebaseBinding})
  }


  changeRoom = (roomName) => {
    this.setState({room: roomName});
  }

  addMessage = (body) => {
    // making a deep copy using [...arrayName]
    const messages = [...this.state.messages]
    messages.push({
      id: Date.now(),
      userName: this.props.user.userName,
      email: this.props.user.email,
      body: body,
      // or just "body"
    })

    // {messages: messages} not required because variable name == tag name
    this.setState({messages});
  }

  */

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