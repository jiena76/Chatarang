import React from 'react'

const MessageForm = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addMessage();
  }
  return(
    <form className="MessageForm" onSubmit={handleSubmit}>
      <input 
        type="text"
        name='body'
        placeholder='Type a message...'
      />
      <button type='button'>Send</button>
    </form>
  );
}

export default MessageForm;