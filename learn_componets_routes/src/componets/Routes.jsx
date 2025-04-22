import About from "./About";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import Details from "./Detalis";
const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Details/:name" element={<Details />}  />

    </Routes>
  );
};

export default AppRoutes;
