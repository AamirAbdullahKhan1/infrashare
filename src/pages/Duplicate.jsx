import React, { useState } from "react";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("equipment");

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    image: null,
  });

  const [requests, setRequests] = useState([
    { id: 1, name: "John Doe", request: "Request to use 3D Printer" },
    { id: 2, name: "Jane Smith", request: "Request for lab equipment" },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for adding/updating equipment
    console.log("Equipment Data Submitted: ", formData);
  };

  const handleApprove = (id) => {
    setRequests(requests.filter((req) => req.id !== id));
    console.log("Request approved: ", id);
  };

  const handleReject = (id) => {
    setRequests(requests.filter((req) => req.id !== id));
    console.log("Request rejected: ", id);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-4">
        <nav className="flex justify-center mb-6">
          <button
            onClick={() => setActiveTab("equipment")}
            className={`px-4 py-2 mx-2 text-white rounded-lg ${
              activeTab === "equipment" ? "bg-blue-500" : "bg-gray-400"
            } hover:bg-blue-600 transition-all`}
          >
            Equipment
          </button>
          <button
            onClick={() => setActiveTab("requests")}
            className={`px-4 py-2 mx-2 text-white rounded-lg ${
              activeTab === "requests" ? "bg-blue-500" : "bg-gray-400"
            } hover:bg-blue-600 transition-all`}
          >
            Requests
          </button>
        </nav>

        {/* Equipment Tab */}
        {activeTab === "equipment" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Add or Update Equipment</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Equipment Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-2 rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Category</label>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-2 rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-2 rounded-lg"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Upload Image</label>
                <input type="file" onChange={handleImageUpload} accept="image/*" className="w-full" />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
              >
                Submit
              </button>
            </form>
          </div>
        )}

        {/* Requests Tab */}
        {activeTab === "requests" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">User Requests</h2>
            <ul className="space-y-4">
              {requests.map((req) => (
                <li key={req.id} className="bg-gray-50 p-4 rounded-lg shadow">
                  <p className="font-medium">
                    <strong>{req.name}</strong>: {req.request}
                  </p>
                  <div className="flex mt-2">
                    <button
                      onClick={() => handleApprove(req.id)}
                      className="bg-green-500 text-white px-4 py-1 rounded-lg mr-2 hover:bg-green-600 transition-all"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleReject(req.id)}
                      className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 transition-all"
                    >
                      Reject
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;