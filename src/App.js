import Navbar from './Navbar';
import Home from './Home';
import Routines from './Routines';
import LoginForm from './Login';
import WelcomePage from './Welcome';
import RegisterForm from './Register';
// import CreateRoutine from './CreateRoutine';
// import MessageForm from './Messages';
// import SentMessages from './CreateMessage'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import { useState, useEffect } from "react"

export const BASE_URL = 'http://fitnesstrac-kr.herokuapp.com/api/';
export const cohortName = '2105-SJS-RM-WEB-PT';



function App() {
  const [user, setUser] = useState({username: '', password: ''});
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
 
  const adminUser = {
    username: 'bob',
    email: 'admin@example.com',
    password: 'password'
  }

  //function to logout
  const Logout = () => {
    console.log('logout')
    setUser({
      username: '', 
      // email: '', 
      password: ''
    });
  }


  return (
    <Router>

      <div className="App">
        <Navbar />

        <div className="content">

          <Switch>

            <Route exact path="/home">
              <Home />
            </Route>
            {/* <Route exact path="/createRoutine">
              <CreateRoutine token={token} />
            </Route>
            <Route path="/messages" >
              <MessageForm />
            </Route>*/
            <Route exact path="/routines">
              <Routines  />
            </Route> }
            <Route exact path="/users/register">
              <RegisterForm setToken={setToken} />
            </Route>
            <Route exact path="/profile">
              <WelcomePage Logout={Logout} />
            </Route>
            <Route path="/users/login" >
              <LoginForm setToken={setToken} />
            </Route>
            {/* <Route path="/leaveMessages" >
              <SentMessages />
            </Route> */}

          </Switch>


        </div>
      </div>

    </Router>
  );
}

export default App;
