import { useNavigate ,useLocation} from "react-router-dom";


const Header = () => {
    const navigate = useNavigate();
    const location = useLocation(); // Current path milta hai


    const handleClick = () => {
      navigate("/about");
     };
    
    const handleClickby = () =>{
      navigate("/")
      localStorage.clear();
 
    }
    const handleTagButton = () => {
       navigate("/project/:id/Taglist")
  };


  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid justify-content-end">
        {(location.pathname.startsWith("/project/") || 
            location.pathname.startsWith("/Taglist") || 
            location.pathname === "/createTag") && (
          <button onClick={handleTagButton} className="btn btn-success">
             Tag
          </button>
        )}
        

              <button onClick={handleClick}>About</button>
              <button onClick={handleClickby}>Logout</button>
              
        </div>
      </nav>
  );
};

export default Header;
