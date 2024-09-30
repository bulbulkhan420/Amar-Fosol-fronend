import React from 'react';

const Seller_Profile = (props) => {
  console.log(props.info);
  return (
    <div style={{ 
      maxWidth: '600px', 
      margin: '50px auto', 
      padding: '20px', 
      backgroundColor: '#f9f9f9', 
      borderRadius: '10px', 
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
    }}>
      <h2 style={{ 
        textAlign: 'center', 
        color: '#333', 
        marginBottom: '20px', 
        borderBottom: '2px solid #4CAF50', 
        paddingBottom: '10px' 
      }}>Seller Profile</h2>
      
      <div style={{ marginBottom: '15px' }}>
        <h3 style={{ marginBottom: '5px', color: '#555' }}>Name:</h3>
        <p style={{ fontSize: '18px', color: '#333' }}>{props.info.fullname}</p>
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <h3 style={{ marginBottom: '5px', color: '#555' }}>Email:</h3>
        <p style={{ fontSize: '18px', color: '#333' }}>{props.info.email}</p>
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <h3 style={{ marginBottom: '5px', color: '#555' }}>Phone number:</h3>
        <p style={{ fontSize: '18px', color: '#333' }}>{props.info.phone}</p>
      </div>
      
     
    </div>
  );
};

export default Seller_Profile;
