import React, { useState, useEffect } from "react";
import './App.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const handlelogin = async () => {
        console.warn("email,password", email, password)
        let result = await fetch("http://localhost:3400/login", {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await result.json()
        console.warn(data);
        if (data.email) {
            localStorage.setItem("user", JSON.stringify(data));
            navigate("/Profile")
            
        } else {
            alert("pleses enter corect details")
        }
    }
    return (<div className="logindiv">
        <input className="login" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="enter your email" />
        <input className="login" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your Password" />
        <button onClick={handlelogin} className="appbutton" type="submit">Login</button>
    </div>)
}
export default Login;