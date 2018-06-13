import React from 'react'

class SignIn extends Component{
  state = {
    email: "",
  }

  handleChange = (e) => {
    this.setState({ email: e.target.value});
  }

  handleSubmit = (e) => {
    this
  }

  render(){
    return(
      <div className="SignIn">
        <form>
          <input 
            type="email"
            name="email"
            placeholder="Email"
            autoFocus
          />
          <button type="submit" >Sign In</button>
        </form>
      </div>
    );
  }
}

export default SignIn;
