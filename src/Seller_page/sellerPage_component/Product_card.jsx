import axios from 'axios';
import React,{useState} from 'react'
import url from '../../Backendurl'

const ProductCard = ({formData}) => {
  
  let productName=formData.pname;
  let productImage=formData.pimage;
  let productPrice=formData.pprice;
  let productQuantity=formData.pquantity;

  // const productName= "alu"
  // const  productImage='';
  //  const  productPrice= 30;
  //  const  productQuantity=30;
  //  const productDescription='it is very dilicious vegetable';
  // Styling for the card
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    width: '350px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    margin: '20px auto',
  };
 
  const imgStyle = {
    width: '95%',
    height: '350px',
    objectFit: 'cover',
    borderRadius: '5px',
    marginBottom: '15px',
  };

  const productInfoStyle = {
    marginBottom: '10px',
    fontSize: '16px',
    color: '#333',
  };

  const priceStyle = {
    fontWeight: 'bold',
    fontSize: '18px',
    margin: '10px 0',
    color: '#1e8449',
  };

  const buttonStyle = {
    padding: '10px',
    backgroundColor: 'green',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  return (
    <div style={cardStyle}>
      {productImage && <img src={productImage} alt={productName} style={imgStyle} />}
      <h3 style={{color:'green'}}>Name: {productName}</h3>
      {/* <p style={productInfoStyle}>{productDescription}</p> */}
      <p style={productInfoStyle}><b>Quantity: {productQuantity} KG</b></p>
      <p style={priceStyle}>Price: {productPrice} Taka</p>
      <div style={{display:'flex', justifyContent:'space-between'}}>
      
     
      </div>
    </div>
  );
};

export default ProductCard;

