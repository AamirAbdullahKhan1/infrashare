import React, { useState } from "react";

// Component for displaying each equipment card
const EquipmentCard = ({ equipment }) => {
  const { name, institution, price, available, image } = equipment;

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h2 className="text-lg font-semibold text-gray-800 mb-2">{name}</h2>
      <p className="text-gray-600 mb-2">{institution}</p>
      <p className="text-gray-800 font-bold mb-4">₹{price} / day</p>
      <p className={`text-sm ${available ? "text-green-500" : "text-red-500"}`}>
        {available ? "Available" : "Booked"}
      </p>
      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500">
        Book Now
      </button>
    </div>
  );
};

const EquipmentPage = () => {
  const [showFilters, setShowFilters] = useState(false);
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
    {
      id: 3,
      name: "Incubation Chamber",
      institution: "DEF College",
      price: 800,
      available: true,
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
    {
      id: 3,
      name: "Incubation Chamber",
      institution: "DEF College",
      price: 800,
      available: true,
      image: "https://via.placeholder.com/150",
    },
    // Additional equipment...
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-200">
      {/* Header */}
      <header className="flex flex-col items-center py-6 px-4 sm:px-6">
        <h1 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
          Explore Research Equipment
        </h1>
        <div className="w-full sm:w-2/3 flex items-center border rounded-full px-4 py-2 bg-white shadow-md">
          <input
            type="text"
            placeholder="Search equipment, labs, or institutions..."
            className="flex-grow px-2 py-1 outline-none text-sm sm:text-base"
          />
          <button className="ml-2 text-gray-600">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </header>

      {/* Mobile Filters Toggle */}
      <div className="block sm:hidden w-full text-center mb-4">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          onClick={() => setShowFilters((prev) => !prev)}
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col sm:flex-row justify-between px-4 sm:px-6">
        {/* Sidebar Filters */}
        <aside
          className={`${
            showFilters ? "block" : "hidden"
          } sm:block w-full sm:w-64 bg-white p-4 rounded-lg shadow-lg mb-4 sm:mb-0`}
          style={{ height: "392px", marginRight: "2rem" }}
        >
          <h3 className="text-xl font-semibold mb-4">Filters</h3>
          <div className="overflow-y-auto h-full">
            <div>
              <label className="block text-sm text-black font-normal font-poppins py-2">Category</label>
              <select className="w-full px-4 py-3 border rounded-lg">
                <option>All Categories</option>
                <option>Lab Equipment</option>
                <option>Incubation Center</option>
                <option>Research Labs</option>
              </select>
            </div>
            <div className="mt-4">
              <label className="block text-sm text-black font-normal font-poppins py-2">Availability</label>
              <select className="w-full px-4 py-2 border rounded-lg">
                <option>All</option>
                <option>Available</option>
                <option>Booked</option>
              </select>
            </div>
          </div>
        </aside>

        {/* Equipment Grid */}
        <div className="flex-grow grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6">
          {equipmentList.map((equipment) => (
            <EquipmentCard key={equipment.id} equipment={equipment} />
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center py-4">
      <ul class="flex space-x-4 justify-center">
  <li class="flex items-center justify-center shrink-0 bg-gray-300 w-10 h-10 rounded-full">
    <svg xmlns="http://www.w3.org/2000/svg" class="w-3 fill-gray-400" viewBox="0 0 55.753 55.753">
      <path
        d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
        data-original="#000000" />
    </svg>
  </li>
  <li
    class="flex items-center justify-center shrink-0 bg-blue-500  border-2 border-blue-500 cursor-pointer text-base font-bold text-white w-10 h-10 rounded-full">
    1
  </li>
  <li
    class="flex items-center justify-center shrink-0 hover:bg-gray-50  border-2 cursor-pointer text-base font-bold text-[#333] w-10 h-10 rounded-full">
    2
  </li>
  <li
    class="flex items-center justify-center shrink-0 hover:bg-gray-50  border-2 cursor-pointer text-base font-bold text-[#333] w-10 h-10 rounded-full">
    3
  </li>
  <li
    class="flex items-center justify-center shrink-0 hover:bg-gray-50  border-2 cursor-pointer text-base font-bold text-[#333] w-10 h-10 rounded-full">
    4
  </li>
  <li class="flex items-center justify-center shrink-0 hover:bg-gray-50 border-2 cursor-pointer w-10 h-10 rounded-full">
    <svg xmlns="http://www.w3.org/2000/svg" class="w-3 fill-gray-400 rotate-180" viewBox="0 0 55.753 55.753">
      <path
        d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
        data-original="#000000" />
    </svg>
  </li>
</ul>
      </div>
    </div>
  );
};

export default EquipmentPage;