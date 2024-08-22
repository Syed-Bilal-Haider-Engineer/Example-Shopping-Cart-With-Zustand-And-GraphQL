import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <>
          <h1> {isLoggedIn ? 'Cart Management':'Login'}</h1>
        <nav>
          <ul style={{ display: "flex", listStyleType: "none", gap:5 }}>
            <li style={{ marginRight: "10px" }}>
              <Link to="/">Login</Link>
            </li>
            <li style={{ marginRight: "10px" }}>
              <Link to="/products">Products</Link>
            </li>
            <li style={{ marginRight: "10px" }}>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/checkout">Checkout</Link>
            </li>
            <li style={{ marginRight: "10px" }}>
              <Link  to='/allItemDirectory'>Item List</Link>
            </li>
          </ul>
        </nav>
    </>
  )
}

export default Header