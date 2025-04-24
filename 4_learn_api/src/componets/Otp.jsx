
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Otp = () => {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleOtpSubmit = async () => {
    const email = localStorage.getItem('userEmail'); // 📦 fetch email from storage

    try {
      // ✅ Replace this with your real OTP verification endpoint
      const res = await fetch('https://realtybudget.eitaa.in/v1/auth/api/login/email/otp/validate/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp }),
      });
      const data = await res.json();
      

      if (res.ok && data.access_token) {
        localStorage.setItem("token", data.access_token);

        // ✅ OTP valid → go to home
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
