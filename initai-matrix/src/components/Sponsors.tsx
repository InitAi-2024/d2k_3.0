import React from "react";

// Sponsor data
const sponsors = {
  titleSponsor: {
    tier: "Title Sponsor",
    name: "Title Sponsor",
    image:
      "https://res.cloudinary.com/dk5acaaxg/image/upload/v1741716856/init-ai/p2x8uaez5epvccxhtnmh.png",
    link: "https://www.google.com",
  },
  associateSponsors: [
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
  ],
  otherSponsors: [
    {
      tier: "Gold Sponsor",
      name: "Gold Sponsor",
      image:
        "https://res.cloudinary.com/dk5acaaxg/image/upload/v1741717108/init-ai/jkpw3yiz7e4216tvafrn.png",
      link: "https://www.google.com",
    },
    {
      tier: "Silver Sponsor",
      name: "Silver Sponsor",
      image:
        "https://res.cloudinary.com/dk5acaaxg/image/upload/v1741697193/init-ai/mwc9icnmny4xtmvkfxzc.png",
      link: "https://www.google.com",
    },
  ],
};

const SponsorsContent: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 space-y-12">
      {/* Title Sponsor */}
      <div className="space-y-6">
        <h3 className="text-3xl font-bold text-green-400 text-center matrix-glow">
          Title Sponsor
        </h3>
        <div className="max-w-[320px] mx-auto">
          <a
            href={sponsors.titleSponsor.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block group relative overflow-hidden transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            <div className="relative backdrop-blur-md bg-black/30 rounded-lg border border-green-400/30 transition-all duration-300 group-hover:border-green-400/50 group-hover:bg-black/40 shadow-md shadow-black/20 group-hover:shadow-green-400/10 p-5">
              <div className="relative rounded-md bg-transparent group-hover:shadow-[0_0_30px_rgba(74,222,128,0.3)] transition-all duration-300 aspect-[4/3] flex items-center justify-center">
                <img
                  src={sponsors.titleSponsor.image}
                  alt={sponsors.titleSponsor.name}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 filter brightness-110 contrast-125"
                />
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* Associate Sponsors */}
      <div className="space-y-6">
        <h3 className="text-3xl font-bold text-green-400 text-center matrix-glow">
          Associate Sponsors
        </h3>
        <div className="grid grid-cols-2 gap-10">
          {sponsors.associateSponsors.map((sponsor) => (
            <div key={sponsor.name} className="max-w-[320px] mx-auto">
              <h4 className="text-base font-bold text-green-300 text-center matrix-glow">
                {sponsor.tier}
              </h4>
              <a
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group relative overflow-hidden transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="relative backdrop-blur-md bg-black/30 rounded-lg border border-green-400/30 transition-all duration-300 group-hover:border-green-400/50 group-hover:bg-black/40 shadow-md shadow-black/20 group-hover:shadow-green-400/10 p-5">
                  <div className="relative rounded-md bg-transparent group-hover:shadow-[0_0_30px_rgba(74,222,128,0.3)] transition-all duration-300 aspect-[4/3] flex items-center justify-center">
                    <img
                      src={sponsor.image}
                      alt={sponsor.name}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 filter brightness-110 contrast-125"
                    />
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Gold and Silver Sponsors */}
      <div className="space-y-6">
        <h3 className="text-3xl font-bold text-green-400 text-center matrix-glow">
          Partners & Supporters
        </h3>
        <div className="grid grid-cols-2 gap-10">
          {sponsors.otherSponsors.map((sponsor) => (
            <div key={sponsor.name} className="max-w-[320px] mx-auto">
              <h4 className="text-base font-bold text-green-300 text-center matrix-glow">
                {sponsor.tier}
              </h4>
              <a
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group relative overflow-hidden transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="relative backdrop-blur-md bg-black/30 rounded-lg border border-green-400/30 transition-all duration-300 group-hover:border-green-400/50 group-hover:bg-black/40 shadow-md shadow-black/20 group-hover:shadow-green-400/10 p-5">
                  <div className="relative rounded-md bg-transparent group-hover:shadow-[0_0_30px_rgba(74,222,128,0.3)] transition-all duration-300 aspect-[4/3] flex items-center justify-center">
                    <img
                      src={sponsor.image}
                      alt={sponsor.name}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 filter brightness-110 contrast-125"
                    />
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Sponsors: React.FC = () => {
  return (
    <section id="sponsors" className="relative z-10 py-16 bg-black/80">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center matrix-glow">
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
