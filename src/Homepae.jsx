import React from 'react'
import { Link } from 'react-router-dom'

export default function Homepage() {
  return (
    <div>
      <Link to={`/login/${'buyer'}`}>Buyer Login</Link>
      <Link to={`/login/${'seller'}`}>Seller Login</Link>
    </div>
  )
}
