// src/Header.js
import React from "react";
import { FaHome, FaSearch, FaBell, FaUser } from "react-icons/fa";
import Carousel from "../carousel/carousel";
const Header = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <>
      <div className="h-full">
        <div className=" w-full z-50 fixed">
          <div className="top-0 left-0 w-full heading text-white flex items-center py-3  border-b-2">
            {isSidebarOpen ? <button onClick={toggleSidebar} className="text-white text-3xl ml-4 text-white">&#x2715;</button>
              : <button onClick={toggleSidebar} className="text-white text-3xl ml-4 text-white">&#9776;</button>}
            <div className="ml-10">
              <h2 className="font-medium text-2xl text-white">Shri Kashi Vishwanath</h2>
            </div>
          </div>
        </div>
        <div className="z-50">
          <Carousel />
        </div>
      </div>
    </>
  );
};

// const TabItem = ({ icon, label }) => {
//   return (
//     <div className="flex flex-col items-center cursor-pointer hover:text-gray-400">
//       {icon}
//       <span className="text-xs">{label}</span>
//     </div>
//   );
// };

export default Header;
