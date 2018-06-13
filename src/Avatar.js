import React from 'react'

const Avatar = () => {
  return(
    <div 
      className="Avatar"
      style={styles}>
    </div>
  );
}

export default Avatar;

const styles = {
  background: 'url(https://api.adorable.io/avatars/32/davey@getfretless.com)',
  height: "40px",
  width: "40px",
  fontSize: "1rem",
  borderRadius: "20px"
}