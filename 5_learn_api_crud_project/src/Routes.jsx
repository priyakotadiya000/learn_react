import { Routes, Route } from "react-router-dom";
import Home from "./componets/Home";
import Loginemail from "./componets/Loginemail";
import Otp from "./componets/Otp";
import About from "./componets/About";
import MainLayout from "./componets/MainLayout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Loginemail />} />
      <Route path="/otp" element={<Otp />} />
      <Route
        path="/Home"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />
      <Route
        path="/About"
        element={
          <MainLayout>
            <About />
          </MainLayout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
