import React from 'react'

const RoomAnnouncement = ({room}) => {
  if(Object.keys(room).length !== 0){
    return(
      <h1>oops nothing!</h1>
    );
  }
  else{
    return(
      <div className="RoomAnnouncement" style={styles.roomAnnounce}>
        <h3 style={styles.roomH3}>
            # hey
          </h3>
          <p>This is the very beginning of the # hey room.</p>
      </div>
    );
  } 
}

export default RoomAnnouncement;

const styles = {
  //.MessageList .roomAnnouncement
  roomAnnounce: {
    padding: "2rem 1rem"
  },
  //.MessageList .roomAnnouncement h3
  h3: {
    fontSize: "1.5rem"
  }
}