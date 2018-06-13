import React from 'react'

const Metadata = (props) => {
  return(
    <div className="Metadata" style={styles.metadata}>
      <div class="user" style={styles.user}>
        {props.message.userName}
      </div>
      {/* time not set yet */}
      <div class="time" style={styles.time}>
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