import React, { useEffect, useState } from 'react'
import Seller_Header from './Seller_Header'
import Seller_Footer from './Seller_Footer'
import Seller_Profile from './Seller_profile'
import Order_product_List from './Order_product_List'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import url from '../../Backendurl'
const Seller_home = () => {
  let {email}=useParams();
  let [profile,sprofile]=useState({});
  let [deliverylist,sdeliverylist]=useState([{}]);
  useEffect(()=>{
    let token=localStorage.getItem(`seller-${email}`);
   axios.get(`${url}/seller/profile`,{
    headers:{
      Authorization:token
    }
   })
   .then((res)=>{
    if(res.data.ok){
      console.log(res)
      sprofile(res.data.info);
      sdeliverylist(res.data.list);
    }
   })
   
  },[]);
  return (
    <div>
      <Seller_Header email={email}/>
      {profile && <Seller_Profile info={profile}/>}
      <Order_product_List del={{deliverylist}}/>
      <Seller_Footer/>
    </div>
  )
}

export default Seller_home;
