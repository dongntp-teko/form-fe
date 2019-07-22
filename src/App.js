import React, { setGlobal } from "reactn";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignupForm from './components/SignupForm'
import SigninForm from './components/SigninForm'
import Dashboard from './components/Dashboard'
import Forgot from './components/ForgotPassword'
import NotFound from './components/NotFound'
import Change from './components/ChangePassword'
import './css/style.css'

setGlobal({
  account: {user: '', password: '', email: ''},
  
})

function App(){
  return(
    <Router>
      <div>
        <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route path="/signin" exact component={SigninForm} />
          <Route path="/signup" exact component={SignupForm} {...global} />
          <Route path='/forgot' exact component={Forgot} />
          <Route path='/notfound' exact component={NotFound} />
          <Route path='/change' exact component={Change} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;