import React from 'react'

// user picture
const Avatar = ({photoURL, email}) => {
  const photo = photoURL || `https://api.adorable.io/avatars/40/${email}`

  return(
    <div 
      className="Avatar"
      style={{...styles, backgroundImage: `url(${photo})`}}>
    </div>
  );
}

export default Avatar;

const styles = {
  height: "40px",
  width: "40px",
  fontSize: "1rem",
  borderRadius: "20px",
  backgroundSize: '40px',
}