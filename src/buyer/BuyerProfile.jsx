// src/buyer/BuyerProfile.jsx
import React, { useEffect, useState } from 'react';
import HeaderPage from './HeaderPage';
import styles from './BuyerProfile.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import url from '../Backendurl'
const BuyerProfile = () => {
    // Dummy data for the buyer
    let {email}=useParams();
    let token=localStorage.getItem(`buyer-${email}`);
    let [buyer,sbuyer]=useState({});
    let navigate=useNavigate();
    
    

    // Initial dummy product data with default "not delivered" status
    const initialProducts = [
        { name: "Wheat", quantity: 10, price: 500, status: "not delivered" },
        { name: "Rice", quantity: 5, price: 300, status: "not delivered" },
        { name: "Corn", quantity: 20, price: 1000, status: "not delivered" }
    ];

    // State to manage product list
    const [products, setProducts] = useState([{}]);

    // Calculate the total price
   

    // Function to mark a product as delivered
    
    useEffect(()=>{
        axios.get(`${url}/buyer/info`,{
          headers:{
              Authorization:token
          }
        })
        .then((res)=>{
          if(res.data.ok){
              sbuyer(res.data.info);
          }
          else{
             navigate('/');
          }
        });
        axios.get(`${url}/buyer/product/list`,{
            headers:{
                Authorization:token
            }
        })
        .then((res)=>{
            if(res.data.ok){
                setProducts(res.data.list);
            }
        })
      },[products]);
    return (
        <div className={styles.profilePage}>
            <HeaderPage email={email} />
            <div className={styles.profileContainer}>
                <div className={styles.buyerInfo}>
                    <h2>Buyer Information</h2>
                    <p><strong>Name:</strong> {buyer.fullname}</p>
                    <p><strong>Email:</strong> {buyer.email}</p>
                    <p><strong>Phone Number:</strong> {buyer.phone}</p>
                </div>

                <div className={styles.productTable}>
                    <h2>Listed Products</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Sellar Number</th>
                                <th>Action</th> {/* New column for the action button */}
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => (
                                <tr key={index}>
                                    <td>{product.pname}</td>
                                    <td>{product.pquantity} KG</td>
                                    <td>{product.pprice} TK</td>
                                    <td>{product.pnumber}</td>
                                    <td>
                                        
                                            <button 
                                                onClick={() =>
                                                    axios.post(`${url}/confirm/delevery`,{
                                                        _id:product._id
                                                    })
                                                    .then((res)=>{
                                                        if(res.data.ok){
                                                            alert(`Delevery Confirmed of product id ${id}`);
                                                        }
                                                    })
                                                 } 
                                                className={styles.deliveredButton}
                                            >
                                                Delivered
                                            </button>
                                       
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <h3>Total Price: 1200 BDT</h3>
                </div>
            </div>
        </div>
    );
};

export default BuyerProfile;
