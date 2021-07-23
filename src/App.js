import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import Login from "./components/Login";
import BubblePage from "./components/BubblePage"
import "./styles.scss";
import { axiosWithAuth } from "./helpers/axiosWithAuth";

function App() {

  const logout = () => {
    axiosWithAuth.logout()
  }
  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <button data-testid="logoutButton" onClick={logout}>logout</button>
        </header> 

        <Route exact path="/" component={Login} />
        <PrivateRoute component={BubblePage} path="/bubbles"/>
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page.