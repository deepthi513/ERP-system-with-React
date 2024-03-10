import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './Product.css';

const Productlist = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts();
    }, [])
    const getProducts = async () => {
        let result = await fetch("http://localhost:3400/product-list");
        let data = await result.json();
        setProducts(data)
    }
    console.warn("products", products)

    const deleteProduct = async (id) => {
        try {
            let result = await fetch(`http://localhost:3400/product/${id}`, {
                method: 'DELETE'
            });
            let data = await result.json();
            if (data) {
                getProducts();
            }
        } catch (error) {
            console.error('Error deleting product:', error);
        }

    };
    const serchhendle = async (event) => {
        let key = event.target.value;
        if (key) {
            let result = await fetch(`http://localhost:3400/search/${key}`);
            let data = await result.json()
            if (data) {
                setProducts(data)
            }
        } else {
            getProducts()
        }

    }
    return (
        <div className="productlist">
            <h3>Product List</h3>
            <input type="text" placeholder="search product" onChange={serchhendle} className="search" />

            <ul className="ul-nav">
                <li className="Li">S.NO</li>
                <li className="Li">Name</li>
                <li className="Li">Price</li>
                <li className="Li">category</li>
                <li className="Li">company</li>
                <li className="Li">operation</li>
            </ul>
            {
                Array.isArray(products) && products.length > 0 ? products.map((item, index) => <ul className="ul-nav" key={item._id}>
                    <li className="Li">{index + 1}</li>
                    <li className="Li">{item.name}</li>
                    <li className="Li">{item.price}</li>
                    <li className="Li">{item.category}</li>
                    <li className="Li">{item.company}</li>
                    <li className="Li">
                        <button onClick={() => deleteProduct(item._id)}>Delete</button>
                        <button ><Link to={"/Updatepro/" + item._id} className="Link">Update</Link></button>
                    </li>
                </ul>) : <h1>No Result Found</h1>
            }
        </div>
    )
}
export default Productlist;