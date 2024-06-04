// components/Home.js
import React from 'react';

const Home = () => {
  const handleLogin = () => {
    const clientId = 'Ov23lirQwogH1gedrKCh';
    const redirectUri = 'http://localhost:3000/callback';
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user repo`;
  };

  return (
    <div>
      <h1>GitHub Integration</h1>
      <button onClick={handleLogin}>Login with GitHub</button>
    </div>
  );
};

export default Home;
