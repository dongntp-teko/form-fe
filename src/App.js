import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignupForm from './components/SignupForm'
import SigninForm from './components/SigninForm'
import Dashboard from './components/Dashboard'
import Forgot from './components/ForgotPassword'
import NotFound from './components/NotFound'
import Change from './components/ChangePassword'
import './css/style.css'


function App(){
  return(
    <Router>
      <div>
        <Switch>
          <Route path='/dashboard' component={Dashboard} />
          <Route path="/signin" component={SigninForm} />
          <Route path="/signup" component={SignupForm} />
          <Route path='/forgot' component={Forgot} />
          <Route path='/notfound' component={NotFound} />
          <Route path='/change' component={Change} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;