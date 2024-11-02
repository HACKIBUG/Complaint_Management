import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });
      
      alert('Login Successful');
      console.log(response.data.token);
      
      // Redirect to a dashboard or home page after successful login
      navigate('/dashboard');  // Replace '/dashboard' with the desired route
    } catch (error) {
      alert('Login Failed');
    }
  };

  return (
      <div className="container">
      <p className="title">Welcome back</p>
       <form className="form">
  <input type="email" className="input" value={email}
        onChange={(e) => setEmail(e.target.value)}  placeholder="Email" autoComplete="email" />
  <input type="password" className="input" placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" />
  <p className="page-link" >
    <span><Link to="/forgot-password">Forgot Password?</Link></span>
  </p>
  <button onClick={handleLogin} className="form-btn">Log in</button>
<p>
  Don't have an account?<span><Link to="/register">Sign up</Link></span>
</p>
</form>
</div>
  );
};

export default Login;
