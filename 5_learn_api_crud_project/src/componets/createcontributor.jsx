import { useState } from "react";
import { createContributor } from "../Api";
import { useNavigate } from "react-router-dom";
const CreateContributor = () =>{

    const navigate = useNavigate();
    const [logoPreview, setLogoPreview] = useState(null);
    const [loading,setLoading] = useState()
  
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phonenumber:"",
      address:"",
      bank_account_holder_name:"",
      bank_account_holder_number:"",
      bank_account_ifsc_code:"",
      project_logo: null,
    });
      
    const projectid = localStorage.getItem("selected_project_id")
    const csrfToken = document.cookie.split("csrftoken=")[1]?.split(";")[0];
    const accessToken = localStorage.getItem("access_token");
  
    const handleChange = (e) => {
      const { name, value, files } = e.target;
  
      if (name === "project_logo") {
        const file = files[0];
      } else {
        setFormData((e) => ({ ...e, [name]: value }));
      }
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("phone_number",formData.phonenumber)
      data.append("address", formData.address);
      data.append("bank_account_holder_name",formData.bank_account_holder_name);
      data.append("bank_account_holder_number", formData.bank_account_holder_number);
      data.append("bank_account_ifsc_code", formData.bank_account_ifsc_code);
      data.append("project_logo", formData.project_logo);
      data.append("project", projectid);

      if (formData.project_logo) {
        data.append("project_logo", formData.project_logo);
      }
  
      try {
        const response = await createContributor(data, csrfToken, accessToken);
        const json = await response.json();
  
        if (response.ok && json.success === 1) {
          alert("Project created successfully!");
          // navigate(`/project/${json.data.id}`);
          navigate('/contributor')
        } else {
          alert("Failed to create project.");
        }
      } catch (err) {
        console.error("Create error:", err);
        alert("Something went wrong.");
       } 
    };
  



      return  (
        <div className="container mt-4">
      <h2 className="mb-4">Create New Project</h2>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
         
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="text"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">phonenumber</label>
          <input
            type="text"
            className="form-control"
            name="phonenumber"
            value={formData.phonenumber}
            onChange={handleChange}
            required
          />
        </div>

       


        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        
        <div className="mb-3">
          <label className="form-label">Bank  Account Holder Name</label>
          <input
            type="text"
            className="form-control"
            name="bank_account_holder_name"
            value={formData.bank_account_holder_name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="mb-3">
          <label className="form-label">Bank  Account Holder Number</label>
          <input
            type="text"
            className="form-control"
            name="bank_account_holder_number"
            value={formData.bank_account_holder_number}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Bank  Account ifsc code</label>
          <input
            type="text"
            className="form-control"
            name="bank_account_ifsc_code"
            value={formData.bank_account_ifsc_code}
            onChange={handleChange}
            required
          />
        </div>


        <div className="mb-3">
          <label className="form-label">Project Profile</label>
          <input
            type="file"
            className="form-control"
            name="project_logo"
            accept="image/*"
            onChange={handleChange}
          />
        </div>

       
          <div className="mb-3">
            <label className="form-label d-block">Preview:</label>
            <img
              src={logoPreview}
              alt="Project Logo Preview"
              style={{ maxWidth: "200px", borderRadius: "8px" }}
            />
          </div>

         
        <button
          type="submit"
          className="btn btn-success"
          disabled={loading}
        >
          {loading ? "Creating..." : "Create contributor"}
        </button>
      </form>
    </div>

      )}
    
export default CreateContributor;