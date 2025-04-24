import { Routes, Route } from "react-router-dom";
import Home from "./componets/Home";
import About from "./componets/About";
import Loginemail from "./componets/Loginemail";
import Otp from "./componets/Otp";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const AppRoutes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<Loginemail/>} />
      <Route path="/otp" element={<Otp/>} />
      <Route path="/Home" element={<Home/>}/>
      <Route path="/About" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;
