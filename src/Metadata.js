import React from 'react'
import Moment from 'moment'

// includes each message's creation information (uername and time)
const Metadata = ({message}) => {
  return(
    <div className="Metadata" style={styles.metadata}>
      <div className="user" style={styles.user}>
        {message.displayName}
      </div>
      {/* time not set yet, hardcoded */}
      <div className="time" style={styles.time}>
        {Moment(message.createdAt).format("h:mm a")}
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