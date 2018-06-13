import React, {Component} from 'react'

class MessageForm extends Component{
  state = {
    body: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addMessage(this.state.body);
    this.setState()
  }

  handleChange = (e) => {
    this.setState({body: e.target.value});
  }

  render(){
    return(
      <form 
      className="MessageForm"
      onSubmit={this.handleSubmit}
      style={styles.messageForm}>

        <input 
          type="text"
          name='body'
          placeholder='Type a message...'
          value={this.state.body}
          onChange={this.handleChange}
          style={styles.input}
        />
        <button type='submit' style={styles.button}>Send</button>
      </form>
    );
  }
}

export default MessageForm;

const styles = {

  //.MessageForm
  messageForm: {
    backgroundColor: "white",
    height: "3rem",
    display: "flex",
    alignItems: "stretch",
    border: "2px solid #999",
    borderRadius: "0.5rem",
    margin: "0.25rem",
    padding: "0"
},
  //.MessageForm .chatIcon
  chatIcon: {
    display: "flex",
    borderRadius: "0.5rem",
    alignItems: "center",
    backgroundColor: "white",
    color: "#ccc",
    padding: "0 0.5rem",
    fontSize: "1.2rem"
},
  //.MessageForm input
  input: {
    flex: "1",
    fontSize: "1.2rem",
    border: "0"
},
  //.MessageForm input:focus
  inputFocus: {
    outline: "0"
},
  //.MessageForm button
  button: {
    fontSize: "1.5rem",
    backgroundColor: "#1A8FE3",
    color: "white",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    borderTopRightRadius: "0.5rem",
    borderBottomRightRadius: "0.5rem",
    border: "1px solid white"
  }
}