import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Sidebar = () =>{

  const navigate = useNavigate();

  const handle = () =>{
    navigate("/Crateproject")

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
          <li  className="nav-item mb-2 d-flex align-items-center">
              
          </li>

        
      </ul>
      <button onClick={handle}>Create Project</button>

    </div>

    </> 
   
}
  
export default Sidebar;


