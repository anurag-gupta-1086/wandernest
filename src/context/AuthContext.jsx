import React, { createContext, useContext, useState, useEffect } from 'react';
import { authAPI } from '../services/api';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (token && userData) {
      setUser(JSON.parse(userData));
    }
    setLoading(false);
  }, []);

  const login = async (credentials) => {
    try {
      const response = await authAPI.login(credentials);
      const { accessToken, ...userData } = response.data;
      console.log("access token : ", accessToken)
      
      localStorage.setItem('token', accessToken);
      localStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
      
      return { success: true };
    } catch (error) {
      console.log("main error : ", error);
      return { 
        success: false, 
        message: error.response?.data?.message || 'Registration failed' 
      };
    }
  };

  const register = async (userData) => {
  try {
    const response = await authAPI.register(userData);
    const { accessToken, ...registeredUser } = response.data;

    // Store token and user info in localStorage
    // localStorage.setItem('token', accessToken);
    // localStorage.setItem('user', JSON.stringify(registeredUser));
    // setUser(registeredUser); // assuming you have setUser from context/state

    return { success: true };
  } catch (error) {
    console.log("Signup error:", error);
    return {
      success: false,
      message: error.response?.data?.message || 'Registration failed',
    };
  }
};

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  const value = {
    user,
    login,
    register,
    logout,
    loading,
    isAuthenticated: !!user,
    isAdmin: user?.roles?.includes('ROLE_ADMIN'),
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};