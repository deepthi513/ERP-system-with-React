import React, { useState, useEffect } from "react";
import './App.css';
import {useNavigate} from 'react-router-dom';

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState(""); 
    const [bio, setBio] = useState("");
    const navigate = useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth)
        {
            navigate("/Profile")
        }
    })

    const collectData = async () => {
        try {
            const result = await fetch("http://localhost:3400/register", {
                method: 'post',
                body: JSON.stringify({ username, email, password ,bio,address}),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await result.json();
            console.warn(data);
           if (data.username,password,email,bio ,address){
                localStorage.setItem("user", JSON.stringify(data));
                navigate('/Profile')
            }
        } catch (error) {
            alert("pleses enter corect details");
        }
      
    }

    return (
        <div className="register">
            <h1>Register</h1>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your  Username" className="inputbox" />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email" className="inputbox" />
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter your Address" className="inputbox" /> 
            <input type="text" value={bio} onChange={(e) => setBio(e.target.value)} placeholder="Enter your Bio" className="inputbox" /> 
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your Password" className="inputbox" />
            <button onClick={collectData} className="appbutton" type="button">Sign Up</button>
        </div>
    )
}

export default SignUp;
