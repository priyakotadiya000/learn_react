import { Routes, Route } from "react-router-dom";
import Home from "./componets/Home";
import Loginemail from "./componets/Loginemail";
import Otp from "./componets/Otp";
import About from "./componets/About";


const AppRoutes = () => {

  return (
    <Routes>
             <Route path="/" element={<Loginemail/>}/>
             <Route path="/otp" element={<Otp/>}/>
             <Route path="/Home" element={<Home/>}/>
             <Route path="/About" element={<About/>}/>


    </Routes>
  );
};

export default AppRoutes;
