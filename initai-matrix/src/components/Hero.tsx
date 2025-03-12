import React from "react";
import { Calendar, Trophy, Users } from "lucide-react";

const Hero: React.FC = () => {
  // Text for the animated heading
  const mainHeadingLine1 = "Welcome to The";
  const mainHeadingLine2 = "Future of AI";

  return (
    <section
      id="hero"
      className="relative z-10 min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80 z-0"></div>
      <div className="container mx-auto px-4 py-10 md:py-0 text-center relative z-10">
        <div className="animate-fade-in space-y-8 max-w-6xl mx-auto">
          {/* Main heading */}
          <h1 className="text-[clamp(2rem,5vw,4.5rem)] font-bold mb-4 tracking-tight leading-tight break-words">
            <div className="glowing-text-container">
              {mainHeadingLine1.split("").map((letter, index) => (
                <span
                  key={`line1-${index}`}
                  className="text-green-400 inline-block letter-glow"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </div>
            <div className="glowing-text-container mt-2">
              {mainHeadingLine2.split("").map((letter, index) => (
                <span
                  key={`line2-${index}`}
                  className="text-green-300 inline-block letter-glow"
                  style={{
                    animationDelay: `${
                      (mainHeadingLine1.length + index) * 0.1
                    }s`,
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </div>
          </h1>

          <h2
            className="
  text-[clamp(1.1rem, 4vw, 1.75rem)]  /* Bigger font on small screens */
  md:text-[clamp(1.5rem, 4.5vw, 2.25rem)] /* Larger font on medium screens */
  lg:text-[clamp(2rem, 5vw, 3rem)] /* Largest font on large screens */
  mb-8 animate-typewriter max-w-full mx-auto text-green-300/90 font-light break-words"
          >
            <span className="block sm:hidden">
              Where Innovation
              <br />
              Meets Intelligence
            </span>
            <span className="hidden sm:block">
              Where Innovation Meets Intelligence
            </span>
          </h2>

          {/* CTA buttons */}
          <div
            className="flex flex-wrap justify-center gap-4 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <button
              onClick={() =>
                window.open("https://data2knowledge.devfolio.co/", "_blank")
              }
              className="cta-button group bg-green-500 hover:bg-green-600 text-black px-6 sm:px-10 py-3 sm:py-5 rounded-xl text-lg sm:text-xl font-bold transition-all transform hover:scale-105 animate-glow flex items-center justify-center gap-2 shadow-lg shadow-green-500/20"
            >
              Register Now
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </div>

          {/* Info cards */}
          <div
            className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            {/* Date Card */}
            <div className="flex flex-col items-center p-5 rounded-2xl backdrop-blur-sm bg-black/30 border border-green-400/20 hover:border-green-400/50 transition-all hover:transform hover:scale-105 duration-300">
              <Calendar className="w-10 h-10 text-green-400 mb-3" />
              <h3 className="text-xl font-bold text-green-300">22 March</h3>
              <p className="text-sm text-green-300/80">2025</p>
            </div>

            {/* Prize Card */}
            <div className="flex flex-col items-center p-5 rounded-2xl backdrop-blur-sm bg-black/30 border border-green-400/20 hover:border-green-400/50 transition-all hover:transform hover:scale-105 duration-300">
              <Trophy className="w-10 h-10 text-green-400 mb-3" />
              <h3 className="text-xl font-bold text-green-300">₹1,00,000</h3>
              <p className="text-sm text-green-300/80">in total cash prizes</p>
            </div>

            {/* Participants Card */}
            <div className="flex flex-col items-center p-5 rounded-2xl backdrop-blur-sm bg-black/30 border border-green-400/20 hover:border-green-400/50 transition-all hover:transform hover:scale-105 duration-300">
              <Users className="w-10 h-10 text-green-400 mb-3" />
              <h3 className="text-xl font-bold text-green-300">100+ Hackers</h3>
              <p className="text-sm text-green-300/80">nationally</p>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="mt-12 flex justify-center">
            <div className="animate-bounce-slow opacity-50 hover:opacity-100 transition-opacity">
              <div className="w-4 h-4 border-2 border-green-400 transform rotate-45"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom styles */}
      <style>{`
        .matrix-glow {
          text-shadow: 0 0 5px rgba(74, 222, 128, 0.3),
                      0 0 10px rgba(74, 222, 128, 0.2),
                      0 0 20px rgba(74, 222, 128, 0.1);
        }
        
        @keyframes typewriter {
          from { width: 0 }
          to { width: 100% }
        }
        
        .animate-typewriter {
          overflow: hidden;
          white-space: nowrap;
          animation: typewriter 3s steps(40) 1s 1 normal both;
        }
        
        @keyframes letterGlow {
          0%, 100% {
            text-shadow: none;
            opacity: 0.8;
          }
          20%, 80% {
            text-shadow: 0 0 8px rgba(74, 222, 128, 0.8),
                        0 0 15px rgba(74, 222, 128, 0.5),
                        0 0 25px rgba(74, 222, 128, 0.3);
            opacity: 1;
          }
        }
        
        .letter-glow {
          animation: letterGlow 2s ease-in-out forwards;
          opacity: 0.8;
        }
        
        .glowing-text-container {
          display: inline-block;
        }
      `}</style>
    </section>
  );
};

export default Hero;
