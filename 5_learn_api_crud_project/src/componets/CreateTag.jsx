import { useState } from "react";
import { createTag } from "../Api";
import { useNavigate, useParams } from "react-router-dom";

const CreateTag = () =>{
  const { id } = useParams(); 
  const navigate = useNavigate();
    const [tagName, setTagName] = useState("");
     const [description, setDescription] = useState("");
     const projectid = id


       const handleTagNameChange = (e) => {
        setTagName(e.target.value);
       };

       const handleDescriptionChange = (e) => {
        setDescription(e.target.value);  // Update description state
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
       
    
        // Create formData here in the component
        const formData = new URLSearchParams();
        formData.append("tag_name", tagName);
        formData.append("project", projectid);  // Use project ID from the route
        formData.append("description", description);  // Include description
    
        try {
          const csrfToken = localStorage.getItem("csrf_token");  // Retrieve CSRF token
          const accessToken = localStorage.getItem("access_token");  // Retrieve access token
    
          if (!accessToken) {
            throw new Error("User not authenticated");
          }
    
          const response = await createTag(formData, csrfToken, accessToken);
    
          if (response.ok) {
              navigate("/project/id/Taglist")
          } else {
            const data = await response.json();
          }
        } catch (error) {
        } 
      };
    
    
      
    
    return  <div>
                  <h2>Create a New Tag for Project ID: {projectid}</h2>

                   <form action="" onSubmit={handleSubmit}>

                        <div>
                            <label htmlFor="">Tag Name</label>
                            <input type="text" name="Tag_name"   onChange={handleTagNameChange}   placeholder="TagName" />
                        </div>
                        <div>
                            <label htmlFor="">description</label>
                            <input type="text" name="description" onChange={handleDescriptionChange} placeholder="description" />
                        </div>
                        
                        <button >CreateTag</button>
                   </form>
           </div>
}

export default CreateTag;



