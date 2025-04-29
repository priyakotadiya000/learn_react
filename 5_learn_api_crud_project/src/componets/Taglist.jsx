import { useNavigate } from "react-router-dom";
import { getTagsByProject } from "../Api";
import { useState,useEffect } from "react";


const Taglist = () =>{

    const navigate = useNavigate()
    const [tags, setTags] = useState([]); // Initialize tags as an empty array
    //  const [error, setError] = useState(null);
     const projectid = localStorage.getItem("selected_project_id")

      
     const getTokens = () => {
        const csrfToken = document.cookie.split("csrftoken=")[1]?.split(";")[0];
        const accessToken = localStorage.getItem("access_token"); // Adjust if you store it elsewhere (e.g., cookies, context)
        return { csrfToken, accessToken };
      };
       

      useEffect(() => {

        const fetchTags = async () => {
          const { csrfToken, accessToken } = getTokens();
         
    
          try {
            const response = await getTagsByProject(projectid, 'sdasdasdasd', accessToken);
            if (response.ok) {
              const data = await response.json();
              setTags(Array.isArray(data.data) ? data.data : []); // Ensure data.data is an array
            } else {
    
              throw new Error("Failed to fetch tags");
            }
          } catch (error) {
    
            console.log(error)
            handleError(error);
          } finally {
            setIsLoading(false);
          }
        };
    
        fetchTags();
      }, [projectid]);
    

    const handleclick = () => {
        navigate("/CreateTag") 
   };


    
    return (
        <div className="container mt-4">
          <h2 className="mb-3">Tags for Project ID:{projectid}</h2>
          <p>This is the Tags page. You can display and manage tags here.</p>
    
          {/* {error && <div className="alert alert-danger">{error}</div>} */}
    
          <button onClick={handleclick} className="btn btn-primary mb-3">
            ➕ Create Tag
          </button>
    
         
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Tag Name</th>
                    <th>Description</th>
                    <th>Created At</th>
                    <th>Updated At</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {tags.length > 0 ? (
                    tags.map((tag) => (
                      <tr key={tag.id}>
                        <td>{tag.tag_name}</td>
                        <td>{tag.description}</td>
                        <td>{new Date(tag.created_at).toLocaleString()}</td>
                        <td>{new Date(tag.updated_at).toLocaleString()}</td>
                        <td>
                         
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5">No tags available.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          
        </div>
      );
    
}

export default Taglist;


