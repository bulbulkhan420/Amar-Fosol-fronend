import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styles from './Login.module.css'; // Importing CSS module for styles
import axios from "axios";
import url from '../Backendurl'
const Login = () => {
  let {name}=useParams();
  let [data,sdata]=useState({
    email:'',
    password:''
  });
  let navigate=useNavigate();
 let setval=(e)=>{
  e.preventDefault();
  sdata((data)=>({...data,[e.target.name]:e.target.value}));
 }
 let submit=(e)=>{
  e.preventDefault();
  console.log(data);
  axios.post(`${url}/login/${name}`,data)
  .then((res)=>{
    if(res.data.ok){
      console.log(res.data);
      if(name=="buyer"){
        localStorage.setItem(`buyer-${data.email}`,res.data.token);
        navigate(`/buyer/profile/${data.email}`);
      }
      else{
        localStorage.setItem(`seller-${data.email}`,res.data.token);
        navigate(`/seller/profile/${data.email}`);
      }
     
    }
    else{
      alert('Email or password does not match');
    }
  })
 }
  return (
    <div className={styles.loginContainer}>
      <div className={styles.formContainer}>
        <h2 className={styles.heading}>Amar Foshol-Login</h2>
        
        <form className={styles.form} onSubmit={submit}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Email</label>
            <input name="email" onChange={setval} type="email" className={styles.input} required />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Password</label>
            <input name="password" onChange={setval} type="password" className={styles.input} required />
          </div>

          
          <div className={styles.formGroup}>
          <button type="submit" className={styles.loginButton}>Login</button>
          </div>

          <div className={styles.footer}>
            <Link to={`/forgot-password/${name}`} className={styles.link}>Forgot Password?</Link>
            <Link to={`/register/${name}`} className={styles.link}>Create New Account</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
