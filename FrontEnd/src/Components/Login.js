import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
import axios from "axios";
import './Css/Login.css'

export default function Login() 
{
    const nav = useNavigate();
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    const handleForm = async (event) => {
        try
        {
            event.preventDefault();
            const res = await axios.post("http://localhost:3001/login", {
                username: username,
                password : password
            });
    
            if(res.status === 200)
            {
                localStorage.setItem("jwtToken", res.data.token);
                nav('/');
            }
        }
        catch (error)
        {
            setLoginError("Incorrect Credentials");
        }
    }

    const handleUsername = (event) => {
        console.log(event);
        setUserName(event.target.value);
        setLoginError("");
    }
    
    const handlePassword = (event) => {
        console.log(event);
        setPassword(event.target.value);
        setLoginError("");
    } 

    const Register_page = () =>
    {
        nav('/register');
    }


    return (
        <div className="login-container">
            <h1>Login</h1>
            <h3 className="error-message">{loginError}</h3>
            <form onSubmit={handleForm}>
                <label>Username :</label>
                <input type = 'text' value = {username} onChange={handleUsername}></input><br></br>
                <label>Password :</label>
                <input type = 'password' value = {password} onChange={handlePassword}></input><br></br>
                <button className="submit-button">Submit</button>
            </form>
            <h3>No account? No worry!!&nbsp;<a className="register-button" onClick={Register_page}>Register</a></h3>
        </div>
    );
}