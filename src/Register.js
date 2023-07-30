import React, { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (event) => {
    event.preventDefault();
    if (!name.trim() || !email.trim()) {
        alert('Name and email are required.');
        return;
    }
    const newUser = { name, email, password };
    localStorage.setItem('user', JSON.stringify(newUser));
    window.location = '/login';
  };

  return (
    <div className='register-container login-container'>
        <div className='word-waves'>
            <span>JUUBIX LTD</span>
            <span>JUUBIX LTD</span>
        </div>
        <div className='login-inner'>
            <div className='login-head'>
                <h2>Register</h2>
            </div>
            <form onSubmit={handleRegister} className='reister-form login-form'>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className='login-input'/>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className='login-input'/>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className='login-input'/>
                <button type='submit'>Register</button>
            </form>
        </div>
        
      
    </div>
  );
};

export default Register;