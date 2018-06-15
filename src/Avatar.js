import React from 'react'

const Avatar = (props) => {
  return(
    <div 
      className="Avatar"
      style={{...styles, background: `url(https://api.adorable.io/avatars/40/${props.email}.io.png)`}}>
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