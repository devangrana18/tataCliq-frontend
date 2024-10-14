

import React, { useState } from 'react';
import axios from 'axios';
import '../css/signUp.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async () => {
    try {
      setError(''); 
  
      const reqData = {
        email,
        password,
      };
  
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/signup`, reqData);
  
      if (response.status === 201) {  
        alert(response.data.message); 
        window.location.href = '/login'; 
         
      }
    } 
    catch (err) {
      setError('Failed to sign up. Try again.');
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        
        <h2>Welcome to Tata CLiQ</h2>
        <p>Please enter your email address and password</p>

        <div className="input-container">
          <label>Email Address</label>
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

        <button className="submit-btn" onClick={handleSignUp}>Sign Up</button>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
};

export default SignUp;
