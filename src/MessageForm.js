import React from 'react'

const MessageForm = () => {
  return(
    <form>
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