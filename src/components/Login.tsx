import React, { useState } from 'react';
import "../styles/Login.css";
import { Button } from '@mui/material';
import smallLogo from "../images/logo.png";
import loginImg from "../images/Component1(1).png";
import { Zoom }from "react-reveal";
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../Hooks/firebase';
import { useDataLayerValue } from '../Hooks/useDatalayer';
import { actionTypes } from '../Hooks/reducer';

const Login:React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    console.log("login", email, password)

    const [{user}, dispatch] = useDataLayerValue();
    const login = () => {
        signInWithPopup(auth, provider)
        .then((data) => (
            dispatch({
                type: actionTypes.SET_USER,
                user: data.user,
            })
        ))
        .catch((error) => (
            alert(error.message)
        ))
    }
    // Rendering the login page
    return (
        <div className='login' id='login'>
            <div className='login__width'>
                <div className='login__content'>
                    <div className='login__loginBox'>
                        <div className='login__loginBoxContent'>
                            <h1 className='shadow'>alx - sasa</h1>
                            <h1>alx - sasa</h1>
                            <div className='login__place'>
                                <div className='login__details'>
                                    <h6>email</h6>
                                    <input type="email" name="email" id="email" placeholder='enter email' size={27} onChange={(event) => setEmail(event.target.value)}/>
                                </div>
                                <div className='login__details'>
                                    <h6>password</h6>
                                    <input type="password" name="password" id="password" placeholder='enter password' size={27} onChange={(event) => setPassword(event.target.value)}  />
                                    <h6 className='login__forget'>forgot password</h6>
                                </div>
                            </div>
                            <div className='login__down'>
                                <div className='login__rem'>
                                    <input type="checkbox" name="Remember me" id="" />
                                    <h6>Remember me</h6>
                                </div>
                                <div>
                                        <Button variant='contained' type='submit' className='login__btn' size='small' onClick={login}>Log in</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='login__phones'>
                        <img src={loginImg} alt="" className='images' />
                    </div>
                    <div className='login__headliner'>
                        <div className='headliner text'>
                            <h1><Zoom top cascade>code like the clockworks</Zoom></h1>
                            <p><Zoom right cascade>...set your watch by sasa</Zoom></p>
                        </div>                        
                    </div>
                    <img className='water__logo' src={smallLogo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Login
