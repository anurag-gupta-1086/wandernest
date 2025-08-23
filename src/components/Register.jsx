import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { Eye, EyeOff, UserPlus, Loader } from 'lucide-react';
import '../css/Register.css'; // Import the new CSS file

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phoneNumber: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    console.log("formdata : ", formData);
    /*

    email
: 
"anuraggupta3468@gmail.com"
firstName
: 
"Anurag"
lastName
: 
"Gupta"
password
: 
"123456"
phoneNumber
: 
"09896426539"
username
: 
"anuraggupta1086"

    */

    const result = await register(formData);

    if (result.success) {
      setSuccess(result.message);
      setTimeout(() => navigate('/login'), 2000);
    } else {
      setError(result.message);
    }

    setLoading(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-header">
          <h2>Create your account</h2>
          <p>
            Or{' '}
            <Link to="/login" className="link">
              sign in to your existing account
            </Link>
          </p>
        </div>

        <form className="register-form" onSubmit={handleSubmit}>
          {error && <div className="alert alert-error">{error}</div>}
          {success && <div className="alert alert-success">{success}</div>}

          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="John"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="username">Username *</label>
            <input
              id="username"
              name="username"
              type="text"
              required
              placeholder="Choose a username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              placeholder="+1234567890"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password *</label>
            <div className="password-wrapper">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                required
                minLength="6"
                placeholder="Choose a strong password"
                value={formData.password}
                onChange={handleChange}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
            <p className="password-hint">Password must be at least 6 characters long</p>
          </div>

          <div>
            <button type="submit" disabled={loading} className="submit-btn">
              {loading ? <Loader className="loading-spinner" /> : <><UserPlus /> Create Account</>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
