import React, { useState } from "react";
import { axiosWithAuth } from "../helpers/axiosWithAuth";
import { useHistory } from "react-router";
const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [inputs, setInputs] = useState({
    username: '',
    password: ''
  });

  const [error, setError] = useState('')
  //replace with error state

  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(inputs.username === '' && inputs.password === '') {
      setError('Username or Password not valid.');
    } else {
      const response = await axiosWithAuth.login(inputs);
      if (response === "success") {
        history.push('/bubbles')
      } else {
        setError(response)      
      }      
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs(inputs => ({
      ...inputs,
      [name]: value
    }))
  }

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            name="username"
            id="username"
            value={inputs.username}
            onChange={handleChange}
          />
          <input 
            type="password"
            name="password"
            id="password"
            value={inputs.password}
            onChange={handleChange}
          />
          <button id="submit" type="submit">Submit</button>
          <p id="error" className="error">{error}</p>
        </form>
      </div>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"
