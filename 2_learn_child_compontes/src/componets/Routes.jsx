import { Routes, Route } from "react-router-dom";
import Application from "./Application";
import Home from "./Home";

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Application/>}/>
        <Route path="/Home" element={<Home/>}/>

    </Routes>
  );
};

export default AppRoutes;
