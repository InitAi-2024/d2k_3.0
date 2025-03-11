import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import DigitalRain from '../components/DigitalRain';
import Footer from '../components/Footer';
import useSound from 'use-sound';

const HeroPage: React.FC = () => {
  // Use the use-sound hook to play the haptic sound
  const [play, { sound }] = useSound('/sounds/haptic.mp3', { 
    volume: 1.0,
    interrupt: false,
    soundEnabled: true,
    preload: true,
    onload: () => console.log("Sound loaded successfully on Hero page"),
  });

  // Play sound when page loads
  useEffect(() => {
    const playAudio = () => {
      try {
        play();
        console.log("Playing sound on Hero page");
      } catch (error) {
        console.error("Failed to play audio on Hero page:", error);
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
        <Hero />
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

export default HeroPage; 