import { useState } from "react";

export default function Portfolio() {
  const designsByYear = {
    2025: [
      {
        id: 1,
        title: "BudgetWise",
        description:
          "Designed a variety of pages for BudgetWise, including the sign-in/sign-up page, main dashboard, landing page, and poster.",
        images: [
          "/designs/design-budetwisedash.jpg",
          "/designs/design-budgetwisesignin.png",
          "/designs/design-budgetwiselp.png",
          "/designs/design-budgetwisetarp.png",
        ],
      },
      {
        id: 5,
        title: "Freelance Work",
        description:
          "Created own assets and illustrations for a client’s final Biology project related to PCR. These visuals improved conceptual clarity and supported accurate presentation of complex biological processes.",
        images: ["/designs/design-pcr.jpg"],
      },
      {
        id: 6,
        title: "Snippit",
        description:
          "Applied sleek and modern intuitive UI design principles for a clip cutter's landing page. ",
        images: [
          "/designs/design-snippit.jpg",
          "/designs/design-snippit-2.jpg",
          "/designs/design-snippit-3.jpg",
        ],
      },
    ],
    2024: [
      {
        id: 7,
        title: "UPCSG Tektoks",
        description:
          "As a creatives member of UP Computer Science Guild's Tektoks program, I designed posters and social media cards that boosted user engagement and public information.",
        images: [
          "/designs/design-tektoksposter.png",
          "/designs/design-tektoksguests.png",
        ],
      },
      {
        id: 4,
        title: "UPCSG Internship Fair",
        description:
          "Designed an internship fair poster following UP Computer Science Guild's design identity and theme.",
        images: ["/designs/design-internship.png"],
      },
    ],
    2023: [
      {
        id: 3,
        title: "Eureka - STEM Academic Organization",
        description:
          "Volunteered to design and create social media publication materials for our SHS academic organization. Despite not being a member of the creatives committee, I contributed in applying creative design principles to produce visually compelling pubmats and posters that enhanced the organization’s visual identity and audience appeal.",
        images: [
          "/designs/design-eureka-1.png",
          "/designs/design-eureka-2.png",
          "/designs/design-eureka-3.png",
          "/designs/design-eureka-4.png",
          "/designs/design-eureka-5.png",
        ],
      },
      {
        id: 2,
        title: "Doorlivery Express",
        description:
          "First experience in designing user interface and wireframes in Figma for our ICT/Entrepreneurship final requirement. As the programmer and brand identity lead, I helped the group develop a consistent visual language and intuitive layout inspired by similar real-world applications.",
        images: [
          "/designs/design-doorlivery.jpg",
          "/designs/design-doorlivery-2.jpg",
          "/designs/design-doorlivery-3.jpg",
          "/designs/design-doorlivery-4.jpg",
        ],
      },
    ],
  };
  const tools = [
    {
      name: "Figma",
      icon: (
        <img
          src="/designs/icons-figma.svg"
          alt="Canva Logo"
          className="w-10 h-10 mb-3 opacity-80 group-hover:scale-110 transition-transform duration-300"
        />
      ),
    },
    {
      name: "Canva",
      icon: (
        <img
          src="/designs/icons-canva.svg"
          alt="Canva Logo"
          className="w-10 h-10 mb-3 opacity-80 group-hover:scale-110 transition-transform duration-300"
        />
      ),
    },
    {
      name: "Adobe Lightroom",
      icon: (
        <img
          src="/designs/icons-lightroom.svg"
          alt="Canva Logo"
          className="w-10 h-10 mb-3 opacity-80 group-hover:scale-110 transition-transform duration-300"
        />
      ),
    },
    {
      name: "Adobe Photoshop",
      icon: (
        <img
          src="/designs/icons-photoshop.svg"
          alt="Canva Logo"
          className="w-10 h-10 mb-3 opacity-80 group-hover:scale-110 transition-transform duration-300"
        />
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#28272A] px-8 py-16 text-white md:px-8">
      <header className="text-center mb-20 animate-fade-down">
        <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-4 bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent pb-2">
          Design Portfolio
        </h1>
        <p className="text-lg text-gray-400 font-light tracking-wider">
          Cyril Josef Tinae | Explore my creative work in UI and Layout Design
        </p>
      </header>

      <div className="max-w-7xl mx-auto mb-32">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-sm uppercase tracking-[0.3em] text-gray-500 font-medium">
            Toolkit
          </h2>
          <div className="flex-1 h-px bg-white/10"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="group relative bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center transition-all duration-300 hover:bg-white/10 hover:border-white/20"
            >
              <span className="text-2xl mb-3 opacity-80 group-hover:scale-110 transition-transform duration-300">
                {tool.icon}
              </span>
              <span className="text-sm font-light tracking-wide text-gray-300 group-hover:text-white transition-colors">
                {tool.name}
              </span>
              <div className="absolute inset-0 bg-white/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-20">
        {Object.entries(designsByYear)
          .sort(([yearA], [yearB]) => yearB - yearA)
          .map(([year, designs]) => (
            <section key={year} className="space-y-8">
              <div className="flex items-center gap-4">
                <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">
                  {year}
                </h2>
                <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {designs.map((design, index) => (
                  <DesignCard key={design.id} design={design} index={index} />
                ))}
              </div>
            </section>
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
          className={`relative w-full h-[500px] transition-transform duration-700 ease-out preserve-3d ${isFlipped ? "rotate-y-180" : ""}`}
        >
          {/* back view (frosted glass) */}
          <div className="absolute w-full h-full backface-hidden rounded-2xl overflow-hidden border border-white/10">
            <div className="w-full h-full relative">
              {/* blurred image background */}
              {design.images[0] === "#" ? (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#3a3a3d] to-[#2a2a2d]">
                  <span className="text-8xl font-extralight text-white/15">
                    #
                  </span>
                </div>
              ) : (
                <>
                  <img
                    src={design.images[0]}
                    alt={design.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Frosted glass overlay */}
                  <div className="absolute inset-0 backdrop-blur-[12px] backdrop-saturate-[140%] bg-[rgba(40,40,42,0.6)]"></div>
                </>
              )}
            </div>
          </div>
          {/* front view (images) */}
          <div className="absolute w-full h-full backface-hidden rounded-2xl overflow-hidden bg-[#1f1e21] border border-white/15 rotate-y-180 flex flex-col">
            <div className="h-[350px] bg-[#2a2a2d] relative flex items-center justify-center border-b border-white/10 group overflow-hidden group">
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
              {/* nav buttons */}
              {design.images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70 z-20"
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

            <div className="flex-1 p-6 flex flex-col justify-between">
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
      {/* clicked full image modal */}
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
