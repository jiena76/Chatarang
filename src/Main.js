import React, { Component } from 'react'

import Sidebar from './Sidebar'
import Chat from './Chat'

class Main extends Component{
  state = {
    room: {
      name: "general",
      description: "room 1",
    }
  }

  setRoom = (room) => {
    this.setState({room});
  }

  render(){
    return(
      <div className="Main" style={styles}>
      {/* {this.props.user} because Main is class not an object function */}
        <Sidebar user={this.props.user} room={this.props.room} setRoom={this.setRoom()}/>
        <Chat user={this.props.user} room={this.state.room}/>
      </div>
    );
  }
}

const styles = {
  display: 'flex',
  alignItems: 'stretch',
  height: '100vh'
}

export default Main;