import React, { Component } from 'react'

import Sidebar from './Sidebar'
import Chat from './Chat'

class Main extends Component{
  render(){
    return(
      <div className="Main" style={styles}>
        <Sidebar user={this.props.user}/>
        <Chat user={this.props.user}/>
      </div>
    );
  }
}

const styles = {
  display: 'flex',
  alignItems: 'stretch',
  width: '100vw',
  height: '100vh'
}

export default Main;