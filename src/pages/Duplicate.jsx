import { useState } from "react";

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState("equipment");
  const [equipmentName, setEquipmentName] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);

  const handleAddEquipment = (e) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    console.log("Adding equipment:", { equipmentName, category, image });
    // Reset form
    setEquipmentName("");
    setCategory("");
    setImage(null);
  };

  const handleRequestAction = (id, action) => {
    // Here you would update the request status in your backend
    console.log(`Request ${id} ${action}ed`);
  };

  return (
    <div className="container mx-auto mb-[45px] p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <div className="mb-4">
        <ul className="flex border-b">
          {["equipment", "requests", "admin"].map((tab) => (
            <li className="-mb-px mr-1" key={tab}>
              <a
                className={`bg-white inline-block py-2 px-4 font-semibold ${
                  activeTab === tab
                    ? "border-l border-t border-r rounded-t text-blue-700"
                    : "text-blue-500 hover:text-blue-800"
                }`}
                onClick={() => setActiveTab(tab)}
                href="#"
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {activeTab === "equipment" && (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-sm:mb-[50px]">
          <h2 className="text-xl font-semibold mb-4">Add/Update Equipment</h2>
          <form onSubmit={handleAddEquipment}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter equipment name"
                value={equipmentName}
                onChange={(e) => setEquipmentName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                Category
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select category</option>
                <option value="equipment">Equipment</option>
                <option value="lab">Research Lab</option>
                <option value="incubation">Incubation Center</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                Image
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="image"
                type="file"
                onChange={(e) => setImage(e.target.files?.[0] || null)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Equipment
              </button>
            </div>
          </form>
        </div>
      )}

      {activeTab === "requests" && (
        <div className="bg-white shadow-md rounded-lg p-6 mb-[72px]">
          <h2 className="text-2xl font-semibold mb-6">Resource Requests</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
                <tr>
                  <th className="py-3 px-4 border-b border-gray-300 bg-gray-100 text-left text-sm leading-4 font-medium text-gray-600 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="py-3 px-4 border-b border-gray-300 bg-gray-100 text-left text-sm leading-4 font-medium text-gray-600 uppercase tracking-wider">
                    Requester
                  </th>
                  <th className="py-3 px-4 border-b border-gray-300 bg-gray-100 text-left text-sm leading-4 font-medium text-gray-600 uppercase tracking-wider">
                    Resource
                  </th>
                  <th className="py-3 px-4 border-b border-gray-300 bg-gray-100 text-left text-sm leading-4 font-medium text-gray-600 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="py-3 px-4 border-b border-gray-300 bg-gray-100 text-left text-sm leading-4 font-medium text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: 1, requester: "John Doe", resource: "Microscope", date: "2023-06-15" },
                  { id: 2, requester: "Jane Smith", resource: "3D Printer", date: "2023-06-16" },
                  { id: 3, requester: "Bob Johnson", resource: "Chemistry Lab", date: "2023-06-17" },
                ].map((request) => (
                  <tr key={request.id} className="hover:bg-gray-50 transition duration-200">
                    <td className="py-4 px-4 border-b border-gray-300 text-gray-700 text-sm">{request.id}</td>
                    <td className="py-4 px-4 border-b border-gray-300 text-gray-700 text-sm">{request.requester}</td>
                    <td className="py-4 px-4 border-b border-gray-300 text-gray-700 text-sm">{request.resource}</td>
                    <td className="py-4 px-4 border-b border-gray-300 text-gray-700 text-sm">{request.date}</td>
                    <td className="py-4 px-4 border-b border-gray-300 text-sm flex space-x-2">
                      <button
                        onClick={() => handleRequestAction(request.id, 'accept')}
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded text-sm"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => handleRequestAction(request.id, 'reject')}
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded text-sm"
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === "admin" && (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-[210px]">
          <h2 className="text-xl font-semibold mb-4">Admin Tools</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Generate Reports
            </button>
            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              Manage Users
            </button>
            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              System Settings
            </button>
            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              Backup Data
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
