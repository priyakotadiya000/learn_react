import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Loginemail = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handlesubmit = async () => {
    try {
      const res = await fetch('https://realtybudget.eitaa.in/v1/auth/api/login/email/otp/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
         localStorage.setItem('userEmail', email);
         navigate('/Otp');
      } else {
        alert('Something went wrong. Try again.');
      }
    } catch (err) {
      console.error(err);
      alert('Network error!');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <label>Email</label><br /><br />
      <input
        type="text"
        placeholder="Enter your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br /><br />
      <button onClick={handlesubmit}>Continue</button>
    </div>
  );
};

export default Loginemail;
