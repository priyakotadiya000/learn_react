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
    // <form onSubmit={handleSubmit} encType="multipart/form-data">
    //   <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
    //   <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
    //   <input type="text" name="phone_number" value={formData.phone_number} onChange={handleChange} placeholder="Phone" required />
    //   <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
    //   <input type="text" name="bank_account_holder_name" value={formData.bank_account_holder_name} onChange={handleChange} placeholder="Account Holder Name" />
    //   <input type="text" name="bank_account_holder_number" value={formData.bank_account_holder_number} onChange={handleChange} placeholder="Account Number" />
    //   <input type="text" name="bank_account_ifsc_code" value={formData.bank_account_ifsc_code} onChange={handleChange} placeholder="IFSC Code" />
    //   <input type="file" name="profile_pic" accept="image/*" onChange={handleChange} />
    //   <button type="submit">Update Contributor</button>
    // </form>

    <form 
  onSubmit={handleSubmit} 
  encType="multipart/form-data" 
  style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '300px', margin: '0 auto' }}
>
  <input 
    type="text" 
    name="name" 
    value={formData.name} 
    onChange={handleChange} 
    placeholder="Name" 
    required 
    style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
  />
  <input 
    type="email" 
    name="email" 
    value={formData.email} 
    onChange={handleChange} 
    placeholder="Email" 
    required 
    style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
  />
  <input 
    type="text" 
    name="phone_number" 
    value={formData.phone_number} 
    onChange={handleChange} 
    placeholder="Phone" 
    required 
    style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
  />
  <input 
    type="text" 
    name="address" 
    value={formData.address} 
    onChange={handleChange} 
    placeholder="Address" 
    style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
  />
  <input 
    type="text" 
    name="bank_account_holder_name" 
    value={formData.bank_account_holder_name} 
    onChange={handleChange} 
    placeholder="Account Holder Name" 
    style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
  />
  <input 
    type="text" 
    name="bank_account_holder_number" 
    value={formData.bank_account_holder_number} 
    onChange={handleChange} 
    placeholder="Account Number" 
    style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
  />
  <input 
    type="text" 
    name="bank_account_ifsc_code" 
    value={formData.bank_account_ifsc_code} 
    onChange={handleChange} 
    placeholder="IFSC Code" 
    style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
  />
  <input 
    type="file" 
    name="profile_pic" 
    accept="image/*" 
    onChange={handleChange} 
    style={{ padding: '5px' }}
  />
  <button 
    type="submit" 
    style={{ padding: '10px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px' }}
  >
    Update Contributor
  </button>
</form>

  );
};

export default UpdateContributor;


