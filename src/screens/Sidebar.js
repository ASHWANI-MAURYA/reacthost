import React from 'react';
import { FaHome, FaUser, FaBeer, FaDonate, FaVideo, FaBookOpen, FaUsers, FaStickyNote } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (


    <div onClick={toggleSidebar} className={`SideDrawerborderColor fixed  inset-y-0 left-0 w-full h-100 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out `} >
      <div className={`SideDrawerBgColor SideDrawerborderColor fixed  inset-y-0 left-0 w-70 h-100 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out `} >
        <div>
          <div className='w-full'>
            <button onClick={toggleSidebar} className="color text-4xl ml-40 ">&times;</button>
          </div>
          <div className="w-64 p-4 mt-5">
            <div className="mb-0 sideDrawertextcolor" >
              {/* <h2 className="text-lg font-semibold mb-4">Mail</h2> */}
              <Link to="/" className="flex  items-center py-2 color border  mt-3 rounded-lg px-2 transition duration-200">
                <FaHome className="mr-3 text-2xl sideDrawertextcolor" />
                <p className='sideDrawertextcolor'>
                  Home
                </p>
                {/* <span className="ml-auto bg-yellow-300 rounded-full px-2 py-1 text-sm color">24</span> */}
              </Link>
              <Link to="/" className="flex  items-center py-2 color border  mt-3 rounded-lg px-2 transition duration-200">
                <FaUser className="mr-3 text-2xl sideDrawertextcolor" />
                <p className='sideDrawertextcolor'>
                  Profile
                </p>
              </Link>
              <Link to="/" className="flex  items-center py-2 color border  mt-3 rounded-lg px-2 transition duration-200">
                <FaBeer className="mr-3 text-2xl sideDrawertextcolor" />
                <p className='sideDrawertextcolor'>

                  Booking / Order List
                </p>
              </Link>
              <Link to="/" className="flex  items-center py-2 color border  mt-3 rounded-lg px-2 transition duration-200">
                <FaDonate className="mr-3 text-2xl sideDrawertextcolor" />
                <p className='sideDrawertextcolor'>
                  Donation List
                </p>
              </Link>
            </div>
            <div>
              <Link to="/" className="flex  items-center py-2 color border  mt-3 rounded-lg px-2 transition duration-200">
                <FaVideo className="mr-3 text-2xl sideDrawertextcolor" />
                <p className='sideDrawertextcolor'>
                  Live Darshan
                </p>
              </Link>
              <Link to="/" className="flex items-center py-2 color border  mt-3 rounded-lg px-2 transition duration-200">
                <FaBookOpen className="mr-3 text-2xl sideDrawertextcolor" />
                <p className='sideDrawertextcolor'>
                  e-Library
                </p>
              </Link>
              <Link to="/" className="flex items-center py-2 color border  mt-3 rounded-lg px-2 transition duration-200">
                <FaUsers className="mr-3 text-2xl sideDrawertextcolor" />
                <p className='sideDrawertextcolor'>
                  About Us
                </p>
              </Link>
              <Link to="/" className="flex items-center py-2 color border  mt-3 rounded-lg px-2 transition duration-200 ">
                <FaStickyNote className="mr-3 text-2xl sideDrawertextcolor" />
                <p className='sideDrawertextcolor'>
                  Terms And Conditions
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
