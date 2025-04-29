import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { getProjxList } from "../Api";

const Sidebar = () =>{

  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    const token = localStorage.getItem("access_token");
    const csrf = document.cookie.split("csrftoken=")[1]?.split(";")[0];
    if (!token) return;

    try {
      const res = await getProjxList(token, csrf);
      if (res.status === 200) {
        const json = await res.json();
        setProjects(json.data || []);
        console.log(json.data)
      } else if (res.status === 401) {
        localStorage.clear();
        window.location.href = "/";
      }
    } catch (err) {
      console.error("Failed to fetch project list", err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);


  const handle = () =>{
    navigate("/CreateProject")

  }
  const  handleclick =(e)=>{
     console.log(e)
     localStorage.setItem("selected_project_id",e)
  }
    return <> 
                     <div
      className="bg-light border-end p-3 position-fixed overflow-auto"
      style={{
        width: "200px",
        top: "56px",
        bottom: 0,
        height: "calc(100vh - 56px)",
        zIndex: 1000,
      }}
    >
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <Link to="/home" className="nav-link">🏠 Home</Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/about" className="nav-link">ℹ️ About</Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/profile" className="nav-link">👤 Profile</Link>
        </li>

        <li className="nav-item mt-4 fw-bold">📁 Projects</li>
        {projects.map((project) => (
          <li key={project.id} className="nav-item mb-2 d-flex align-items-center">
            <Link to={`/project/${project.id}`} onClick = {(e)=>{handleclick(project.id)}}className="nav-link p-0">
              <img
                src={project.project_logo || "https://cdn-icons-png.flaticon.com/24/2991/2991112.png"}
                alt="logo"
                className="me-2 rounded"
                width={24}
                height={24}
                style={{ objectFit: "cover" }}
              />
              {project.project_name}
            </Link>
          </li>
        ))}


      </ul>
      <button onClick={handle}>Create Project</button>

    </div>

    </> 
   
}
  
export default Sidebar;


