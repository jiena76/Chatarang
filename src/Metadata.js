import React from 'react'

// includes each message's creation information (uername and time)
const Metadata = (props) => {
  return(
    <div className="Metadata" style={styles.metadata}>
      <div className="user" style={styles.user}>
        {props.message.displayName}
      </div>
      {/* time not set yet, hardcoded */}
      <div className="time" style={styles.time}>
        1:12 PM
      </div>
    </div>
  );
}

export default Metadata;

const styles = {
  //.Metadata
  metadata: {
    display: "flex",
    alignItems: "baseline"
  },
  //.Metadata .user
  user: {
    fontWeight: "bold",
    marginRight: "0.5rem"
  },
  //.Metadata .time
  time: {
    color: "#999",
    fontSize: "0.8rem"
  }
}