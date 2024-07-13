// src/components/BackgroundVideo.js
import React from 'react';

const BackgroundVideo = ({ children }) => {
    return (
        <div className="w-full flex items-center justify-center bg-black relative overflow-hidden rounded-xl">
            <video
                autoPlay
                muted
                loop
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src="https://uptourism.gov.in/images/forest-water.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
            </video>

            <div className="relative z-10 flex-col items-center justify-center text-white p-4">
                {children}
            </div>
        </div>
    );
};

export default BackgroundVideo;
