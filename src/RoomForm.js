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
            <button className={css(styles.plusButton)} onClick={this.props.hide}>
              <i className="fas fa-minus-circle" title="Hide room form"></i>
            </button>
          </div>
  
          <form
            className={css(styles.form)}
            onSubmit={this.handleSubmit}
          >
            <label htmlFor="name">Room Name:</label>
            <input
              name="name"
              type="text"
              placeholder="room name"
              onChange={this.handleChange}
              className={css(styles.input)}
              autoFocus
            />
            <label htmlFor="description">Description:</label>
            <input
              name="description"
              type="text"
              placeholder="description"
              className={css(styles.input)}
              onChange={this.handleChange}
            />
            <div className={css(styles.label)}>
              <button type="submit" onClick={this.handleSubmit} className={css(styles.button)}>Create</button>
              <button type="button" onClick={this.props.hide} className={css(styles.button)}>Cancel</button>
            </div>
          </form>
        </div>
      );
    }
    else{
      return(
        <div className={css(styles.label)}>
          <h2 className={css(styles.h2)}>Rooms</h2>
          <button className={css(styles.plusButton)} onClick={this.props.show}>
            <i className="fas fa-plus-circle" title="Add room"></i>
          </button>
        </div>
      );
    }
  }
}

export default RoomForm;

const styles = StyleSheet.create({
  form: {
    backgroundColor: "#424257",
    borderRadius: "10px",
    padding: "5px 5px 7px 5px",
  },
  //.RoomList h2
  h2: {
    fontSize: "1rem"
  },
  label: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    borderRadius: "6px",
    outline: 0,
    marginBottom: "7px",
    width: "98%",
  },
  plusButton: {
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
  button: {
    border: 0,
    backgroundColor: "#636383",
    outline: 0,
    padding: "2px 5px",
    fontSize: '0.9rem',
    color: 'white',
    cursor: 'pointer',
    transition: 'color 0.25s ease-out',
    borderRadius: "5px",
    marginTop: "3px",

    ':hover': {
      color: 'rgba(255,255,255, 0.4)',
    }
  },
});