import React from "react";

const Img = () => {
  return (
    <div className="relative w-full min-h-125 bg-black flex items-center justify-center">
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-contain bg-black"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://res.cloudinary.com/dgfp5n7bn/video/upload/v1780216022/trophy_lrxgsy.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default Img;
