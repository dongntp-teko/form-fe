import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from "react-router-dom";
import SignupForm from './components/SignupForm/SignupForm'
import './css/style.css'

function App(){
  return(
    <Router>
      <div>
         <Route path="/signup" exact component={SignupForm} />
      </div>
    </Router>
  )
}

export default App;