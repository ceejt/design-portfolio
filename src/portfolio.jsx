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
          Explore my creative work
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
    ></div>
  );
}
