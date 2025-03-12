import React from 'react';
import { Code2, Users, Zap } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section
      id="features"
      className="relative z-10 py-20 bg-black bg-opacity-80"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: (
                <Code2 className="w-12 h-12 mb-6 group-hover:text-black transition-colors" />
              ),
              title: "9 Hours",
              description:
                "Intense coding, building, and innovation in a single day",
            },
            {
              icon: (
                <Users className="w-12 h-12 mb-6 group-hover:text-black transition-colors" />
              ),
              title: "100+ Hackers",
              description:
                "Join fellow rebels in the fight against the machines",
            },
            {
              icon: (
                <Zap className="w-12 h-12 mb-6 group-hover:text-black transition-colors" />
              ),
              title: "₹80,000 in Prizes",
              description:
                "Substantial rewards for those who dare to challenge reality",
            },
          ].map((feature, index) => (
            <div
              key={feature.title}
              className="feature-card p-8 border border-green-400/30 rounded-xl hover:bg-green-400 hover:text-black transition-all group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                {feature.icon}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-black transition-colors">
                  {feature.title}
                </h3>
                <p className="group-hover:text-black/80 transition-colors">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 