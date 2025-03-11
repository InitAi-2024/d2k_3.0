import React from "react";

// Inner component for the sponsors content
const SponsorsContent: React.FC = () => {
  // Main sponsors for the first row
  const mainSponsors = [
    {
      tier: "Title Sponsor",
      name: "Title Sponsor",
      image:
        "https://res.cloudinary.com/dk5acaaxg/image/upload/v1741716856/init-ai/p2x8uaez5epvccxhtnmh.png",
      link: "https://www.google.com",
    },
    {
      tier: "Associate Partner",
      name: "Associate Partner",
      image:
        "https://res.cloudinary.com/dk5acaaxg/image/upload/v1741697474/init-ai/denbxmd0nvtvfx4gaagr.png",
      link: "https://www.google.com",
    },
    {
      tier: "Associate Sponsorship",
      name: "Associate Sponsorship",
      image:
        "https://res.cloudinary.com/dk5acaaxg/image/upload/v1741697035/init-ai/f9zrcgdiozww4cngxnn9.png",
      link: "https://www.google.com",
    },
  ];

  // Secondary sponsors for the second row
  const secondarySponsors = [
    {
      tier: "Gold Sponsor",
      name: "Devfolio",
      image:
        "https://res.cloudinary.com/dk5acaaxg/image/upload/v1741717108/init-ai/jkpw3yiz7e4216tvafrn.png",
      link: "https://www.google.com",
    },
    {
      tier: "Powered By",
      name: "Powered By",
      image:
        "https://res.cloudinary.com/dk5acaaxg/image/upload/v1741697571/init-ai/mck4ih9peqi3p0hya8gk.png",
      link: "https://www.google.com",
    },
    {
      tier: "Silver Sponsor",
      name: "Silver Sponsor",
      image:
        "https://res.cloudinary.com/dk5acaaxg/image/upload/v1741697193/init-ai/mwc9icnmny4xtmvkfxzc.png",
      link: "https://www.google.com",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="space-y-20">
        {/* First Row - Main Sponsors */}
        <div className="space-y-12">
          <h3 className="text-3xl font-bold text-green-400 text-center matrix-glow">
            Main Sponsors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {mainSponsors.map((sponsor, index) => (
              <div key={index} className="space-y-4">
                <h4 className="text-xl font-bold text-green-300 text-center matrix-glow">
                  {sponsor.tier}
                </h4>
                <a
                  href={sponsor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                >
                  <div
                    className="relative backdrop-blur-md bg-black/30 rounded-xl 
                                border border-green-400/30 transition-all duration-300
                                group-hover:border-green-400/50 group-hover:bg-black/40
                              shadow-lg shadow-black/20 group-hover:shadow-green-400/10 p-4"
                  >
                    <div
                      className="relative rounded-lg
                                bg-transparent
                                  group-hover:shadow-[0_0_30px_rgba(74,222,128,0.2)]
                                transition-all duration-300 aspect-[3/2] flex items-center justify-center"
                    >
                      <img
                        src={sponsor.image}
                        alt={sponsor.name}
                        className="w-full h-full object-contain
                                 transition-transform duration-300 group-hover:scale-105
                                 filter brightness-110 contrast-125"
                      />
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Secondary Sponsors */}
        <div className="space-y-12">
          <h3 className="text-3xl font-bold text-green-400 text-center matrix-glow">
            Partners & Supporters
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {secondarySponsors.map((sponsor, index) => (
              <div key={index} className="space-y-4">
                <h4 className="text-xl font-bold text-green-300 text-center matrix-glow">
                  {sponsor.tier}
                </h4>
                <a
                  href={sponsor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                >
                  <div
                    className="relative backdrop-blur-md bg-black/30 rounded-xl 
                            border border-green-400/30 transition-all duration-300
                            group-hover:border-green-400/50 group-hover:bg-black/40
                            shadow-lg shadow-black/20 group-hover:shadow-green-400/10 p-4"
                  >
                    <div
                      className="relative rounded-lg
                              bg-transparent
                              group-hover:shadow-[0_0_30px_rgba(74,222,128,0.2)]
                              transition-all duration-300 aspect-video flex items-center justify-center"
                    >
                      <img
                        src={sponsor.image}
                        alt={sponsor.name}
                        className="w-full h-full object-contain
                             transition-transform duration-300 group-hover:scale-105
                             filter brightness-110 contrast-125"
                      />
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Sponsors component that includes the section container
const Sponsors: React.FC = () => {
  return (
    <section id="sponsors" className="relative z-10 py-20 bg-black/80">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center matrix-glow">
          Our Sponsors
        </h2>
        <SponsorsContent />
      </div>

      {/* Custom styles for glow effects */}
      <style>{`
        .matrix-glow {
          text-shadow: 0 0 5px rgba(74, 222, 128, 0.3),
                      0 0 10px rgba(74, 222, 128, 0.2);
        }
      `}</style>
    </section>
  );
};

export default Sponsors;
export { SponsorsContent };
