import React, {Component} from 'react'
import { StyleSheet, css } from 'aphrodite';

class NewRoomForm extends Component{
  state = {
    room: {
      name: '',
      description: '',
    }
  }

  handleChange(e){
    const room = {...this.state.room};
    room[e.target.name] = e.target.value;
    this.setState({ room });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.addRoom(this.state.room);
    this.props.hideRoomForm();
    this.setState({name: "", description: ""});
  }

  render(){
    if(this.props.visibility){
      return(
        <form
          className="NewRoomForm"
          onSubmit={this.handleSubmit}
        >
          <input
            name="name"
            type="text"
            placeholder="Name"
            onChange={this.handleChange}
            autoFocus
          />
          <input
            name="dscription"
            type="text"
            placeholder="Description"
            onChange={this.handleChange}
          />
          <button type="submit">Create</button>
        </form>
      );
    }
  }
}

export default NewRoomForm;

const styles = StyleSheet.create({
  roomForm: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100vw',
    backgroundColor: '#f6f6f6',
  },

  title: {
    color: '#ff3344',
    fontWeight: 400,
    lineHeight: '80px',
    fontSize: '2rem',
  },

  main: {
    flex: 1,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '0 auto',
    paddingBottom: '3rem',
    width: '40rem',
  },

  form: {
    backgroundColor: 'white',
    boxShadow: '0 1px 1px rgba(0,0,0,.1)',
    marginBottom: '2rem',
    paddingBottom: '2rem',
  },

  label: {
    display: 'block',
    textTransform: 'uppercase',
    color: '#999',
  },

  input: {
    width: '20rem',
    fontSize: '1.5rem',
    border: 0,
    borderBottom: '1px solid black',
    marginTop: '1rem',
    marginBottom: '1rem',
    textAlign: 'center',
    padding: '0.5rem',

    ':focus': {
      outline: 0,
    },
  },

  h2: {
    fontWeight: 'normal',
  },

  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },

  button: {
    display: 'block',
    padding: '1rem',
    margin: '0 1rem',
    fontSize: '1.2rem',
    borderRadius: '1rem',
    backgroundColor: '#ff3333',
    color: 'white',
    width: '10rem',
    cursor: 'pointer',
    outline: 0,
  },

  cancel: {
    backgroundColor: 'white',
    color: '#666',
  },
})