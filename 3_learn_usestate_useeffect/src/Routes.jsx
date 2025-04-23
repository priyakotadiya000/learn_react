import Home from "./Componets/Home";
import Id from "./Componets/id";
import { Routes, Route } from "react-router-dom";
import Userlist from "./Componets/userlist";


const ARoutes = () =>{
    return   <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/Id" element={<Id/>}/>
             <Route path="/userlist" element={<Userlist/>}/>

            </Routes>
}

export default ARoutes;