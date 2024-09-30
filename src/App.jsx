import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import OtpVerification from "./components/OtpVerification";
import ResetPassword from "./components/ResetPassword"; // Import new component
import Home from "./Homepage/Home";
import Register from "./Components/Register";
import BuyerProfile from './buyer/BuyerProfile'
import SearchProduct from './buyer/SearchProduct'
import Seller_home from './Seller_page/Seller_home_Page/Seller_home'
import Product_list from "./Seller_page/Seller_home_Page/Product_list";
import Product_form from "./Seller_page/sellerPage_component/Product_form";
function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path={`/login/:name`} element={<Login />} />
        <Route path={`/forgot-password/:name`} element={<ForgotPassword />} />
        <Route path={`/otp-verification/:name/:email/:task`} element={<OtpVerification />} />
        <Route path={`/reset-password/:name/:email`} element={<ResetPassword />} />  
        <Route path={`/register/:name`} element={<Register/>}></Route>
        <Route path={`/buyer/profile/:email`} element={<BuyerProfile/>}></Route>
        <Route path={`/buyer/search/:email`} element={<SearchProduct/>}></Route>
        <Route path={`/seller/profile/:email`} element={<Seller_home/>}></Route>
        <Route path={`/seller/product/list/:email`} element={<Product_list/>}></Route>
        <Route path={`/seller/add/product/:email`} element={<Product_form/>}></Route>
      </Routes>
    </Router>
   
    
  );
}

export default App;
