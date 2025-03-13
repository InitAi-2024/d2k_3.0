import { Trophy, Award, Gift } from "lucide-react";

const Prizes = () => {
  const prizeCategories = [
    {
      title: "1st Place",
      description: "Grand Prize Winner",
      reward: "$40,000",
      icon: <Trophy className="w-12 h-12 mb-4 text-yellow-400" />,
      color: "border-yellow-400",
      glow: "shadow-yellow-400/20",
    },
    {
      title: "2nd Place",
      description: "Runner-up",
      reward: "$25,000",
      icon: <Award className="w-12 h-12 mb-4 text-silver-400" />,
      color: "border-gray-400",
      glow: "shadow-gray-400/20",
    },
    {
      title: "3rd Place",
      description: "Second Runner-up",
      reward: "$15,000",
      icon: <Gift className="w-12 h-12 mb-4 text-amber-600" />,
      color: "border-amber-600",
      glow: "shadow-amber-600/20",
    },
  ];

  return (
    <section id="prizes" className="relative z-10 py-20 bg-black/80">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center matrix-glow">
          Exciting Prizes
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {prizeCategories.map((prize, index) => (
            <div
              key={index}
              className={`bg-black/60 border ${prize.color} p-6 rounded-lg transition-all duration-300 hover:scale-105 ${prize.glow} hover:shadow-lg`}
            >
              <div className="flex flex-col items-center text-center">
                {prize.icon}
                <h3 className="text-2xl font-bold mb-2">{prize.title}</h3>
                <p className="text-gray-400 mb-4">{prize.description}</p>
                <div className="mt-auto">
                  <span className="text-xl font-bold matrix-glow">
                    {prize.reward}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prizes; 