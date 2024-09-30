import React, { useEffect, useState } from 'react'
import ProductCard from '../sellerPage_component/Product_card'
import Seller_Header from './Seller_Header';
import Seller_Footer from './Seller_Footer';
import { useParams } from 'react-router-dom';
import url from '../../Backendurl'
import axios from 'axios';
const Product_list = () => {
  let {email}=useParams();
  let [re,sre]=useState(0);
    const formData={
        productName:'Rice',
        productImage: '',
        productPrice: '40',
        productQuantity:'50'
      };
      let del=(val)=>{
        sre(val);
      }
      let [products,setproducts]=useState([{}]);
      useEffect(()=>{
        let token=localStorage.getItem(`seller-${email}`);
       axios.get(`${url}/all/seller/product/list`,{
        headers:{
          Authorization:token
        }
       })
       .then((res)=>{
         if(res.data.ok){
          setproducts(res.data.info);
         }
       })
      },[re]);
  return (
    <>
   <Seller_Header email={email}/>
    <div style={{
        display: 'flex',
        flexWrap: 'wrap',  // This will wrap the cards into a new row when necessary
        justifyContent:'flex-start',// Optional: Adjust space between cards
        padding: '20px',
         // Adjust the max width of the container as needed
        margin: '0 auto',   // Center the container horizontally
      }}>
        {/* backend thake product ar data asbe o card component build hobe o display hobe */}
        {products && products.map((product,i)=>{
          return <div key={i}>
             <ProductCard formData={product}/>
          </div>
        })}
           
    </div>
    <Seller_Footer/>
    </>
  )
}

export default Product_list
