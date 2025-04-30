import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getTag,updateTag } from "../Api"; // Make sure `update` is also imported

const Updatetag = () => {
  const navigate = useNavigate();
//   const { tagId } = useParams(); // tagId from the URL
  const [tagName, setTagName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);

  const projectId = localStorage.getItem("selected_project_id");
  const csrfToken = localStorage.getItem("csrf_token");
  const accessToken = localStorage.getItem("access_token");
  
  const tagId = localStorage.getItem("tag_id");



  useEffect(() => {
    const fetchTagData = async () => {
      try {
        const response = await getTag(tagId, projectId, csrfToken, accessToken);
        if (!response.ok) {
          throw new Error("Failed to fetch tag");
        }

        const data = await response.json();
        setTagName(data.data.tag_name || "");
        setDescription(data.data.description || "");
      } catch (error) {
        console.error("Error fetching tag:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTagData();
  }, [tagId, projectId, csrfToken, accessToken]);

     



const handleUpdate = async (e) => {
    e.preventDefault();
  
    const formData = new URLSearchParams(); // ✅ FIXED
    formData.append("tag_name", tagName);
    formData.append("description", description);
    formData.append("project", projectId);
  
    try {
      const response = await updateTag(tagId, formData, csrfToken, accessToken);
  
      if (!response.ok) {
        const res = await response.json();
        console.error("Update failed:", res);
        alert("Error updating project.");
        return;
      }
  
      alert("Project updated successfully!");
      navigate("/home");
  
    } catch (err) {
      console.error("Update error:", err);
      alert("Unexpected error during update.");
    }
  };
  




  if (loading) return <p>Loading...</p>;



  return (
    <div>
      <h2>Update Tag for Project ID: {projectId}</h2>
      <form >
        <div>
          <label>Tag Name</label>
          <input
            type="text"
            name="tag_name"
            value={tagName}
            onChange={(e) => setTagName(e.target.value)}
            placeholder="Tag Name"
          />
        </div>
        <div>
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
        </div>
        <button onClick={handleUpdate} type="submit">Update</button>
      </form>
    </div>
  );
};

export default Updatetag;

