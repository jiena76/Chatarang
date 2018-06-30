import React from 'react'

// header inside message list indicating the very beginning of the message list
const RoomAnnouncement = ({roomName, exist}) => {
  if(!exist){
    return(
      <div className="RoomAnnouncement" style={styles.roomAnnounce}>
        <h3 style={styles.h3}>
          # {roomName}
        </h3>
        <p>← Please click the "+" sign to create a new room.</p>
      </div>
    );
  }
  else{
    return(
      <div className="RoomAnnouncement" style={styles.roomAnnounce}>
        <h3 style={styles.h3}>
          # {roomName}
        </h3>
        <p>This is the very beginning of the # {roomName} room.</p>
      </div>
    );
  } 
}

export default RoomAnnouncement;

const styles = {
  //.MessageList .roomAnnouncement
  roomAnnounce: {
    padding: "2rem 1rem 1rem 1rem"
  },
  //.MessageList .roomAnnouncement h3
  h3: {
    fontSize: "1.5rem"
  },
}