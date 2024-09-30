import React, { useState } from "react";
import styles from './OtpVerification.module.css'; // Importing the CSS module for OTP styling
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import url from '../Backendurl'
const OtpVerification = () => {
  let {name,email,task}=useParams();
  let [otp,sotp]=useState('');
  let navigate=useNavigate();
  let setval=(e)=>{
    e.preventDefault();
    sotp(e.target.value);
  }
  let submit=(e)=>{
    e.preventDefault();
    axios.post(`${url}/verify/otp`,{
      name,
      email,
      code:otp
    })
    .then((res)=>{
      if(res.data.ok){
        if(task=="register")
        navigate(`/login/${name}`);
      else
        navigate(`/reset-password/${name}/${email}`);
      }
      else{
        alert("Otp does not match");
      }
    })
  }
  return (
    <div className={styles.otpContainer}>
      <div className={styles.formContainer}>
        <h2 className={styles.heading}>OTP Verification</h2>
        
        <form className={styles.form} onSubmit={submit}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Enter OTP</label>
            <input type="text" className={styles.input} value={otp} onChange={setval} required />
          </div>

          <button type="submit" className={styles.sendButton}>Verify OTP</button>
        </form>
      </div>
    </div>
  );
};

export default OtpVerification;
