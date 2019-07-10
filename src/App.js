import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from "react-router-dom";
import SignupForm from './components/SignupForm/SignupForm'
import SigninForm from './components/SigninForm/SigninForm'
import './css/style.css'

function App(){
  return(
    <Router>
      <div>
        <Route path="/signin" component={SigninForm} />
        <Route path="/signup" component={SignupForm} />
      </div>
    </Router>
  )
}

export default App;