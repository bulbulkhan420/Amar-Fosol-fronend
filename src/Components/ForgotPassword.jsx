// ForgotPassword.jsx
import React, { useState } from 'react';
import styles from './ForgotPassword.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import url from '../Backendurl'
const ForgotPassword = () => {
    let {name}=useParams();
    let [email,semail]=useState("");
    let setval=(e)=>{
        semail(e.target.value);
    }
    let navigate=useNavigate();
    let submit=(e)=>{
        e.preventDefault();
        axios.get(`${url}/forget/password/${name}/${email}`)
        .then((res)=>{
            if(res.data.ok){
                navigate(`/otp-verification/${name}/${email}/${'forget'}`);
            }
            else{
                alert('Not Found the email');
            }
        })
    }
    return (
        <div className={styles.forgotPasswordContainer}>
            <div className={styles.formContainer}>
                <h2 className={styles.heading}>Forgot Password</h2>
                <form className={styles.form} onSubmit={submit}>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="email">Email Address</label>
                        <input className={styles.input} type="email" id="email" value={email} onChange={setval} placeholder="Enter your email" required />
                    </div>
                    <button className={styles.sendButton} type="submit">Send OTP</button>
                </form>
                <div className={styles.backLink}>
                    <a className={styles.link} href="/">Back to Login</a>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
