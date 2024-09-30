
import { useState } from 'react';
import ProductCard from './Product_card';
import Seller_Footer from '../Seller_home_Page/Seller_Footer';
import Seller_Header from '../Seller_home_Page/Seller_Header';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import url from '../../Backendurl'
const Product_form = () => {
  let {email}=useParams();
  
 
  const [submitted, setSubmitted] = useState(false); // Track form submission
  let formdatasend=new FormData();
  let [data,sdata]=useState({
    pimage:'',
    pname:'',
    pprice:'',
    pquantity:''
  })
  const handleChange = (e) => {
    sdata(data=>({...data,[e.target.name]:e.target.value}))
  };

  
 
 let setimg=(e)=>{
    formdatasend.append('pimage',e.target.files[0]);
    sdata(data=>({...data,['pimage']:e.target.files[0]}));
 }
  const handleSubmit = (e) => {
    e.preventDefault();
    formdatasend.append('pimage',data.pimage);
    formdatasend.append('pname',data.pname);
    formdatasend.append('pprice',data.pprice);
    formdatasend.append('pquantity',data.pquantity);
    axios.post(`${url}/add/product/list/${email}`,formdatasend)
    .then((res)=>{
      if(res.data.ok){
        alert("Successfully Added");
      }
      else
      alert('something error');
    })
    setSubmitted(true); // Set the form as submitted
    // You can handle form submission here, such as sending data to a server
  };

  return (
    <>
    <Seller_Header email={email}/>
    <div style={mainContainer}>
        <div style={{display:'flex',justifyContent: 'center',
            alignItems: 'center',margin:'5px'}}>
            <h3>Product form</h3>
        </div>
    <form onSubmit={handleSubmit} style={formStyle}>
      <div style={inputContainerStyle}>
        <label style={labelStyle}>Full Name of Product:</label>
        <select name="pname" // Add the name attribute
       
        onChange={handleChange}
        required>
            <option value="">Select Product</option>
            <option value="Rice">Rice</option>
            <option value="Potato">Potato</option>
            <option value="Wheat">Wheat</option>
            <option value="Sugarcane">Sugarcane</option>
            <option value="Tomato">Tomato</option>
            <option value="Vegetables">Other Vegetables</option>

        </select>
        {/* <input
          type="text"
          name="productName"
          value={formData.productName}
          onChange={handleChange}
          style={inputStyle}
          placeholder="Enter product name"
          required
        /> */}
      </div>

      <div style={inputContainerStyle}>
        <label style={labelStyle}>Product Image:</label>
        <input
          type="file"
          
          accept="image/*"
          onChange={setimg}
          style={inputStyle}
          required
        />
        
      </div>
      {/* <div style={inputContainerStyle}>
        <label style={labelStyle}>Product Description</label>
        <textarea
          type="paragraph"
          name="productDescription"
          value={formData.productDescription}
          onChange={handleChange}
          style={textAreaStyle}
          placeholder="Enter description about the product"
          required
        />
      </div> */}

      <div style={inputContainerStyle}>
        <label style={labelStyle}>Product Price(taka) Per KG:</label>
        <input
          type="number"
          name="pprice"
          
          onChange={handleChange}
          style={inputStyle}
          placeholder="Enter product price"
          required
        />
      </div>

      <div style={inputContainerStyle}>
        <label style={labelStyle}>Product Qunatity(KG)</label>
        <input
          type="number"
          name="pquantity"
          
          onChange={handleChange}
          style={inputStyle}
          placeholder="Enter quantity of product"
          required
        />
      </div>
      
      <button type="submit" style={buttonStyle}>
        Submit
      </button>
    </form>
    {/* Show ProductCard after the form is submitted */}
 
    </div>
    <Seller_Footer/>
    </>
  );
};
const mainContainer= {
    height: '100%',
    margin:'5%',
    display: 'block',
    justifyContent: 'center',
    alignItems: 'center',
  }
// Inline styles
const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '500px',
  margin: '0 auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '10px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  
};

const inputContainerStyle = {
  marginBottom: '15px',
};

const labelStyle = {
  fontWeight: 'bold',
  marginBottom: '5px',
  display: 'block',
};

const inputStyle = {
  padding: '10px',
  width: '100%',
  border: '1px solid #ccc',
  borderRadius: '5px',
};

const textAreaStyle = {
   width:'100%',
   scrollY:'true',
   height:'7rem' 
}
const buttonStyle = {
  padding: '10px',
  backgroundColor: 'green',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',
};

export default Product_form;

