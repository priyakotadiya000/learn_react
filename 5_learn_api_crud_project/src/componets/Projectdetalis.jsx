// src/components/ProjectDetail.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProjectById,updateProject,deleteProject } from "../Api";
 

const ProjectDetail = () => {
  const navigate = useNavigate();
  const [project,setProject]=useState();
  const [loading,setLoading]=useState();
 const { id } = useParams();
  const [formData, setFormData] = useState({
    project_name: "",
    address: "",
    description: "",
    project_logo: null,
  });
  const [logoPreview, setLogoPreview] = useState(null);

  const accessToken = localStorage.getItem("access_token");
  const csrfToken = localStorage.getItem("csrf_token");

  useEffect(() => {
    const fProject = async () => {
      try {
        const response = await getProjectById(id, accessToken, csrfToken);
        if (!response.ok) {
          throw new Error("Failed to fetch project");
        }
        const data = await response.json();
        setProject(data.data);

        setFormData({
          project_name: data.data.project_name || "",
          address: data.data.address || "",
          description: data.data.description || "",
          project_logo: null, // we will not set File here
        });

        if (data.data.project_logo) {
          setLogoPreview(
            `https://realtybudget.eitaa.in${data.data.project_logo}`
          );
        }
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    fProject();

  }, [id, accessToken, csrfToken]);



  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "project_logo") {
      const file = files[0];
      setFormData((prev) => ({ ...prev, project_logo: file }));
      setLogoPreview(URL.createObjectURL(file));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };
  const handleUpdate = async () => {
    const form = new FormData();
    form.append("project_name", formData.project_name);
    form.append("address", formData.address);
    form.append("description", formData.description);
    if (formData.project_logo) {
      form.append("project_logo", formData.project_logo);
    }

    try {
      const response = await updateProject(id, form, accessToken, csrfToken);
      if (!response.ok) throw new Error("Update failed");

      const res = await response.json();
      alert("Project updated successfully!");
      console.log("Update response:", res);
      // await fetchProjects(); 
      navigate("/home");

    } catch (err) {
      console.error("Update error:", err);
      alert("Error updating project.");
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;
  
    try {
      const response = await deleteProject(id, accessToken, csrfToken);
      if (!response.ok) throw new Error("Delete failed");
  
      alert("Project deleted successfully!");
      // await fetchProjects(); // ✅ Refresh sidebar
      navigate("/home");
    } catch (err) {
      console.error("Delete error:", err);
      alert("Error deleting project.");
    }
  };
 


  return (
    <div className="container mt-4">
      <h2 className="mb-3">Project Detail </h2>

      {/* {loading ? (<p>Loading project data...</p>) : project ? ( <pre style={{ backgroundColor: "#f8f9fa", padding: "15px",borderRadius: "5px",  }} >
          {JSON.stringify(project, null, 2)}
        </pre>
        
      ) : (
        <p>Project not found or failed to load.</p>
        
      )
      } */}
      <div>
          <label htmlFor="">project name</label>
          <input type="text" value={formData.project_name} name="project_name" onChange={handleChange}/>
      </div>
      <div>
          <label htmlFor="">Address</label>
          <input type="text" value={formData.address}  name="address" onChange={handleChange}/>
      </div>
      <div>
          <label htmlFor="">Description</label>
          <input type="text" value={formData.description} name="description" onChange={handleChange}/>
      </div>
      <div>
          <label htmlFor="">project Logo</label>
          <input
              type="file"
              className="form-control"
              id="project_logo"
              name="project_logo"
              accept="image/*"
              onChange={handleChange}
            />
            {logoPreview && (
              <div className="mt-2">
                <img
                  src={logoPreview}
                  alt="Logo Preview"
                  style={{ maxWidth: "150px", border: "1px solid #ddd" }}
                />
              </div>
            )}
      </div>

      <div className="col-12">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleUpdate}
            >
              Update Project
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleDelete}
            >
              Delete Project
            </button>

          </div>
    </div>
  );
};

export default ProjectDetail;
