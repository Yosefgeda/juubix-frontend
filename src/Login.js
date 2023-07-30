import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
  
    const handleLogin = (event) => {
      event.preventDefault();
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser && email === storedUser.email && password === storedUser.password) {
        window.location = '/home';
      } else {
        setLoginError('Invalid credentials');
      }
    };

  return (
    <div className='login-container'>
       
            <div className='word-waves'>
                <span>JUUBIX LTD</span>
                <span>JUUBIX LTD</span>
            </div>
            <div className='login-inner'>
                <div className='login-head'>
                    <h2>Login</h2>
                </div>
                    
                <form onSubmit={handleLogin} className='login-form'>
                    {loginError && <h3 style={{ color: 'red' }}>{loginError}</h3>}
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className='login-input' />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className='login-input' />
                    <button type='submit'>Login</button>
                </form>
                <p className='no-account'>Dont have an account {<Link to="/register">Register</Link>}</p>
            </div>
            
        
    </div>
  );
};

export default Login;