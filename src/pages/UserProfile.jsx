import React, { useState } from 'react';

const Profile = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Researcher passionate about innovation and technology.',
    location: 'New Delhi, India',
  });
  
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  return (
    <div className="bg-white max-w-2xl mx-auto p-8 rounded-lg shadow-lg mt-10">
      <h1 className="text-2xl font-semibold text-gray-700 text-center">User Profile</h1>

      <div className="flex flex-col items-center mt-6">
        {/* Profile Picture */}
        <div className="relative">
          <img
            className="w-32 h-32 object-cover rounded-full border-2 border-gray-300 shadow-sm"
            src={profilePic || 'https://via.placeholder.com/150'}
            alt="Profile"
          />
          <input
            type="file"
            accept="image/*"
            className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
            onChange={handleImageUpload}
          />
        </div>
        <p className="text-gray-500 mt-2 text-sm">Click to upload a new profile picture</p>

        {/* Personal Info */}
        <div className="mt-6 w-full">
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={profileData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-2">Bio</label>
            <textarea
              name="bio"
              value={profileData.bio}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-2">Location</label>
            <input
              type="text"
              name="location"
              value={profileData.location}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-500 transition">
              Save Changes
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-400 transition">
              Delete Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile
