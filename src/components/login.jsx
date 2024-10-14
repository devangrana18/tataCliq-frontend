

import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const reqData = {
        email,
        password,
      };
  
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/login`, reqData);
  
      if (response.status === 200) {
        const token = response.data.token; 
        localStorage.setItem('token', token); 
        alert('Login successful!');
        window.location.href = '/'; 
        onclose()
      }
    } catch (err) {
      setError('Failed to login. Please try again.');
    }
  };
  return (
    <div className="modal">
      <div className="modal-content">
      <span className="close" onClick={onClose}>&times;</span>
        <h2>Login to Tata CLiQ</h2>
        <div className="input-container">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email Address"
          />
        </div>
        <div className="input-container">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
          />
        </div>
        <button className="submit-btn" onClick={handleLogin}>Login</button>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
