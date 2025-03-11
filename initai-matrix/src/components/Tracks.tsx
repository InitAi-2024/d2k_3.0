import React from 'react';
import { Brain, Laptop, Gift } from 'lucide-react';

const Tracks: React.FC = () => {
  return (
    <section id="tracks" className="relative z-10 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center matrix-glow">
          Hack Tracks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <Brain className="w-16 h-16 mb-6" />,
              title: "AI Revolution",
              description:
                "Build the next generation of AI-powered applications that push the boundaries of what's possible.",
              items: [
                "Machine Learning",
                "Natural Language Processing",
                "Computer Vision",
              ],
            },
            {
              icon: <Laptop className="w-16 h-16 mb-6" />,
              title: "Web3 & Blockchain",
              description:
                "Create decentralized applications that challenge the status quo of the digital world.",
              items: ["Smart Contracts", "DeFi Solutions", "NFT Platforms"],
            },
            {
              icon: <Gift className="w-16 h-16 mb-6" />,
              title: "Open Innovation",
              description:
                "Build anything that breaks free from the constraints of the matrix.",
              items: [
                "Social Impact",
                "Developer Tools",
                "Creative Technology",
              ],
            },
          ].map((track, index) => (
            <div
              key={track.title}
              className="bg-black/80 p-8 rounded-xl border border-green-400/30 hover:border-green-400 transition-all backdrop-blur-sm"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                {track.icon}
                <h3 className="text-2xl font-bold mb-4">{track.title}</h3>
                <p className="mb-6 text-green-300">{track.description}</p>
                <ul className="space-y-2 text-left w-full">
                  {track.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tracks; 