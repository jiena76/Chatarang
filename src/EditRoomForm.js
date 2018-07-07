import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite';

// props: roomName, editRoomName, visibility, formVisibility
class EditRoomForm extends Component{
  state = {
    newName: ""
  }

  handleChange = (e) => {
    this.setState({newName: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.newName === ""){
      alert("Room name cannot be an empty string");
    }
    else{
      this.props.editRoomName(this.props.roomName, this.state.newName);
      this.props.hide();
    }
  }

  render(){
    if(this.props.visibility === true){
      return(
        <div >
          <form className={css(styles.div)}>
            <input 
              name="newName"
              type="text"
              placeholder="New room name"
              onChange={this.handleChange}
              className={css(styles.input)}
              autoFocus
            />
            <button type="submit" onClick={this.handleSubmit} className={css(styles.button)}>
              <i className="far fa-check-circle fa-lg" title="Rename"></i>
            </button>
            <button type="button" onClick={this.props.formVisibility} className={css(styles.button)}s>
              <i className="far fa-times-circle fa-lg" title="Cancel"></i>
            </button>
          </form>
        </div>
      );
    }
    else{
      return(
        <div></div>
      );
    }
  }
}

export default EditRoomForm;

const styles = StyleSheet.create({
  div: {
    display: "inline-flex",
  },
  input: {
    backgroundColor: 'rgba(255,255,255, 0.9)',
    borderRadius: "6px",
    outline: 0,
    marginTop: "4px",
    width: "98%",
  },
  button: {
    border: 0,
    backgroundColor: 'transparent',
    outline: 0,
    padding: 0,
    marginLeft: "0.3em",
    marginTop: "0.3em",
    fontSize: '1rem',
    color: 'rgba(255,255,255, 0.6)',
    transition: 'color 0.25s ease-out',
    ':hover': {
      color: 'white',
      cursor: 'pointer',
    },
  },
});