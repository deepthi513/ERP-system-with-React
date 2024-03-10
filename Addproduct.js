import React, { useState } from "react";
import './App.css';
import { useNavigate } from 'react-router-dom';

const Addproduct=()=>{
const [name, setName]= useState("");
const [price, setPrice]= useState("");
const [category, setCategory]= useState("");
const [company, setCompany]= useState("");
const [error , setError] = useState(false);
const navigate = useNavigate();
const Additem= async()=>{

    console.warn(name);
    if(!name || !price || !category || !company)
    {
        setError(true)
        return false;
    }
    console.warn(name,price,category,company);
    const userId = JSON.parse( localStorage.getItem('user'));
    console.warn(userId._id);
    const result=await fetch("http://localhost:3400/add-product",{
        method:'post',
        body:JSON.stringify({name,price,category,company,userId}) ,
        headers: {
            'Content-Type': 'application/json'
        }
    })
   let data = await result.json()
    console.warn(data)
    if (data.name,price,category,company) {
        
        navigate("/")
    } else {
        alert("pleses enter corect details")
    }
}
    return(
        <div className="register">
            
            <input type="text" value={name} onChange={(e)=> setName(e.target.value)} placeholder="Name Of item" className="inputbox"/>
            {error &&  !name && <spam>Enter Valid name</spam>}
            <input type="text" value={price} onChange={(e)=> setPrice(e.target.value)} placeholder="enter price" className="inputbox" />
            {error &&  !price && <spam>Enter Valid price</spam>}
            <input type="text" value={category} onChange={(e)=> setCategory(e.target.value)} placeholder="category" className="inputbox"/>
            {error &&  !category && <spam>Enter Valid category</spam>}
            <input type="text" value={company} onChange={(e)=> setCompany(e.target.value)} placeholder="enter company name" className="inputbox"/>
            {error &&  !company && <spam>Enter Valid category </spam>}
            <button className="appbutton" onClick={Additem} type="submit">Add Product</button>
        </div>
    )
}
export default Addproduct;