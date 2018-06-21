import React from 'react'

const Avatar = ({user}) => {
  const photoUrl = user.photoUrl || `https://api.adorable.io/avatars/40/${user.email}`

  return(
    <div 
      className="Avatar"
      style={{...styles, backgroundImage: `url(${photoUrl})`}}>
    </div>
  );
}

export default Avatar;

const styles = {
  height: "40px",
  width: "40px",
  fontSize: "1rem",
  borderRadius: "20px"
}