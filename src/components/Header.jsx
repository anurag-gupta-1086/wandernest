import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../css/Home.css';

const Header = () => {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">WanderNest</Link>
        
        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <a href="#activities" className="nav-link">Activities</a>
        </nav>
        
        <div className="nav-links">
          {isAuthenticated ? (
            <>
              <Link to="/bookings" className="nav-link">My Bookings</Link>
              <Link to="/profile" className="nav-link">{user?.user?.name}</Link>
              {user?.roles?.includes('ROLE_ADMIN') && (
                <Link to="/admin" className="nav-link">Admin</Link>
              )}
              <button onClick={logout} className="nav-link">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="button-outline">Sign In</Link>
              <Link to="/register" className="button-primary">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
