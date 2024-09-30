import React, { useState } from 'react';
import styles from './ResetPassword.module.css'; // Importing the CSS module for reset password styling
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import url from '../Backendurl'
const ResetPassword = () => {
  let {name,email}=useParams();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      axios.post(`${url}/newpassword`,{
        name,
        email,
        password:newPassword
      })
      .then((res)=>{
        if(res.data.ok){
          alert("Updated");
          navigate(`/login/${name}`);
        }
        else{
          alert("Some thing error");
        }
      })
      
    } 
    else{
      alert('password does not match');
    }
  };

  return (
    <div className={styles.resetContainer}>
      <div className={styles.formContainer}>
        <h2 className={styles.heading}>Reset Password</h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label}>New Password</label>
            <input
              type="password"
              className={styles.input}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Confirm New Password</label>
            <input
              type="password"
              className={styles.input}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
