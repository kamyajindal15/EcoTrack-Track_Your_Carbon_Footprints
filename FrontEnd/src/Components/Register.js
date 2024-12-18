import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './Css/Register.css';

export default function Register() {
    const nav = useNavigate();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmail = (event) => {
        setEmail(event.target.value);
        setError("");
    }

    const handleUsername = (event) => {
        setUsername(event.target.value);
        setError("");
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
        setError("");
    }

    const handleForm = async (event) => {
        event.preventDefault();

        if (!username || !password) {
            setError('Enter your username and password!!');
        } else {
            try {
                const res = await axios.post("http://localhost:3001/register", {
                    email: email,
                    username: username,
                    password: password
                });

                if (res.status === 201) {
                    nav('/login');
                }
            } catch (error) {
                setError("Error registering");
            }
        }
    }

    const Login_page = () => {
        nav('/login');
    }

    return (
        <div className="register-container">
            <h1>Register</h1>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleForm}>
                <label>Email</label>
                <input type="email" value={email} onChange={handleEmail} /><br />
                <label>Username</label>
                <input type="text" value={username} onChange={handleUsername} /><br />
                <label>Password</label>
                <input type="password" value={password} onChange={handlePassword} /><br />
                <button className="submit-button">Submit</button>
            </form>
            <h3>Already have an account?&nbsp;<a className="login_button" onClick={Login_page}>Login</a></h3>
        </div>
    );
}
