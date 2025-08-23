import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';

const Footer = () => (
  <footer className="footer">
    <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
        <div>
          <h3>WanderNest</h3>
          <p>Discover amazing experiences and create unforgettable memories around the world.</p>
          <div style={{ marginTop: '1rem' }}>
            <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
              © 2025 WanderNest. All rights reserved.
            </p>
          </div>
        </div>
        
        <div>
          <h4>Company</h4>
          <div className="footer-links">
            <Link to="/about">About Us</Link><br />
            <Link to="/careers">Careers</Link><br />
            <Link to="/press">Press</Link><br />
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        
        <div>
          <h4>Support</h4>
          <div className="footer-links">
            <Link to="/help">Help Center</Link><br />
            <Link to="/safety">Safety</Link><br />
            <Link to="/cancellation">Cancellation</Link><br />
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
        
        <div>
          <h4>Follow Us</h4>
          <div className="footer-links">
            <a href="https://facebook.com/wandernest" target="_blank" rel="noopener noreferrer">Facebook</a><br />
            <a href="https://instagram.com/wandernest" target="_blank" rel="noopener noreferrer">Instagram</a><br />
            <a href="https://twitter.com/wandernest" target="_blank" rel="noopener noreferrer">Twitter</a><br />
            <a href="https://youtube.com/wandernest" target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          gap: '1rem' 
        }}>
          <p>&copy; 2025 WanderNest. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1rem', fontSize: '0.875rem' }}>
            <Link to="/privacy" style={{ color: '#6b7280', textDecoration: 'none' }}>
              Privacy Policy
            </Link>
            <Link to="/terms" style={{ color: '#6b7280', textDecoration: 'none' }}>
              Terms
            </Link>
            <Link to="/cookies" style={{ color: '#6b7280', textDecoration: 'none' }}>
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;