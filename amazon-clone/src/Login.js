import React, { useState } from 'react'
import './Login.css'
import {Link} from "react-router-dom";
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';



function Login() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    
    //helps to programattically change the url (history)
    const navigate = useNavigate();
    const signIn=e=>{
        //to prevenr from refreshing
        e.preventDefault();

        //firebase
        auth.signInWithEmailAndPassword(email,password)
        .then(auth=>{
            navigate('/');
        })
        .catch(error=>alert(error.message));
    }
     const register=e=>{
        e.preventDefault();
        

        //firebase

        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            //successfully registered returns with a objext
            console.log(auth);
            if(auth){
                navigate('/');
            }
        })
        .catch(error =>alert(error.message));
     }
  return (
    <div className='login'>
        <Link to="/">
        <img  className="login__logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt=""/>
        </Link>
        <div className='login__container'>
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input type='text'  value={email} onChange=
                {e=> setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type='password' value={password} onChange={
                    e=>setPassword(e.target.value)
                }/>

                <button type="submit" onClick={signIn} className="login__signInButton">Sign In</button>
                <p>
                    fnfjernfjjkenfkf
                    erf
                    efefeff
                </p>
                <button onClick={register} className="login__registerButton">Create Your Amazon Account</button>
            </form>
        </div>
    </div>
  )
}

export default Login