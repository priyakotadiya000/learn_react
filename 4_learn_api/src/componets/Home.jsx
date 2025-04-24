import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null); 
  const [error, setError] = useState(null); 

  useEffect(() => {



    const fetchUser = async () => {
      const token = localStorage.getItem('token'); 
      
      try {
        const res = await fetch('https://realtybudget.eitaa.in/v1/auth/api/me/', {
            headers: {
              'accept': 'application/json',
              "CAuthorization": `Bearer ${token}`,
            }
          });

        if (!res.ok) throw new Error('Failed to fetch user data');

        const data = await res.json();
        setUserData(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      }
    };

    fetchUser();

  }, []);

  const handleLogut = async () => {
    localStorage.clear();
    navigate("/");

  };


  return (
    <div style={{ padding: '20px' }}>

      <button onClick={() => navigate('/about')}>About</button>&nbsp;
      <button onClick={handleLogut}>Logout</button>

      <hr />
      <h2>Welcome Home page</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {userData ? (
        <pre>{JSON.stringify(userData, null, 2)}</pre> 
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default Home;




