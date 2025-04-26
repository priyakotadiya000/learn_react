import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { getUser } from "../Api";
import MainLayout from "./MainLayout";


const Home = () => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();
  useEffect(() => {
    const accesstoken = localStorage.getItem("access_token");
  
     if (!accesstoken) {
      navigate("/");
      localStorage.clear();
    };
  }, []);


  useEffect(() => {
    const token = localStorage.getItem("access_token");
    const csrf = document.cookie.split("csrftoken=")[1]?.split(";")[0];

    getUser(token, csrf).then(async (res) => {
      if (res.status === 200) {
        const data = await res.json();
        setUser(data);
      } else if (res.status === 401) {
        navigate("/");
      } else {
        navigate("/");
      }
    });
  }, []);

  return (
    // <div>
    //   <Header></Header>
    //   <Sidebar></Sidebar>
    //   <Footer></Footer>
    //   <hr />

    // </div>
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
    <Header />

    <div style={{ display: "flex", flex: 1 }}>
      <Sidebar />
      <h2>Welcome Home page</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <MainLayout />
    </div>

    <Footer />
  </div>
  );
};

export default Home;
