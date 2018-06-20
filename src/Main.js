import React, { Component } from 'react'

import Sidebar from './Sidebar'
import Chat from './Chat'

class Main extends Component{
  state = {
    room: {}
  }

  setRoom = (room) => {
    this.setState({room});
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