
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {validateOtp} from '../Api'

const Otp = () => {
  const [otp, setOtp] = useState('');
  const email = localStorage.getItem("email");
 const navigate = useNavigate();

  const handleOtpSubmit = async () => {
  

    try {
      
        const res = await validateOtp(email, otp);
         const data = await res.json();
      
        if (res.ok && data.access_token) {
           localStorage.setItem("access_token", data.access_token);
          navigate('/home');
      } else {
        alert('Invalid OTP. Try again.');
      }
    } catch (err) {
      console.error(err);
      alert('Network error. Try again.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <label>OTP</label><br /><br />
      <input type="text"
        placeholder="Enter your OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      /><br /><br />
      <button onClick={handleOtpSubmit}>Continue</button>
    </div>
  );
};

export default Otp;
