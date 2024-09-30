import { useState } from 'react';
//import './Registration.css'; // Import your CSS file\
import axios from 'axios';
import styles from './Registration.module.css'
import { useNavigate, useParams } from 'react-router-dom';
import url from '../Backendurl'
const Register = () => {
 let {name}=useParams();
 let navigate=useNavigate();
  const regi_info={
           fullname:'',
            email:'',
            phone:'',
            password:''        
        }
  const [registration,setRegistration]=useState(regi_info);
  const {password}=registration;
  const [error, setError] = useState("");
  const [confirmedPassword,setConfirmedPassword]=useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(registration);
    
    axios.post(`${url}/register/${name}`,registration)
    .then((res)=>{
        if(res.data.ok){
            console.log(res.data);
            alert("Successfully")
            navigate(`/otp-verification/${name}/${registration.email}/${'register'}`);
        }
        else{
            alert('there is some error');
        }
    })
  };


  const handleChange=(e)=>{
    setRegistration(registration=>({...registration,[e.target.name]:e.target.value}));
  }
  //I used it match password and confirmed password
  const matchPassword =(e)=>{
    setConfirmedPassword(e.target.value);
    if(password != e.target.value){
        setError("Passwords do not match!");
    }
    else{
        setError("");
    }
  }
  return (
    <div className={styles.login_container}>
      <h2>Registration form</h2>

      <form id="registration_form" onSubmit={handleSubmit}>

        <div className={styles.regi_form}>
          <label htmlFor="name" className={styles.labe}>Full Name</label>
          <input className={styles.inpu} style={{fontWeight: 600,textAlign: 'center'}} type="text" id="name" name="fullname"  onChange={handleChange} required />
        </div>


       

        <div className={styles.regi_form}>
          <label className={styles.labe} htmlFor="email">Email</label>
          <input className={styles.inpu} style={{fontWeight: 600,textAlign: 'center'}} type="email" id="email" name="email"  onChange={handleChange} required />
        </div>

        <div className={styles.regi_form}>
          <label className={styles.labe} htmlFor="Phone_num">Phone number</label>
          <input className={styles.inpu} style={{fontWeight: 600,textAlign: 'center'}} type="text" id="Phone_num" name="phone" onChange={handleChange} required />
        </div>

        <div className={styles.regi_form}>
          <label className={styles.labe}  htmlFor="password">Password</label>
          <input className={styles.inpu} minLength={6} style={{fontWeight: 600,textAlign: 'center'}} type="password" id="password" name="password" value={password} onChange={handleChange} required />
        </div>
        
        <div className={styles.regi_form}>
          <label className={styles.labe}  htmlFor="password">Confirme Password</label>
          <input className={styles.inpu} style={{fontWeight: 600,textAlign: 'center'}} type="password" id="password" name="cpassword" value={confirmedPassword} onChange={matchPassword} required />
        </div>
    
        {error && <p style={{ color: "red" }}>{error}</p>}
       

        <button className={styles.butto}  type="submit" style={{width:"100%"}}>Register</button>
       
      </form>
    </div>
  );
};

export default Register;