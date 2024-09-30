// import React from 'react'

// const Order_product_List = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Order_product_List
import React, { useState } from 'react';

const Order_product_List = (props) => {
  
  let [deliverylist,sdeliverylist]=useState(props.del.deliverylist);

  return (
    <div style={{ maxWidth: '90%', margin: '50px auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
        Ordered Product List
      </h2>
      
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        border: '1px solid #ddd',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      }}>
        <thead>
          <tr style={{ backgroundColor: '#4CAF50', color: 'white' }}>
            <th colSpan="3" style={{ padding: '10px', borderRight: '1px solid #ddd' }}>
              Ordered Product Info
            </th>
            <th colSpan="3" style={{ padding: '10px' }}>Buyer Info</th>
          </tr>
          <tr style={{ backgroundColor: '#f4f4f4' }}>
            <th style={{ padding: '10px', borderRight: '1px solid #ddd' }}>Product Name</th>
            <th style={{ padding: '10px', borderRight: '1px solid #ddd' }}>Quantity</th>
            <th style={{ padding: '10px', borderRight: '1px solid #ddd' }}>Price</th>
            
            <th style={{ padding: '10px', borderRight: '1px solid #ddd' }}>Phone</th>
           
          </tr>
        </thead>
        <tbody>
          {props.del.deliverylist && props.del.deliverylist.map((order, index) => (
            <tr key={index} style={{ textAlign: 'center' }}>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{order.pname}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{order.pquantity}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{order.pprice}</td>
              
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{order.pnumber}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Order_product_List;
