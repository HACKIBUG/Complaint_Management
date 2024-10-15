import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import useNavigate and Link
import axios from 'axios';
import './Login.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use navigate for redirection after login

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
    <div>
      <h2>Login</h2>
<form class="form">
  <span class="input-span">
    <label for="email" class="label">Email</label>
    <input type="email" name="email" id="email"  value={email}
        onChange={(e) => setEmail(e.target.value)}  placeholder="Email"
  /></span>
  <span class="input-span">
    <label for="password" class="label" >Password</label>
    <input type="password" name="password" id="password" placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
  /></span>
  <span class="span"><a href="#">Forgot password?</a></span>
  <input class="submit" type="submit" value="Log in" onClick={handleLogin} />
  <span class="span">Don't have an account? <Link to="/register">Sign up</Link></span>
</form>
    </div>
  );
};

export default Login;
