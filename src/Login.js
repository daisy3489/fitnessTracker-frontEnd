import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {  Redirect } from 'react-router';

export const BASE_URL = 'http://fitnesstrac-kr.herokuapp.com/api/';
export const cohortName = '2105-SJS-RM-WEB-PT';



function LoginForm( {setToken}) {
    // const [details, setDetails] = useState({username: '', password: ''});
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    
    // console.log("params: ", params)

    //handle submit
    //handle submit
    const submitHandler = async e => {
        e.preventDefault();

        

        // console.log('login details: ', details);
        console.log('login password: ', password, "login name: ", name);

        //what we send to the server
        const fetchToken= async () => {
            const loginUserInfo = await fetch(BASE_URL + cohortName +'/users/login', {
                method: "POST",
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  user: {
                    username: name,
                    password: password
                  }
                })
              })

           //what we get back from server
           const content = await loginUserInfo.json();

           console.log("Login content: ", content)

           const token = content.data.token
           console.log("token: ", token)
           setToken(token);

           

           if(content.success === false) {
            document.write(content.error.message)
           }
        }

        //call function
        fetchToken()
        //set redirect to true
        setRedirect(true);

        
    }
    //if true, redirect to profile page
    if (redirect) {
            return <Redirect to="/profile" />;
    }


    return (
        <form onSubmit={submitHandler}>

            <div className="form-inner">
                <h2>Login</h2>
                
                <div className="form-group">
                    <label htmlFor="name">Username: </label>
                                                                        {/* any time we change it, we're calling a function and we're passing through the event. The event holds the tartget value. we're updating the set details and we're passing through the new value for name. and that should now update name  */}
                    <input type="text" name="name" placeholder='john123' id="name" onChange={e => setName(e.target.value)}></input>
                </div>
                
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password"  id="password" onChange={e => setPassword(e.target.value)}></input>
                </div>
                
                <input type="submit" value="LOGIN"></input>
                <p className="form-group, notMember">Not a member? <Link to="/users/register">Click here to register</Link></p>
            </div>

        </form>
    )
}

export default LoginForm
