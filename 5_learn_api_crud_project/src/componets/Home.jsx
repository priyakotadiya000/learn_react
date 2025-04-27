import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser } from "../Api";

const Home = () => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();
  useEffect(() => {
    const accesstoken = localStorage.getItem("access_token");

    if (!accesstoken) {
      navigate("/");
      localStorage.clear();
    }
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
    <div>
      <h2>Welcome Home</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      {/* <FooterMenu /> */}
    </div>
  );
};

export default Home;
