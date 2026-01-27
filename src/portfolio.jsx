import { useState } from "react";

export default function Portfolio() {
  const designs = [
    {
      id: 1,
      title: "BudgetWise",
      description:
        "An all-in-one financial management app built for students and scholars.",
      images: [
        "/designs/design-budetwisedash.jpg",
        "/designs/design-budgetwisesignin.png",
        "/designs/design-budgetwiselp.png",
        "/designs/design-budgetwisetarp.png",
      ],
    },
    {
      id: 2,
      title: "Doorlivery Express",
      description: "Mobile-first responsive design with smooth interactions",
      images: ["/designs/design-doorlivery.jpg"],
    },
    {
      id: 3,
      title: "Eureka - STEM Academic Organization",
      description: "Data visualization dashboard with real-time updates",
      images: [
        "/designs/design-eureka-1.png",
        "/designs/design-eureka-2.png",
        "/designs/design-eureka-3.png",
        "/designs/design-eureka-4.png",
      ],
    },
    {
      id: 4,
      title: "UPCSG Internship Fair",
      description: "E-commerce platform with seamless checkout flow",
      images: ["/designs/design-internship.png"],
    },
    {
      id: 5,
      title: "Freelance Work",
      description: "Creative portfolio showcase with parallax effects",
      images: ["/designs/design-pcr.jpg"],
    },
    {
      id: 6,
      title: "Snippit",
      description: "Social media platform with engaging user experience",
      images: [
        "/designs/design-snippit.jpg",
        "/designs/design-snippit-2.jpg",
        "/designs/design-snippit-3.jpg",
      ],
    },
    {
      id: 7,
      title: "Tektoks",
      description: "Social media platform with engaging user experience",
      images: [
        "/designs/design-tektoksposter.png",
        "/designs/design-tektoksguests.png",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#28272A] px-8 py-16 text-white md:px-8">
      <header className="text-center mb-20 animate-fade-down">
        <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-4 bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
          Design Portfolio
        </h1>
        <p className="text-lg text-gray-400 font-light tracking-wider">
          Explore my creative work in UI and Layout
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % design.images.length);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex(
      (prev) => (prev - 1 + design.images.length) % design.images.length,
    );
  };

  const handleImageClick = (e) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="perspective-1000 animate-fade-up cursor-pointer"
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => {
          setIsFlipped(false);
          setCurrentImageIndex(0);
        }}
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div
          className={`relative w-full h-[420px] transition-transform duration-700 ease-out preserve-3d ${isFlipped ? "rotate-y-180" : ""}`}
        >
          {/* back view (frosted glass) */}
          <div className="absolute w-full h-full backface-hidden rounded-2xl overflow-hidden bg-[rgba(60,60,65,0.4)] border border-white/10">
            <div className="w-full h-full relative overflow-hidden">
              <div className="w-full h-full backdrop-blur-[20px] backdrop-saturate-[180%] bg-[rgba(80,80,85,0.3)] relative">
                <div className="absolute w-[200%] h-[200%] animate-float bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.08)_0%,transparent_50%),radial-gradient(circle_at_40%_80%,rgba(255,255,255,0.06)_0%,transparent_50%)]"></div>
              </div>
            </div>
          </div>
          {/* front view (images) */}
          <div className="absolute w-full h-full backface-hidden rounded-2xl overflow-hidden bg-[#1f1e21] border border-white/15 rotate-y-180 flex flex-col">
            <div className="flex-1 bg-[#2a2a2d] relative flex items-center justify-center border-b border-white/10 group">
              {design.images[currentImageIndex] === "#" ? (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#3a3a3d] to-[#2a2a2d]">
                  <span className="text-8xl font-extralight text-white/15">
                    #
                  </span>
                </div>
              ) : (
                <img
                  src={design.images[currentImageIndex]}
                  alt={`${design.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={handleImageClick}
                />
              )}

              {design.images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70 z-10"
                    aria-label="Previous image"
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>

                  <button
                    onClick={handleNextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70 z-10"
                    aria-label="Next image"
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>

                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    {design.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex(idx);
                        }}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                          idx === currentImageIndex
                            ? "bg-white w-4"
                            : "bg-white/40 hover:bg-white/60"
                        }`}
                        aria-label={`Go to image ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}

              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div className="bg-black/50 backdrop-blur-sm border border-white/20 rounded-lg px-2 py-1 text-xs text-white/80">
                  Click to view
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-normal mb-3 text-white tracking-tight">
                {design.title}
              </h3>
              <p className="text-[15px] text-gray-400 leading-relaxed font-light">
                {design.description}
              </p>
              {design.images.length > 1 && (
                <p className="text-xs text-gray-500 mt-2 font-light">
                  {currentImageIndex + 1} / {design.images.length}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleCloseModal}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors z-20"
              aria-label="Close"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {design.images.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors z-20"
                  aria-label="Previous image"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  onClick={handleNextImage}
                  className="absolute right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors z-20"
                  aria-label="Next image"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </>
            )}

            <img
              src={design.images[currentImageIndex]}
              alt={`${design.title} - Image ${currentImageIndex + 1}`}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 flex flex-col items-center gap-2">
              <p className="text-white font-light">{design.title}</p>
              {design.images.length > 1 && (
                <>
                  <div className="flex gap-1.5">
                    {design.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex(idx);
                        }}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                          idx === currentImageIndex
                            ? "bg-white w-4"
                            : "bg-white/40 hover:bg-white/60"
                        }`}
                        aria-label={`Go to image ${idx + 1}`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-gray-400">
                    {currentImageIndex + 1} / {design.images.length}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
