import { useEffect, useState } from "react";
import { getContributorById, updateContributor } from "../Api";
import { useNavigate } from "react-router-dom";

const UpdateContributor = () => {
  const contributorId = localStorage.getItem("contributor_id");
  const projectId = localStorage.getItem("selected_project_id");
  const csrfToken = document.cookie.split("csrftoken=")[1]?.split(";")[0];
  const accessToken = localStorage.getItem("access_token");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    address: "",
    bank_account_holder_name: "",
    bank_account_holder_number: "",
    bank_account_ifsc_code: "",
    profile_pic: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await getContributorById(contributorId, projectId, csrfToken, accessToken);
      if (result.success === 1) {
        setFormData((prev) => ({
          ...prev,
          ...result.data,
        }));
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profile_pic") {
      setFormData({ ...formData, profile_pic: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    for (const key in formData) {
      if (formData[key] !== null) {
        data.append(key, formData[key]);
      }
    }

    data.append("project", projectId);

    const response = await updateContributor(contributorId, data, csrfToken, accessToken);
    const result = await response.json();

    if (result.status === 200) {
      alert("Contributor updated successfully!");
      navigate("/contributor")
    } else {
      alert("Update failed.");
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <input type="text" name="phone_number" value={formData.phone_number} onChange={handleChange} placeholder="Phone" required />
      <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
      <input type="text" name="bank_account_holder_name" value={formData.bank_account_holder_name} onChange={handleChange} placeholder="Account Holder Name" />
      <input type="text" name="bank_account_holder_number" value={formData.bank_account_holder_number} onChange={handleChange} placeholder="Account Number" />
      <input type="text" name="bank_account_ifsc_code" value={formData.bank_account_ifsc_code} onChange={handleChange} placeholder="IFSC Code" />
      <input type="file" name="profile_pic" accept="image/*" onChange={handleChange} />
      <button type="submit">Update Contributor</button>
    </form>
  );
};

export default UpdateContributor;


// import { useEffect,useState } from "react";
// import { getContributor } from "../Api";

// const Updatecontributor = () =>{
//     const [contributor, setContributor] = useState({
//         name:"",
//         email
    
//     });


//   const csrfToken = document.cookie.split("csrftoken=")[1]?.split(";")[0];
//     const accessToken = localStorage.getItem("access_token");
//     const projectId = localStorage.getItem("selected_project_id")
//     const contributorId = localStorage.getItem('contributor_id')
    

//   const fetchContributorDetails = async () => {
    
//     try {

//       const response = await getContributor(contributorId, projectId, csrfToken, accessToken);
//       const data = await response.json();
      

//       if (response.ok) {
//         setContributor(data);
//         setContributor({

//         })
//       }

//     } catch (error) {
//       console.error("Error fetching contributor:", error);
//     } 
//   };

//   useEffect(() => {
//     fetchContributorDetails();
//   }, []);

//   if (loading) return <p>Loading...</p>;


//       return <div className="container mt-4">
//       <h2 className="mb-4">Create update</h2>

//       <form onSubmit={handleSubmit} encType="multipart/form-data">
//         <div className="mb-3">
//           <label className="form-label">Name</label>
//           <input
//             type="text"
//             className="form-control"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
         
//         <div className="mb-3">
//           <label className="form-label">Email</label>
//           <input
//             type="text"
//             className="form-control"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="mb-3">
//           <label className="form-label">phonenumber</label>
//           <input
//             type="text"
//             className="form-control"
//             name="phonenumber"
//             value={formData.phonenumber}
//             onChange={handleChange}
//             required
//           />
//         </div>

       


//         <div className="mb-3">
//           <label className="form-label">Address</label>
//           <input
//             type="text"
//             className="form-control"
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//           />
//         </div>

        
//         <div className="mb-3">
//           <label className="form-label">Bank  Account Holder Name</label>
//           <input
//             type="text"
//             className="form-control"
//             name="bank_account_holder_name"
//             value={formData.bank_account_holder_name}
//             onChange={handleChange}
//             required
//           />
//         </div>
        
//         <div className="mb-3">
//           <label className="form-label">Bank  Account Holder Number</label>
//           <input
//             type="text"
//             className="form-control"
//             name="bank_account_holder_number"
//             value={formData.bank_account_holder_number}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Bank  Account ifsc code</label>
//           <input
//             type="text"
//             className="form-control"
//             name="bank_account_ifsc_code"
//             value={formData.bank_account_ifsc_code}
//             onChange={handleChange}
//             required
//           />
//         </div>


//         <div className="mb-3">
//           <label className="form-label">Project Profile</label>
//           <input
//             type="file"
//             className="form-control"
//             name="project_logo"
//             accept="image/*"
//             onChange={handleChange}
//           />
//         </div>

       
//           <div className="mb-3">
//             <label className="form-label d-block">Preview:</label>
//             <img
//               src={logoPreview}
//               alt="Project Logo Preview"
//               style={{ maxWidth: "200px", borderRadius: "8px" }}
//             />
//           </div>

         
//         <button
//           type="submit"
//           className="btn btn-success"
//           disabled={loading}
//         >
//           {loading ? "Creating..." : "Create contributor"}
//         </button>
//       </form>
//     </div>

// }

// export default Updatecontributor;