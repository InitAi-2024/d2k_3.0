import React from "react";

const Prizes = () => {
  const prizeCategories = [
    {
      title: "1st Place",
      description: "Grand Prize Winner",
      reward: "₹40,000",
      image: "https://res.cloudinary.com/dk5acaaxg/image/upload/v1741972988/init-ai/qzbyubqjulxx1uasjmba.png",
      size: "w-96 h-96",
      glow: "shadow-yellow-400/30",
    },
    {
      title: "2nd Place",
      description: "Runner-up",
      reward: "₹25,000",
      image: "https://res.cloudinary.com/dk5acaaxg/image/upload/v1741972988/init-ai/vqno4cfummisqlde5lsd.png",
      size: "w-72 h-72",
      glow: "shadow-gray-400/30",
    },
    {
      title: "3rd Place",
      description: "Second Runner-up",
      reward: "₹15,000",
      image: "https://res.cloudinary.com/dk5acaaxg/image/upload/v1741972991/init-ai/ayf4xnb3ol00o6ehpxns.png",
      size: "w-72 h-72",
      glow: "shadow-amber-600/30",
    },
  ];

  return (
    <section id="prizes" className="relative z-10 py-20 bg-black/80">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-4 text-center matrix-glow">
          Prize Pool
        </h2>
        <p className="text-xl text-green-300/80 text-center mb-16">
          Compete for amazing rewards and recognition
        </p>

        <div className="flex flex-col items-center">
          {/* First Place - Centered and Larger */}
          <div className="mb-20 transform hover:scale-105 transition-transform duration-500">
            <div className="relative">
              <div className="absolute inset-0 bg-green-400/10 rounded-full blur-2xl group-hover:bg-green-400/20 transition-colors duration-500" />
              <img
                src={prizeCategories[0].image}
                alt={prizeCategories[0].title}
                className={`${prizeCategories[0].size} object-contain relative z-10`}
              />
            </div>
            <div className="mt-8 text-center">
              <h3 className="text-4xl font-bold text-green-400 mb-3">
                {prizeCategories[0].title}
              </h3>
              <p className="text-green-300/80 text-xl mb-3">
                {prizeCategories[0].description}
              </p>
              <span className="text-4xl font-bold matrix-glow bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
                {prizeCategories[0].reward}
              </span>
            </div>
          </div>

          {/* Second and Third Place - Stacked on Mobile */}
          <div className="flex flex-col md:flex-row gap-12">
            {prizeCategories.slice(1).map((prize, index) => (
              <div key={index} className="w-full md:w-auto transform hover:scale-105 transition-transform duration-500">
                <div className="relative">
                  <div className="absolute inset-0 bg-green-400/10 rounded-full blur-2xl group-hover:bg-green-400/20 transition-colors duration-500" />
                  <img
                    src={prize.image}
                    alt={prize.title}
                    className={`${prize.size} object-contain relative z-10 mx-auto`}
                  />
                </div>
                <div className="mt-8 text-center">
                  <h3 className="text-3xl font-bold text-green-400 mb-3">
                    {prize.title}
                  </h3>
                  <p className="text-green-300/80 text-lg mb-3">
                    {prize.description}
                  </p>
                  <span className="text-3xl font-bold matrix-glow bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
                    {prize.reward}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom styles for glow effects */}
      <style>{`
        .matrix-glow {
          text-shadow: 0 0 10px rgba(74, 222, 128, 0.3),
                      0 0 20px rgba(74, 222, 128, 0.2),
                      0 0 30px rgba(74, 222, 128, 0.1);
        }
      `}</style>
    </section>
  );
};

export default Prizes;
