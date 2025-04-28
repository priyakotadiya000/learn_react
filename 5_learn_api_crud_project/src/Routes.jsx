import { Routes, Route } from "react-router-dom";
import Home from "./componets/Home";
import Loginemail from "./componets/Loginemail";
import Otp from "./componets/Otp";
import About from "./componets/About";
import MainLayout from "./componets/MainLayout";
import Public from "./componets/public";
import Private from "./componets/Private";
import ProjectDetail from "./componets/Projectdetalis";
import CreateProject from "./componets/createproject";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Public>
            <Loginemail />
          </Public>
        }
      />
      <Route
        path="/otp"
        element={
          <Public>
            <Otp />
          </Public>
        }
      />
      <Route
        path="/Home"
        element={
          <Private>
            <Home />
          </Private>
        }
      />
      <Route
        path="/About"
        element={
          <Private>
            <About />
          </Private>
        }
      />
    <Route
        path="/project/:id"
        element={
          <Private>
            <ProjectDetail />
          </Private>
        }
      />
      <Route
        path="/createproject"
        element={
          <Private>
            <CreateProject />
          </Private>
        }
      />


    </Routes>
    
  );
};

export default AppRoutes;
