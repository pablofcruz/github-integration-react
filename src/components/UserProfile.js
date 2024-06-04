// components/UserProfile.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('github_token');
      if (token) {
        try {
          const userResponse = await axios.get('https://api.github.com/user', {
            headers: {
              Authorization: `token ${token}`,
            },
          });
          setUserData(userResponse.data);

          const reposResponse = await axios.get('https://api.github.com/user/repos', {
            headers: {
              Authorization: `token ${token}`,
            },
          });
          setRepos(reposResponse.data);
        } catch (error) {
          console.error('Error al obtener datos del usuario:', error);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {userData && (
        <div>
          <h1>{userData.login}</h1>
          <img src={userData.avatar_url} alt="Avatar" />
        </div>
      )}
      <h2>Repositories</h2>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
