import React from 'react'

import Avatar from './Avatar'
import Metadata from './Metadata'

const Message = (props) => {
  return(
    <div className="Message" style={styles.message}>
      <Avatar email={props.user.email} />
      <div className="details" style={styles.messageDetails}>
        <Metadata message={props.message}/>        
        <div className="body">
          {props.message.body}    
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