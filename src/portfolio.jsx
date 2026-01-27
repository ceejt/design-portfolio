import { useState } from "react";

export default function Portfolio() {
  const designs = [
    {
      id: 1,
      title: "Design Project 1",
      description: "A sophisticated web application with modern UI patterns",
      image: "designs/design-budetwisedash.jpg",
    },
    {
      id: 2,
      title: "Design Project 2",
      description: "Mobile-first responsive design with smooth interactions",
      image: "designs/design-doorlivery.jpg",
    },
    {
      id: 3,
      title: "Design Project 3",
      description: "Data visualization dashboard with real-time updates",
      image: "designs/design-eureka-1.png#",
    },
    {
      id: 4,
      title: "Design Project 4",
      description: "E-commerce platform with seamless checkout flow",
      image: "designs/design-internship.png",
    },
    {
      id: 5,
      title: "Design Project 5",
      description: "Creative portfolio showcase with parallax effects",
      image: "designs/design-pcr.jpg#",
    },
    {
      id: 6,
      title: "Design Project 6",
      description: "Social media platform with engaging user experience",
      image: "designs/design-snippit.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#28272A] px-8 py-16 text-white md:px-8">
      <header className="text-center mb-20 animate-fade-down">
        <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-4 bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
          Design Portfolio
        </h1>
        <p className="text-lg text-gray-400 font-light tracking-wider">
          Explore my creative work in UI & Layout Design
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {designs.map((design, index) => (
          <DesignCard key={design.id} design={design} index={index} />
        ))}
      </div>
    </div>
  );
}

function DesignCard({ design, index }) {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div
      className="perspective-1000 animate-fade-up cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div
        className={`relative w-full h-[420px] transition-transform duration-700 ease-out preserve-3d ${isFlipped ? "rotate-y-180" : ""}`}
      >
        <div className="absolute w-full h-full backface-hidden rounded-2xl overflow-hidden bg-[rgba(60,60,65,0.4)] border border-white/10">
          <div className="w-full h-full relative overflow-hidden">
            <div className="w-full h-full backdrop-blur-[20px] backdrop-saturate-[180%] bg-[rgba(80,80,85,0.3)] relative">
              <div className="absolute w-[200%] h-[200%] animate-float bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.08)_0%,transparent_50%),radial-gradient(circle_at_40%_80%,rgba(255,255,255,0.06)_0%,transparent_50%)]"></div>
            </div>
          </div>
        </div>
        <div className="absolute w-full h-full backface-hidden rounded-2xl overflow-hidden bg-[#1f1e21] border border-white/15 rotate-y-180 flex flex-col">
          <div className="flex-1 bg-[#2a2a2d] flex items-center justify-center border-b border-white/10">
            {design.image === "#" ? (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#3a3a3d] to-[#2a2a2d]">
                <span className="text-8xl font-extralight text-white/15">
                  #
                </span>
              </div>
            ) : (
              <img
                src={design.image}
                alt={design.title}
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-normal mb-3 text-white tracking-tight">
              {design.title}
            </h3>
            <p className="text-[15px] text-gray-400 leading-relaxed font-light">
              {design.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
