import React from 'react'

import Avatar from './Avatar'

const Message = (props) => {
  return(
    <div className="Message" style={styles.message}>
      <Avatar />
      <div className="details" style={styles.messageDetails}>
        <div class="Metadata">
          <div class="user">{props.message.userName}</div>
          {/* time not set yet */}
          <div class="time"></div>
        </div>
        <div class="body">
          : {props.message.body}    
        </div>
      </div>


        
    </div>
  );
}

export default Message;

const styles = {
//.Message
  message: {
    display: "flex",
    marginTop: "1rem",
    padding: "0 1rem"
  },
//.Message .details
  messageDetails: {
    flex: "1",
    paddingLeft: "0.5rem"
  }
}