import React, { useEffect, useState } from "react";
import './App.css';
import {useParams, useNavigate} from "react-router-dom";

const Updatepro=()=>{
const [name, setName]= useState("");
const [price, setPrice]= useState("");
const [category, setCategory]= useState("");
const [company, setCompany]= useState("");
const navigate = useNavigate();
const params = useParams();
useEffect(()=>{
    console.warn(params)
    getProductDetails();
},[])
const getProductDetails = async () =>{
  try { console.warn(params)
    let result = await fetch (`http://localhost:3400/product/${params.id}`);
let data = await result.json();
setName(data.name);
setPrice(data.price);
setCategory(data.category);
setCompany(data.company);

  } catch (error){ 
        console.error('Error deleting product:', error);
    
  }
}
const Updateitem= async()=>{
    console.warn(name,price,category,company)
    let result = await fetch(`http://localhost:3400/product/${params.id}`,{
        method:'put',
        body: JSON.stringify({name,price,category,company}),
        headers:{
            'Content-Type':"application/json"
        },

    });
    let data = await result.json()
    console.warn(data)
    navigate('/')
}
    return(
        <div className="register">
            
            <input type="text" value={name} onChange={(e)=> setName(e.target.value)} placeholder="Name Of item" className="inputbox"/>
           
            <input type="text" value={price} onChange={(e)=> setPrice(e.target.value)} placeholder="enter price" className="inputbox" />
            
            <input type="text" value={category} onChange={(e)=> setCategory(e.target.value)} placeholder="category" className="inputbox"/>
           
            <input type="text" value={company} onChange={(e)=> setCompany(e.target.value)} placeholder="enter company name" className="inputbox"/>
           
            <button className="appbutton" onClick={Updateitem} type="submit">Update Product</button>
        </div>
    )
}
export default Updatepro;