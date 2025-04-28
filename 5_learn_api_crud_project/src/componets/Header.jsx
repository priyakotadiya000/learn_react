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
      alert("Tag Button Clicked!");
      // Ya navigate kar sakte ho kahin bhi:
      // navigate('/tag-create')
  };


  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid justify-content-end">
              
              <button onClick={handleClick}>About</button>
              <button onClick={handleClickby}>Logout</button>
              {location.pathname.startsWith("/project/") && (
          <button onClick={handleTagButton} className="btn btn-success">
            + Tag Name
          </button>
        )}
        </div>
      </nav>
  );
};

export default Header;
