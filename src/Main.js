import React, { Component } from 'react'

import Sidebar from './Sidebar'
import Chat from './Chat'
import base from './base'

class Main extends Component{
  state = {
    room: {}
  }

  setRoom = (room) => {
    this.setState({room});
  }
  
  componentDidMount(){
    base.fetch("rooms", {}).then(data => {
      // const room = data[Object.keys(data)[0]];
      // this.setState({room});
      this.setRoom(data[Object.keys(data)[0]]);
      console.log(this.state.room)
      // this.setState(data[Object.keys(data)[0]]) only saved the string "General"
      // but setRoom works for some reason
    });
  }

  render(){
    return(
      <div className="Main" style={styles}>
      {/* {this.props.user} because Main is class not an object function */}
        <Sidebar
          user={this.props.user}
          signOut={this.props.signOut}
          setRoom={this.setRoom}  // this.setRoom because it's a class method
        />
        <Chat 
          user={this.props.user} 
          room={this.state.room}
        />
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