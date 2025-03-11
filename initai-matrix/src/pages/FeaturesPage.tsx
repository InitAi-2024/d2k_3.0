import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Features from '../components/Features';
import DigitalRain from '../components/DigitalRain';
import Footer from '../components/Footer';
import useSound from 'use-sound';

const FeaturesPage: React.FC = () => {
  // Use the use-sound hook to play the haptic sound
  const [play, { sound }] = useSound('/sounds/haptic.mp3', { 
    volume: 1.0,
    interrupt: false,
    soundEnabled: true,
    preload: true,
    onload: () => console.log("Sound loaded successfully on Features page"),
  });

  // Play sound when page loads
  useEffect(() => {
    const playAudio = () => {
      try {
        play();
        console.log("Playing sound on Features page");
      } catch (error) {
        console.error("Failed to play audio on Features page:", error);
      }
    };

    // If document is already loaded, play immediately
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      setTimeout(playAudio, 100);
    } else {
      // Otherwise, add event listeners
      const handleDOMContentLoaded = () => {
        playAudio();
      };
      
      const handleWindowLoad = () => {
        // Additional fallback for when all resources are loaded
        playAudio();
      };
      
      document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
      window.addEventListener('load', handleWindowLoad);
      
      // Cleanup
      return () => {
        document.removeEventListener('DOMContentLoaded', handleDOMContentLoaded);
        window.removeEventListener('load', handleWindowLoad);
      };
    }
  }, [play]);

  return (
    <div className="min-h-screen text-green-400 font-mono relative">
      <DigitalRain />
      <Navbar />
      
      <main>
        <div className="pt-20 pb-10 text-center">
          <h1 className="text-5xl font-bold mb-4 text-center matrix-glow">
            Key Features
          </h1>
          <p className="text-xl text-green-300 max-w-3xl mx-auto">
            Discover what makes our hackathon unique and exciting
          </p>
        </div>
        <Features />
        
        <div className="py-10 text-center">
          <a 
            href="/" 
            className="inline-block px-8 py-3 border-2 border-green-500 hover:bg-green-500 hover:text-black rounded-xl text-lg font-bold transition-all"
          >
            Back to Home
          </a>
        </div>
      </main>
      
      <Footer />

      {/* Custom styles for glow effects */}
      <style>{`
        .matrix-glow {
          text-shadow: 0 0 5px rgba(74, 222, 128, 0.3),
                      0 0 10px rgba(74, 222, 128, 0.2);
        }
      `}</style>
    </div>
  );
};

export default FeaturesPage; 