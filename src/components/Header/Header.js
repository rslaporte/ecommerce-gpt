import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Cart from '../Cart/Cart'

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleToggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <header className="header">
      <div className="header-title">My Store</div>
      <nav className="header-nav">
        <Link to="/" className="header-link">Home</Link>
        <Link to="/produtos" className="header-link">Produtos</Link>
        <Link to="/sobre" className="header-link">Sobre</Link>
      </nav>
      <Cart />
    </header>
  );
};

export default Header;