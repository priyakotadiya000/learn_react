import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendOtp } from "../Api";

const Loginemail = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handlesubmit = async () => {
    const csrf = document.cookie.split('csrftoken=')[1]?.split(';')[0];
    const otp_response = await sendOtp(email, csrf);

    localStorage.setItem("email", email);
    if (otp_response.status == 200) {
      navigate("/otp");
      console.log("Status Code:", otp_response.status == 200);
    } else {
      alert("somthing is wrong");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <label>Email</label>
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handlesubmit}>Continue</button>
    </div>
  );
};

export default Loginemail;
