import React, { useState } from "react";

const Expertise = () => {
  const [hoveredSection, setHoveredSection] = useState(null);

  const sections = [
    {
      id: "digital-strategy",
      title: "Digital Strategy",
      imageSrc:
        "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1780216025/strategy_jvj5qs.jpg",
      textColor: "text-slate-500",
    },
    {
      id: "branding",
      title: "Branding",
      imageSrc:
        "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1780216023/branding_gvwv6q.jpg",
      textColor: "text-slate-600",
    },
    {
      id: "web-dev",
      title: "Web + App Development",
      imageSrc:
        "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1780216023/development_kbfscd.jpg",
      textColor: "text-slate-700",
    },
    {
      id: "user-experience",
      title: "User Experience",
      imageSrc:
        "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1780216022/ux_aaej3m.jpg",
      textColor: "text-slate-800",
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      imageSrc:
        "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1780216024/marketing_oulaqy.jpg",
      textColor: "text-slate-900",
    },
    {
      id: "media-production",
      title: "Media Production",
      imageSrc:
        "https://res.cloudinary.com/dgfp5n7bn/image/upload/v1780216025/production_ia0dvo.jpg",
      textColor: "text-slate-500",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-black text-white">
      {/* Header Section */}
      <div className="relative z-10 px-6 lg:px-60 py-20">
        <h1 className="text-lg lg:text-xl mb-6">/ Expertise</h1>

        <div className="space-y-2 text-lg lg:text-2xl leading-snug">
          <p>We are passionate about uncovering the best</p>
          <p>digital innovations for forward-thinking</p>
          <p>brands looking to push boundaries and drive</p>
          <p>significant impact.</p>
        </div>
      </div>

      {/* Grid Section */}
      <div className="relative z-10 px-6 lg:px-40 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {sections.map((section) => (
          <div
            key={section.id}
            className="relative h-60 lg:h-72 overflow-hidden cursor-pointer group"
            onMouseEnter={() => setHoveredSection(section.id)}
            onMouseLeave={() => setHoveredSection(null)}
          >
            {/* Background Image */}
            <img
              src={section.imageSrc}
              alt={section.title}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                hoveredSection === section.id
                  ? "opacity-100 scale-105"
                  : "opacity-0 scale-100"
              }`}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Title */}
            <h2
              className={`relative z-10 p-6 text-2xl lg:text-5xl font-light transition-colors duration-300 ${
                hoveredSection === section.id ? section.textColor : "text-white"
              }`}
            >
              {section.title}
            </h2>
          </div>
        ))}
      </div>

      {/* Footer Link */}
      <div className="px-6 lg:px-40 pb-10 text-white-400 justify-center text-center text-lg lg:text-xl cursor-pointer">
        Explore all Expertise →
      </div>
    </div>
  );
};

export default Expertise;
