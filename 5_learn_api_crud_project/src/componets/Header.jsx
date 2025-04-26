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
    <div className="container-fluid bg-black">
      <header className="d-flex justify-content-center py-3  ">
              <button onClick={handleClick}>About</button>
              <button onClick={handleClickby}>Logout</button>
      </header>
    </div>
  );
};

export default Header;
