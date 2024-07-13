// src/Footer.js
import React from "react";
import { FaHome, FaSearch, FaBell, FaUser } from "react-icons/fa";
import BottomPage from '../../Images/MANDIR-VECTORcolorchange.png'
const Footer = () => {
  return (<>
    <div className="fixed z-50">
      {/* <img src={BottomPage} alt='Img' /> */}
      <div className="fixed bottom-0 left-0 w-full heading text-white flex justify-around items-center py-4">
        <TabItem icon={<FaHome />} label="Home" />
        <TabItem icon={<FaSearch />} label="Search" />
        <TabItem icon={<FaBell />} label="Notifications" />
        <TabItem icon={<FaUser />} label="Profile" />
      </div>
    </div>
  </>
  );
};

const TabItem = ({ icon, label }) => {
  return (
    <>
      <div className="flex flex-col items-center cursor-pointer hover:text-gray-400 text-white">
        {icon}
        <span className="text-xs">{label}</span>
      </div>
    </>
  );
};

export default Footer;
