import React, {Component} from 'react'
import { StyleSheet, css } from 'aphrodite';

class RoomForm extends Component{
  state = {
    room: {
      name: '',
      description: '',
    }
  }

  handleChange = (e) => {
    const room = {...this.state.room};
    room[e.target.name] = e.target.value;
    this.setState({ room });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addRoom(this.state.room);
    this.props.hide();
    this.setState({name: "", description: ""});
  }

  render(){
    if(this.props.visibility){
      return(
        <form
          className="RoomForm"
          onSubmit={this.handleSubmit}
        >
          <label htmlFor="name">Room Name</label>
          <input
            name="name"
            type="text"
            placeholder="room name"
            onChange={this.handleChange}
            autoFocus
          />
          <label htmlFor="description">Description</label>
          <input
            name="dscription"
            type="text"
            placeholder="description"
            onChange={this.handleChange}
          />
            
          <button type="button" onClick={this.props.hide}>Cancel</button>
        </form>
      );
    }
    else{
      return(null);
    }
  }
}

export default RoomForm;

const styles = StyleSheet.create({

});