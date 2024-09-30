import React, { useEffect, useState } from "react";
import HeaderPage from "./HeaderPage";
import styles from "./SearchProduct.module.css";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";
import axios from "axios";
import url from '../Backendurl'
const SearchProduct = () => {
  let {email}=useParams();
  const [products, setProducts] = useState([{}]);
  
  let [productName,setProductName]=useState('');
  let [minPrice,setMinPrice]=useState('');
  let [maxPrice,setMaxPrice]=useState('');
  let [productAmount,setProductAmount]=useState('');
  const handleSearch = (e) => {
    e.preventDefault();
    axios.post(`${url}/product/search`,{
      pname:productName,
      minquantity:productAmount,
      minprice:minPrice,
      maxprice:maxPrice
      
    })
    .then((res)=>{
      if(res.data.ok){
        console.log(res.data.list)
        setProducts(res.data.list);
        if(products)
          console.log(products)
      }
      else
      alert("Not found anything");
    })
  };
 useEffect(()=>{
    axios.get(`${url}/all/product`)
    .then((res)=>{
      if(res.data.ok){
        setProducts(res.data.list);
      }
      else
      alert('Some thing error');
    })
 },[]);
  return (
    <>
      <HeaderPage email={email}/>
      <div className={styles.searchContainer}>
        <form className={styles.searchForm} onSubmit={handleSearch}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Product Name:</label>
            <select
              className={styles.select}
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            >
              <option value="">Select Product</option>
              <option value="Rice">Rice</option>
              <option value="Potato">Potato</option>
              <option value="Wheat">Wheat</option>
              <option value="Sugarcane">Sugarcane</option>
              <option value="Tomato">Tomato</option>
              <option value="Vegetables">Other Vegetables</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Minimum Price:</label>
            <input
              type="number"
              className={styles.input}
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              placeholder="Enter minimum price"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Maximum Price:</label>
            <input
              type="number"
              className={styles.input}
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              placeholder="Enter maximum price"
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Amount (kg):</label>
            <input
              type="number"
              className={styles.input}
              value={productAmount}
              onChange={(e) => setProductAmount(e.target.value)}
              placeholder="Enter minimum product amount in kg"
            />
          </div>

          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.searchButton}>
              Search
            </button>
          </div>
        </form>
      </div>

      {/* Responsive product cards container */}
      <div className={styles.cardContainer}>
      {products.length>0 && products.map((product,i)=>{
          return <div key={i}>
          <ProductCard 
          email={email}
          id={product._id}
          imageSrc={product.pimage}
          productName={product.pname}
          price={product.pprice}
          phoneNumber={product.pnumber}
          minAmount={product.pquantity}
        />
          </div>
        })}
        
      </div>
    </>
  );
};

export default SearchProduct;
