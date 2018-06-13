import React from 'react'

const Message = (props) => {
  return(
    <div className="Message" style={styles.message}>
      {props.message.userName}: {props.message.body}
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