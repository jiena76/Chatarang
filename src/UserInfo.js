import React from 'react'

import Avatar from './Avatar'

// same as this: const UserInfo = (props) => {
// const {user, userName} = props is possible, destructing it.
const UserInfo = ({userName}) => {
  return(
    <div className="UserInfo" style={styles.userInfo}>
      <div style={styles.avatar}>
        <Avatar />
      </div>
      <div className="user" style={styles.user}>
        {userName}
      </div>
      <a href="#" style={styles.a}>
        <i className="fas fa-sign-out-alt"></i>
      </a>
    </div>
  );
}

export default UserInfo;

const styles = {
//.UserInfo
  userInfo: {
    marginBottom: "1rem",
    display: "flex",
    alignItems: "center"
  },
//.UserInfo .Avatar
  avatar: {
    marginRight: "0.5rem",
    marginTop: "0.5rem"
  },
//.UserInfo .user
  user: {
    flex: "1"
  },
//.UserInfo a
  a: {
    border: "0",
    padding: "0",
    backgroundColor: "transparent",
    color: "rgba(255, 255, 255, 0.6)",
    fontSize: "1.2rem",
    transition: "color 0.25s ease-out"
  },
//.UserInfo a:hover
  aHover: {
    color: "white"
  }
}