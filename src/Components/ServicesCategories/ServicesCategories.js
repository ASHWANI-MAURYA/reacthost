import React from 'react';
import { Link } from "react-router-dom";

const ServicesCategories = ({ service, index }) => {
  return (
    <div className="p-1 flex gap-3">
      <div key={index} className="border justify-center flex flex-col items-center flex-shrink-0 CustomWidth ">
        <img className='serviceicon' src={service.icon_image1} alt='service-icon' />
        <div className="mt-2 text-center servicename">{service.child_title1}</div>
      </div>
      <div key={index} className="border justify-center flex flex-col items-center flex-shrink-0 CustomWidth ">
        <img className='serviceicon' src={service.icon_image2} alt='service-icon' />
        <div className="mt-2 text-center servicename">{service.child_title2}</div>
      </div>
      <div key={index} className="border justify-center flex flex-col items-center flex-shrink-0 CustomWidth ">
        <img className='serviceicon' src={service.icon_image3} alt='service-icon' />
        <div className="mt-2 text-center servicename">{service.child_title3}</div>
      </div>
      <div key={index} className="border justify-center flex flex-col items-center flex-shrink-0 CustomWidth ">
        <img className='serviceicon' src={service.icon_image4} alt='service-icon' />
        <div className="mt-2 text-center servicename">{service.child_title4}</div>
      </div>
    </div>
  );
};

export default ServicesCategories;
