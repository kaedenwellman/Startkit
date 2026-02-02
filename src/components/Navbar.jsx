import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Rocket } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { itemCount } = useCart();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-brand" aria-label="StartKit Home">
          <Rocket size={28} />
          <span className="brand-text">StartKit</span>
        </Link>

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <Link
            to="/"
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/cart"
            className="nav-link cart-link-mobile"
            onClick={() => setMenuOpen(false)}
          >
            Cart ({itemCount})
          </Link>
        </div>

        <div className="navbar-actions">
          <Link to="/cart" className="cart-btn" aria-label={`Shopping cart with ${itemCount} items`}>
            <ShoppingCart size={22} />
            {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
          </Link>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {menuOpen && <div className="navbar-overlay" onClick={() => setMenuOpen(false)} />}
    </nav>
  );
}
