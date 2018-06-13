import React from 'react'

const SignIn = () => {
  return(
    <div className="SignIn">
      <form>
        <input 
          type="email"
          name="email"
          placeholder="Email"
          autoFocus
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;