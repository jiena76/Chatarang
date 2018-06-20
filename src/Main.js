import React, { Component } from 'react'

import Sidebar from './Sidebar'
import Chat from './Chat'
// import base from './base'

class Main extends Component{
  state = {
    room: {}
  }

  setRoom = (room) => {
    this.setState({room});
  }
  
  /*
  componentDidMount(){
    let theRoom = {};
    base.fetch("rooms", {
      then(data){
        // theRoom = data[Object.keys(data)[0]];
        theRoom = (data => data.json());
        console.log(data.json());
        // this.setState({room: theRoom});
        // console.log(this.state.room);
    }});
    console.log("theRoom");
    console.log(theRoom);
    // console.log("setState room");
    // console.log(this.state.room);
  }
  */

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