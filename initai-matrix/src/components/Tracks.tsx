import React from 'react';
import { Brain, Laptop, Gift, Cpu } from 'lucide-react';

const Tracks: React.FC = () => {
  return (
    <section id="tracks" className="relative z-10 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center matrix-glow">
          Hack Tracks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            {
              icon: <Brain className="w-16 h-16 mb-6" />,
              title: "NLP",
              description:
                "Create intelligent applications that understand and process human language.",
              items: [
                "Sentiment Analysis",
                "Chatbots",
                "Text Classification",
              ],
            },
            {
              icon: <Laptop className="w-16 h-16 mb-6" />,
              title: "Gen AI",
              description:
                "Explore the capabilities of Generative AI to create innovative and creative solutions.",
              items: ["Text Generation", "Image Synthesis", "Chatbots"],
            },
            {
              icon: <Gift className="w-16 h-16 mb-6" />,
              title: "Computer Vision",
              description:
                "Develop systems that analyze and understand visual data.",
              items: ["Image Recognition", "Object Detection", "Face Recognition"],
            },
            {
              icon: <Cpu className="w-16 h-16 mb-6" />,
              title: "Machine Learning",
              description:
                "Train models to uncover patterns and make predictions from data.",
              items: ["Regression Models", "Classification", "Clustering"],
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
