import Home from "./Componets/Home";
import Id from "./Componets/id";
import { Routes, Route } from "react-router-dom";


const ARoutes = () =>{
    return   <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/Id" element={<Id/>}/>
            </Routes>
}

export default ARoutes;