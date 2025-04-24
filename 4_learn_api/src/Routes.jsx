import { Routes, Route } from "react-router-dom";
import Home from "./componets/Home";
import About from "./componets/About";
import Loginemail from "./componets/Loginemail";
import Otp from "./componets/Otp";


const AppRoutes = () =>{
    return   <Routes>
             <Route path="/" element={<Loginemail/>}/>
             <Route path="/otp" element={<Otp/>}/>
             <Route path="/Home" element={<Home/>}/>
             <Route path="/About" element={<About/>}/>

            </Routes>
}

export default AppRoutes;