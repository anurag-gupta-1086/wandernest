import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-grid">
        <div className="footer-section">
          <h3>WanderNest</h3>
          <p>Discover amazing experiences and create unforgettable memories around the world.</p>
        </div>
        
        <div className="footer-section">
          <h4>Company</h4>
          <div className="footer-links">
            <Link to="/about">About Us</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/press">Press</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Support</h4>
          <div className="footer-links">
            <Link to="/help">Help Center</Link>
            <Link to="/safety">Safety</Link>
            <Link to="/cancellation">Cancellation</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="footer-links">
            <a href="https://facebook.com/wandernest" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href="https://instagram.com/wandernest" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="https://twitter.com/wandernest" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
            <a href="https://youtube.com/wandernest" target="_blank" rel="noopener noreferrer">
              YouTube
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; 2025 WanderNest. All rights reserved.</p>
          <div className="footer-legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/cookies">Cookies</Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;