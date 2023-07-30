import React from 'react';

const Home = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className='welcome'>
      <h2>Welcome, {user.name}!</h2>
    </div>
  );
};

export default Home;