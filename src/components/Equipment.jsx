import React, { useState } from "react";

const EquipmentPage = () => {
  const [showFilters, setShowFilters] = useState(false); // State to toggle filters
  const [equipmentList] = useState([
    {
      id: 1,
      name: "3D Printer",
      institution: "ABC University",
      price: 500,
      available: true,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Electron Microscope",
      institution: "XYZ Research Center",
      price: 1200,
      available: false,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Incubation Chamber",
      institution: "DEF College",
      price: 800,
      available: true,
      image: "https://via.placeholder.com/150",
    },
    // Add more equipment here...
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500">
      {/* Header */}
      <header className="flex flex-col items-center py-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Explore Research Equipment
        </h1>
        <div className="w-full md:w-2/3 flex items-center border rounded-full px-4 py-2 bg-white shadow-md">
          <input
            type="text"
            placeholder="Search equipment, labs, or institutions..."
            className="flex-grow px-2 py-1 outline-none"
          />
          <button className="ml-2 text-gray-600">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </header>

      {/* Mobile Filters Button */}
      <div className="block sm:hidden w-full text-center mb-4">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col sm:flex-row justify-between px-4 sm:px-6">
        {/* Sidebar Filters - Visible on Desktop and Collapsible on Mobile */}
        <aside
          className={`${
            showFilters ? "block" : "hidden"
          } sm:block w-full sm:w-1/4 bg-white p-4 rounded-lg shadow-lg mb-4 sm:mb-0`}
        >
          <h3 className="text-xl font-semibold mb-4">Filters</h3>
          <div>
            <label className="block text-sm text-gray-600">Category</label>
            <select className="w-full px-4 py-2 border rounded-lg">
              <option>All Categories</option>
              <option>Lab Equipment</option>
              <option>Incubation Center</option>
              <option>Research Labs</option>
            </select>
          </div>
          <div className="mt-4">
            <label className="block text-sm text-gray-600">Availability</label>
            <select className="w-full px-4 py-2 border rounded-lg">
              <option>All</option>
              <option>Available</option>
              <option>Booked</option>
            </select>
          </div>
        </aside>

        {/* Equipment Grid */}
        <div className="w-full sm:w-3/4 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6">
          {equipmentList.map((equipment) => (
            <div
              key={equipment.id}
              className="bg-white rounded-lg shadow-lg p-4"
            >
              <img
                src={equipment.image}
                alt={equipment.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {equipment.name}
              </h2>
              <p className="text-gray-600 mb-2">{equipment.institution}</p>
              <p className="text-gray-800 font-bold mb-4">
                ₹{equipment.price} / day
              </p>
              <p
                className={`text-sm ${
                  equipment.available ? "text-green-500" : "text-red-500"
                }`}
              >
                {equipment.available ? "Available" : "Booked"}
              </p>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center py-4">
        <button className="mx-2 px-3 py-1 bg-gray-300 rounded-lg">
          Previous
        </button>
        <span className="mx-2">Page 1 of 5</span>
        <button className="mx-2 px-3 py-1 bg-gray-300 rounded-lg">Next</button>
      </div>
    </div>
  );
};

export default EquipmentPage;