import React, {Component} from 'react'
import { StyleSheet, css } from 'aphrodite';

class RoomForm extends Component{
  state = {
    room: {
      name: '',
      description: '',
    },
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
        <div className="RoomForm">
          <div className={css(styles.label)}>
            <h2 className={css(styles.h2)}>Rooms</h2>
            <button className={css(styles.button)} onClick={this.props.hide}>
              <i className="fas fa-minus-circle" title="Hide room form"></i>
            </button>
          </div>
  
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
              name="description"
              type="text"
              placeholder="description"
              onChange={this.handleChange}
            />
            <button type="submit" onClick={this.handleSubmit}>Create</button>
            <button type="button" onClick={this.props.hide}>Cancel</button>
          </form>
        </div>
      );
    }
    else{
      return(
        <div className={css(styles.label)}>
          <h2 className={css(styles.h2)}>Rooms</h2>
          <button className={css(styles.button)} onClick={this.props.show}>
            <i className="fas fa-plus-circle" title="Add room"></i>
          </button>
        </div>
      );
    }
  }
}

export default RoomForm;

const styles = StyleSheet.create({
  //.RoomList h2
  h2: {
    fontSize: "1rem"
  },
  label: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    border: 0,
    backgroundColor: 'transparent',
    outline: 0,
    padding: 0,
    fontSize: '1rem',
    color: 'rgba(255,255,255, 0.4)',
    cursor: 'pointer',
    transition: 'color 0.25s ease-out',

    ':hover': {
      color: 'white',
    }
  },
});