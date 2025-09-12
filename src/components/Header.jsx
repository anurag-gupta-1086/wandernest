import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Menu, X } from 'lucide-react';
import '../css/Home.css';

const Header = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo" onClick={closeMobileMenu}>WanderNest</Link>
        
        {/* Desktop Navigation */}
        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <a href="#activities" className="nav-link">Activities</a>
        </nav>
        
        {/* Desktop Auth Links */}
        <div className="nav-links">
          {isAuthenticated ? (
            <>
              <Link to="/bookings" className="nav-link">My Bookings</Link>
              <Link to="/profile" className="nav-link">{user?.user?.name}</Link>
              <button onClick={logout} className="nav-link">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="button-outline">Sign In</Link>
              <Link to="/register" className="button-primary">Sign Up</Link>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-links">
            <Link to="/" className="nav-link" onClick={closeMobileMenu}>Home</Link>
            <a href="#activities" className="nav-link" onClick={closeMobileMenu}>Activities</a>
            
            {isAuthenticated ? (
              <>
                <Link to="/bookings" className="nav-link" onClick={closeMobileMenu}>
                  My Bookings
                </Link>
                <Link to="/profile" className="nav-link" onClick={closeMobileMenu}>
                  {user?.user?.name}
                </Link>
                <button 
                  onClick={() => { logout(); closeMobileMenu(); }} 
                  className="nav-link"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="button-outline" onClick={closeMobileMenu}>
                  Sign In
                </Link>
                <Link to="/register" className="button-primary" onClick={closeMobileMenu}>
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;