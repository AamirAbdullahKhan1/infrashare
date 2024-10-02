import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('requests');
  const [formAction, setFormAction] = useState('update');
  const [selectedType, setSelectedType] = useState('equipment');
  const [file, setFile] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar visibility

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="min-h-screen flex bg-gray-100 relative">
      {/* Sidebar */}
      <div
        className={`fixed z-10 bg-gray-800 text-white w-64 h-full transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:block`}
      >
        <h2 className="text-2xl font-bold p-4">Admin Panel</h2>
        <ul className="space-y-4 p-4">
          <li>
            <button
              className={`w-full text-left p-2 rounded-lg ${
                activeTab === 'requests' ? 'bg-gray-700' : 'bg-gray-900 hover:bg-gray-700'
              }`}
              onClick={() => setActiveTab('requests')}
            >
              Manage Requests
            </button>
          </li>
          <li>
            <button
              className={`w-full text-left p-2 rounded-lg ${
                activeTab === 'resources' ? 'bg-gray-700' : 'bg-gray-900 hover:bg-gray-700'
              }`}
              onClick={() => setActiveTab('resources')}
            >
              Manage Resources
            </button>
          </li>
        </ul>
      </div>

      {/* Toggle Button for Sidebar on Smaller Screens */}
      <button
        className={`fixed top-4 left-4 z-20 bg-gray-800 text-white p-2 rounded-full shadow-md transition-transform duration-300 ease-in-out ${
          !isSidebarOpen ? 'block' : 'hidden'
        } lg:hidden`}
        onClick={() => setIsSidebarOpen(true)}
      >
        <FaArrowAltCircleRight />
      </button>

      <button
        className={`fixed top-4 left-64 z-20 bg-gray-800 text-white p-2 rounded-full shadow-md transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'block' : 'hidden'
        } lg:hidden`}
        onClick={() => setIsSidebarOpen(false)}
      >
        <FaArrowAltCircleLeft />
      </button>

      {/* Main Content */}
      <div className={`flex-1 p-6 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'} lg:ml-64`}>
        {/* Fixed "Manage Requests" Section */}
        <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-20 p-4">
          <h3 className="text-xl font-bold">Manage Requests</h3>
          {/* Requests List */}
          <div className="bg-white shadow-md rounded-lg mt-2 p-4 overflow-hidden">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Request ID</th>
                  <th className="text-left py-3 px-4 uppercase font-semibold text-sm">User Name</th>
                  <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Equipment/Lab</th>
                  <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Action</th>
                </tr>
              </thead>
              <tbody>
                {/* Sample Requests */}
                <tr>
                  <td className="text-left py-3 px-4">#12345</td>
                  <td className="text-left py-3 px-4">John Doe</td>
                  <td className="text-left py-3 px-4">3D Printer</td>
                  <td className="text-left py-3 px-4">
                    <button className="bg-green-500 text-white px-4 py-2 rounded-lg mr-2">Accept</button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-lg">Reject</button>
                  </td>
                </tr>
                {/* Add more sample rows here if needed */}
              </tbody>
            </table>
          </div>
        </div>

        {/* Content that scrolls under the fixed section */}
        <div className="mt-32"> {/* Adjust margin to avoid overlap with fixed section */}
          {activeTab === 'resources' && (
            <div>
              <h3 className="text-xl font-bold mb-4">Add/Update Resources</h3>

              {/* Dropdown for Action */}
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Action</label>
                <select
                  value={formAction}
                  onChange={(e) => setFormAction(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                >
                  <option value="update">Update</option>
                  <option value="add">Add</option>
                </select>
              </div>

              {/* Dropdown for Resource Type */}
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Resource Type</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                >
                  <option value="equipment">Equipment</option>
                  <option value="lab">Research Lab</option>
                  <option value="incubator">Incubation Center</option>
                </select>
              </div>

              {/* Form Fields for Add/Update */}
              <div className="bg-white shadow-md rounded-lg p-6">
                <input
                  type="text"
                  placeholder={`${selectedType === 'equipment' ? 'Equipment' : selectedType === 'lab' ? 'Lab' : 'Incubator'} Name`}
                  className="w-full p-3 mb-4 border rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Availability (Yes/No)"
                  className="w-full p-3 mb-4 border rounded-lg"
                />
                
                {/* File Upload for Add */}
                {formAction === 'add' && (
                  <div className="mb-4">
                    <label className="block text-sm font-bold mb-2">Upload Image</label>
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="w-full p-3 border rounded-lg"
                    />
                    {file && <p className="mt-2 text-sm">File Selected: {file.name}</p>}
                  </div>
                )}

                <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">
                  {formAction === 'add' ? 'Add' : 'Update'} {selectedType}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white text-center p-4 mt-4">
        &copy; 2024 Your Company. All rights reserved.
      </footer>
    </div>
  );
};

export default AdminPanel;
