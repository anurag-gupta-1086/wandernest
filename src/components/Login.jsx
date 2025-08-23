import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { Eye, EyeOff, LogIn, Loader } from 'lucide-react';
import '../css/Login.css';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    console.log("credentials : ", credentials);

    const result = await login(credentials);

    if (result.success) {
      navigate('/');
    } else {
      setError(result.message);
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h2 className="login-title">Sign in to your account</h2>
          <p className="login-subtext">
            Or <Link to="/register">create a new account</Link>
          </p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          {error && <div className="form-error">{error}</div>}

          <div className="form-group">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              required
              className="form-input"
              placeholder="Enter your username"
              value={credentials.username}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <div className="password-wrapper">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                required
                className="form-input"
                placeholder="Enter your password"
                value={credentials.password}
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
          </div>

          <button type="submit" disabled={loading} className="login-button">
            {loading ? <Loader className="animate-spin" /> : <LogIn />}
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
