import React from 'react'

import Avatar from './Avatar'
import SignOut from './SignOut'

// same as this: const UserInfo = (props) => {
// const {user, userName} = props is possible, destructing it.
// {user, ...props} = user and (props - user)
const UserInfo = ({user, signOut}) => {
  return(
    <div className="UserInfo" style={styles.userInfo}>
      <div style={styles.avatar}>
        <Avatar  email={user.email}/>
      </div>
      <div className="user" style={styles.user}>
        {user.userName}
      </div>
      <a href="/" style={styles.a}>
        <SignOut signOut={signOut} />
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
    alignItems: "center",
    padding: "0 1rem",
  },
  //.UserInfo .Avatar
  avatar: {
    marginRight: "0.5rem",
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
    transition: "color 0.25s ease-out",
  }
}
