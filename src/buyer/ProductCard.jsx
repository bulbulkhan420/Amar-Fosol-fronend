import React from 'react';
import styles from './ProductCard.module.css';
import axios from 'axios';
import url from '../Backendurl'
const ProductCard = ({email,id, imageSrc, productName, price, phoneNumber, minAmount }) => {
  let payment=(e)=>{
   let token=localStorage.getItem(`buyer-${email}`);
   axios.get(`${url}/payment/product/${id}/${email}`,{
    headers:{
      Authorization:token
    }
   })
   .then((res)=>{
    if(res.data.ok){
      window.location.replace(res.data.url);
    }
    
   })
  }
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={imageSrc} alt={productName} className={styles.image} />
      </div>
      <h2 className={styles.productName}>{productName}</h2>
      <div className={styles.details}>
        <p className={styles.price}>Price: ${price}</p>
        <p className={styles.phoneNumber}>Contact: {phoneNumber}</p>
        <p className={styles.minAmount}>Minimum Order: {minAmount}kg</p>
      </div>
      <button onClick={payment} className={styles.payNowButton}>Pay Now</button>
    </div>
  );
};

export default ProductCard;
