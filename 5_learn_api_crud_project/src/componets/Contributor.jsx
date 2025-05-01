import { useNavigate } from "react-router-dom";
import { getContributors, deleteContributor } from "../Api";
import { useState } from "react";
import { useEffect } from "react";

const Contributor = () => {
  const navigate = useNavigate();

  const [contributors, setContributors] = useState([]);
  const [loading, setLoading] = useState(true);

  const projectId = localStorage.getItem("selected_project_id");
  const csrfToken = document.cookie.split("csrftoken=")[1]?.split(";")[0];
  const accessToken = localStorage.getItem("access_token");

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const response = await getContributors(
          projectId,
          csrfToken,
          accessToken
        );
        const data = await response.json();
        if (response.ok) {
          setContributors(data.data); // adjust if API shape differs
        } else {
          console.error("Error fetching contributors:", data);
        }
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchContributors();
  }, [projectId, csrfToken, accessToken]);

  const handleDelete = async (id) => {
    console.log(id);
    const csrfToken = document.cookie.split("csrftoken=")[1]?.split(";")[0];
    const accessToken = localStorage.getItem("access_token");

    try {
      const response = await deleteContributor(id, csrfToken, accessToken);
      if (response.ok) {
        alert("Contributor deleted successfully!");
      } else {
        alert("Failed to delete contributor.");
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert("Something went wrong.");
    }
  };

  if (loading) return <p>Loading contributors...</p>;

  const handlecontributor = () => {
    navigate("/createContributor");
  };

  const handleupdate = (id) => {
    localStorage.setItem("contributor_id", id);
    navigate("/updatecontributor");
  };

  return (
    <div className="container mt-4">
      <h2>Contributors List id:{projectId}</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Bank Holder Name</th>
            <th>Bank Holder Number</th>
            <th>Bank IFSC Code</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {contributors && contributors.length > 0 ? (
            contributors.map((c) => (
              <tr key={c.id}>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>{c.phone_number}</td>
                <td>{c.address}</td>
                <td>{c.bank_account_holder_name}</td>
                <td>{c.bank_account_holder_number}</td>
                <td>{c.bank_account_ifsc_code}</td>
                <td>
                  <button onClick={() => handleupdate(c.id)}>update</button>
                  <button onClick={() => handleDelete(c.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No contributors found.</td>
            </tr>
          )}
        </tbody>
      </table>
      <button onClick={handlecontributor}>Createcontributor</button>
    </div>
  );
};

export default Contributor;
