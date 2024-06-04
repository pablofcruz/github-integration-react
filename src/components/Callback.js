// components/Callback.js
import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Callback = () => {
    const navigate = useNavigate();

  useEffect(() => {
    const fetchToken = async (code) => {
      const clientId = 'Ov23lirQwogH1gedrKCh';
      const clientSecret = 'fc6f3305db7c31477e7575792e844fbb48d25e70';
      try {
        const response = await axios.post(
          'https://github.com/login/oauth/access_token',
          {
            client_id: clientId,
            client_secret: clientSecret,
            code,
          },
          {
            headers: {
              Accept: 'application/json',
            },
          }
        );
        const accessToken = response.data.access_token;
        localStorage.setItem('github_token', accessToken);
        navigate('/'); // Redirigir a la página principal o donde desees
      } catch (error) {
        console.error('Error al obtener el token de acceso:', error);
      }
    };

    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (code) {
      fetchToken(code);
    }
}, [navigate]);

  return <div>Loading...</div>;
};

export default Callback;
