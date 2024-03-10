// 
import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('user'); // Use removeItem instead of clear
        navigate('/');
    }

    // Check if 'auth' is truthy and parse it
    const user = auth ? JSON.parse(auth) : null;

    return (
        <div>
            {auth ? (
                <ul className="nav-ul">
                    <li><Link to="/">Product</Link></li>
                    <li><Link to="/add">Add Product</Link></li>
                    <li><Link to="/Updatepro">Update Product</Link></li>
                    <li><Link to="/Profile">Profile</Link></li>
                    
                    {user && user.username && (
                        <li><Link onClick={logout} to="/signup">Logout ({user.username})</Link></li>
                    )}
                </ul>
            ) : (
                <ul className="nav-ul nav-right">
                    <li><Link to="/signup">SignUp</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            )}
        </div>
    )
}

export default Nav;
