import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import userimg from '../images/userprofile.png'

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  return (
    <header className="flex border-b bg-white font-sans min-h-[70px] tracking-wide relative z-50 shadow-md">
      <div className="flex flex-wrap items-center justify-between px-6 py-3 gap-4 w-full">
        {/* Logo */}
        <a href="#">
          <p className="text-2xl font-poppins font-semibold text-slate-900"><Link to='/'>INFRASHARE</Link></p>
        </a>

        {/* Navbar links for larger screens */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-10">
          <a href="#" className="hover:text-[#dc8c4f] transition-colors duration-300 text-[16px] font-bold block font-firesans uppercase"><Link to='/'>Home</Link></a>

          {/* Resources Link with Dropdown */}
          <li className='group max-lg:border-b max-lg:py-3 relative list-none'>
            <a href='#' className='hover:text-[#dc8c4f] transition-all ease-in-out duration-300 text-gray-600 text-[16px] font-bold lg:hover:fill-[#dc8c4f] block font-firesans uppercase'>
              Resources
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" className="ml-1 inline-block transition-all ease-in-out duration-300 hover:text-[#dc8c4f]" viewBox="0 0 24 24">
                <path d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z" />
              </svg>
            </a>

            {/* Dropdown menu */}
            <ul className='absolute shadow-lg bg-white space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>
              <li className='border-b py-2'><a href='#' className='hover:text-[#40b078] transition-all text-gray-600 text-[15px] font-bold block font-poppins'><Link to='/equipment'>Equipments</Link></a></li>
              <li className='border-b py-2'><a href='javascript:void(0)' className='hover:text-[#40b078] transition-all text-gray-600 text-[15px] font-bold block font-poppins'>Research Labs</a></li>
              <li className='border-b py-2'><a href='javascript:void(0)' className='hover:text-[#40b078] transition-all text-gray-600 text-[15px] font-bold block font-poppins'>Incubation Centers</a></li>
              <li className='border-b py-2'><a href='javascript:void(0)' className='hover:text-[#40b078] transition-all text-gray-600 text-[15px] font-bold block font-poppins'>Investment</a></li>
            </ul>
          </li>

          <a href="javascript:void(0)" className="hover:text-[#dc8c4f] transition-colors duration-300 text-[16px] font-bold text-gray-600 block font-firesans uppercase"><Link to='/about'>About</Link></a>
          <a href="javascript:void(0)" className="hover:text-[#dc8c4f] transition-colors duration-300 text-[16px] font-bold text-gray-600 block font-firesans uppercase"><Link to='/contact'>Contact</Link></a>

          {/* Profile Component */}
          <div className="relative">
            <button onClick={toggleProfileDropdown} className="flex items-center space-x-2 text-gray-600">
              <img src={userimg} alt="Profile" className="w-8 h-8 rounded-full" />
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z" />
              </svg>
            </button>

            {/* Profile dropdown */}
            {isProfileDropdownOpen && (
              <ul className="absolute right-0 mt-3 w-48 bg-white border border-gray-500 shadow-lg">
                <li className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer border-b-2 border-blue-200 font-poppins"><Link to='/profile'>View Profile</Link></li>
                <li className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer border-b-2 border-blue-200 font-poppins"><Link to='/settings'>Settings</Link></li>
                <li className="px-4 py-2 text-slate-900 hover:bg-gray-100 cursor-pointer border-b-2 border-blue-200 font-poppins"><Link to='/logout'>Logout</Link></li>
              </ul>
            )}
          </div>
        </div>

        {/* Hamburger icon for smaller screens */}
        <button onClick={toggleSidebar} className="lg:hidden">
          <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
          </svg>
        </button>
      </div>

      {/* Sidebar for smaller screens */}
      <div className={`fixed inset-0 z-40 transition-transform duration-300 ease-in-out transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:hidden`}>
        <div className="fixed inset-0 bg-black opacity-50 z-30" onClick={toggleSidebar}></div>

        <div className="relative z-40 w-64 bg-white shadow-lg h-full p-6">
          <button onClick={toggleSidebar} className="absolute top-4 right-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <ul className="space-y-6">
            <li><a href="#" className="hover:text-blue-600 text-[16px] font-bold text-blue-600 block font-firesans uppercase"><Link to='/'>Home</Link></a></li>

            {/* Resources with dropdown in sidebar */}
            <li className="relative" onClick={toggleDropdown}>
              <a href="#" className="hover:text-[#dc8c4f] transition-all ease-in-out duration-300 text-gray-600 text-[16px] font-bold block font-firesans uppercase">
                Resources
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" className="ml-1 inline-block transition-all ease-in-out duration-300 hover:text-[#dc8c4f]" viewBox="0 0 24 24">
                  <path d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z" />
                </svg>
              </a>

              {isDropdownOpen && (
                <ul className="pl-4 space-y-2">
                  <li className="border-b py-2"><a href="#" className="hover:text-[#40b078] transition-all text-gray-600 text-[15px] font-bold block font-poppins"><Link to='/equipment'>Equipments</Link></a></li>
                  <li className="border-b py-2"><a href="javascript:void(0)" className="hover:text-[#40b078] transition-all text-gray-600 text-[15px] font-bold block font-poppins">Research Labs</a></li>
                  <li className="border-b py-2"><a href="javascript:void(0)" className="hover:text-[#40b078] transition-all text-gray-600 text-[15px] font-bold block font-poppins">Incubation Centers</a></li>
                  <li className="border-b py-2"><a href="javascript:void(0)" className="hover:text-[#40b078] transition-all text-gray-600 text-[15px] font-bold block font-poppins">Investment</a></li>
                </ul>
              )}
            </li>

            <li><a href="#" className="hover:text-[#dc8c4f] transition-colors duration-300 text-[16px] font-bold text-gray-600 block font-firesans uppercase"><Link to='/contact'>Contact</Link></a></li>

            {/* Profile component in sidebar */}
            <li className="relative">
              <button onClick={toggleProfileDropdown} className="flex items-center space-x-2 font-bold text-gray-600">
                <img src={userimg} alt="Profile" className="w-8 h-8 rounded-full" />
                <span>Profile</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" className="ml-1 inline-block transition-all ease-in-out duration-300 hover:text-[#dc8c4f]" viewBox="0 0 24 24">
                  <path d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z" />
                </svg>
              </button>

              {isProfileDropdownOpen && (
                <ul className="pl-4 space-y-2">
                  <li className="border-b py-2"><Link to="/profile" className="hover:text-[#40b078] transition-all text-gray-600 text-[15px] font-bold block">View Profile</Link></li>
                  <li className="border-b py-2"><Link to="/settings" className="hover:text-[#40b078] transition-all text-gray-600 text-[15px] font-bold block">Settings</Link></li>
                  <li className="border-b py-2"><Link to="/logout" className="hover:text-[#40b078] transition-all text-gray-600 text-[15px] font-bold block">Logout</Link></li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
