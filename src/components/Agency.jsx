import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Agency() {
  useEffect(() => {
    // IMAGE ANIMATION
    gsap.fromTo(
      ".agency-img",
      {
        filter: "brightness(0.8) ",
        scale: 1.05,
      },
      {
        filter: "brightness(2.4) ",
        scale: 1,
        scrollTrigger: {
          trigger: ".agency-text",
          start: "top 40%",
          end: "bottom 20%",
          scrub: true,
        },
      },
    );

    // OVERLAY ANIMATION (separate)
    gsap.fromTo(
      ".overlay",
      { opacity: 0.7 },
      {
        opacity: 0.2,
        scrollTrigger: {
          trigger: ".agency-text",
          start: "top 40%",
          end: "bottom 20%",
          scrub: true,
        },
      },
    );
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden ">
      <img
        src="https://res.cloudinary.com/dgfp5n7bn/image/upload/v1780216022/about_zc10es.webp"
        alt="Agency"
        className="absolute inset-0 h-full w-full object-cover agency-img"
      />

      <div className="absolute inset-0 overlay" />

      <div className="relative z-10 px-12 md:px-55 py-32  flex flex-col justify-center min-h-screen text-[#FFDCA8] agency-text translate-x-4">
        <p className="text-sm uppercase opacity-70 ">/ The Agency</p>

        <h2 className="text-4xl md:text-7xl font-normal mt-6 leading-tight">
          We Provoke <br />
          what's Possible.
        </h2>

        <p className="mt-6 text-lg md:text-xl opacity-95 max-w-3xl">
          We're an award-winning strategic digital innovation agency.
        </p>
      </div>
    </div>
  );
}

export default Agency;
