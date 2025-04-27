import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate("/about");
     };
    
    const handleClickby = () =>{
      navigate("/")
      localStorage.clear();
 
    }
    

  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid justify-content-end">
              <button onClick={handleClick}>About</button>
              <button onClick={handleClickby}>Logout</button>
        </div>
      </nav>
  );
};

export default Header;
