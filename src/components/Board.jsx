import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBars, 
  faHome, 
  faSearch, 
  faBell, 
  faUser, 
  faCalendarAlt, 
  faBriefcase, 
  faUserEdit, 
  faGraduationCap, 
  faUpload, 
  faFileUpload, 
  faUserCog, 
  faQuestionCircle, 
  faSignOutAlt 
} from '@fortawesome/free-solid-svg-icons';

function Board() {
  // State to toggle sidebar
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside 
        className={`bg-gray-100 w-64 p-4 fixed lg:static h-full z-20 transform lg:translate-x-0 transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <ul>
          <li className="mb-4 flex items-center hover:text-blue-500">
            <FontAwesomeIcon icon={faHome} className="mr-2" />
            <a href="#">Dashboard</a>
          </li>
          <li className="mb-4 flex items-center hover:text-blue-500">
            <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
            <a href="#">Calendar</a>
          </li>
          <li className="mb-4 flex items-center hover:text-blue-500">
            <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
            <a href="#">Jobs</a>
          </li>
          <li className="mb-4 flex items-center hover:text-blue-500">
            <FontAwesomeIcon icon={faUserEdit} className="mr-2" />
            <a href="#">Build Your Resume</a>
          </li>
          <li className="mb-4 flex items-center hover:text-blue-500">
            <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />
            <a href="#">Current Academics</a>
          </li>
          <li className="mb-4 flex items-center hover:text-blue-500">
            <FontAwesomeIcon icon={faUpload} className="mr-2" />
            <a href="#">Upload Additional Resumes</a>
          </li>
          <li className="mb-4 flex items-center hover:text-blue-500">
            <FontAwesomeIcon icon={faFileUpload} className="mr-2" />
            <a href="#">Upload Offer Letter</a>
          </li>
          <li className="mb-4 flex items-center hover:text-blue-500">
            <FontAwesomeIcon icon={faUserCog} className="mr-2" />
            <a href="#">Manage Profile</a>
          </li>
          <li className="mb-4 flex items-center hover:text-blue-500">
            <FontAwesomeIcon icon={faQuestionCircle} className="mr-2" />
            <a href="#">Help Doc</a>
          </li>
          <li className="mb-4 flex items-center hover:text-blue-500">
            <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
            <a href="#">Logout</a>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-grow">
        {/* Header */}
        <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
          <div className="text-xl font-bold">Dashboard</div>

          {/* Hamburger Icon for mobile screens */}
          <button 
            className="lg:hidden" 
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <FontAwesomeIcon icon={faBars} className="text-white text-2xl" />
          </button>

          <div className="hidden lg:flex items-center">
            <FontAwesomeIcon icon={faSearch} className="mr-4 cursor-pointer hover:text-gray-300" />
            <FontAwesomeIcon icon={faBell} className="mr-4 cursor-pointer hover:text-gray-300" />
            <FontAwesomeIcon icon={faUser} className="cursor-pointer hover:text-gray-300" />
          </div>
        </header>

        {/* Main Content Area */}
        <main className="p-4">
          {/* Example: Job Listings Section */}
          <h2 className="text-2xl font-bold mb-4">Recent Jobs</h2>
          {/* Add your job table, search, or filters here */}
        </main>
      </div>
    </div>
  );
}

export default Board;

