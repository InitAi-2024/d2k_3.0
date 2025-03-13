import React, { useEffect, useState, useRef } from "react";
import {
  Code2,
  Terminal,
  Users,
  Zap,
  Brain,
  Gift,
  Calendar,
  MapPin,
  Mail,
  Github,
  Twitter,
  Laptop,
  Trophy,
} from "lucide-react";
import DigitalRain from "./components/DigitalRain";
import Navbar from "./components/Navbar";
import CountdownTimer from "./components/CountdownTimer";
import Timeline from "./components/Timeline";
import { FAQPage } from "./components/FAQ";
import Sponsors from "./components/Sponsors";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Tracks from "./components/Tracks";
import Prizes from "./components/Prizes";
import Footer from "./components/Footer";
import Location from "./components/Location";
import useSound from "use-sound";

function App() {
  const [isVisible, setIsVisible] = useState({});
  const [hasInteracted, setHasInteracted] = useState(false);

  // Use the use-sound hook to play the haptic sound
  const [play, { sound }] = useSound("/sounds/haptic.mp3", {
    volume: 1.0,
    interrupt: false,
    soundEnabled: true, // Ensure sound is enabled
    preload: true, // Preload the sound file
    onload: () => console.log("Sound loaded successfully"),
  });

  // Play sound when DOM content is loaded or component mounts
  useEffect(() => {
    const playAudio = () => {
      try {
        play();
        console.log("Playing sound");
      } catch (error) {
        console.error("Failed to play audio:", error);
      }
    };

    // If document is already loaded, play immediately
    if (
      document.readyState === "complete" ||
      document.readyState === "interactive"
    ) {
      // Small delay to ensure browser is ready
      setTimeout(playAudio, 100);
    } else {
      // Otherwise, add event listeners
      const handleDOMContentLoaded = () => {
        playAudio();
      };

      const handleWindowLoad = () => {
        // Additional fallback for when all resources are loaded
        if (!hasInteracted) {
          playAudio();
        }
      };

      document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);
      window.addEventListener("load", handleWindowLoad);

      // Cleanup
      return () => {
        document.removeEventListener(
          "DOMContentLoaded",
          handleDOMContentLoaded
        );
        window.removeEventListener("load", handleWindowLoad);
      };
    }
  }, [play, hasInteracted]);

  // Handle user interaction to play sound
  useEffect(() => {
    const playSound = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        try {
          // Force sound to play on user interaction
          play({ forceSoundEnabled: true });
          console.log("Playing sound on user interaction");
        } catch (error) {
          console.error("Failed to play audio after interaction:", error);
        }
      }
    };

    // Add event listeners for user interaction
    document.addEventListener("click", playSound);
    document.addEventListener("keydown", playSound);
    document.addEventListener("touchstart", playSound);

    return () => {
      document.removeEventListener("click", playSound);
      document.removeEventListener("keydown", playSound);
      document.removeEventListener("touchstart", playSound);
    };
  }, [hasInteracted, play]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen text-green-400 font-mono relative">
      <DigitalRain />
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Countdown Section */}
      <section id="countdown" className="relative z-10 py-20 bg-black/80">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center matrix-glow">
            Event Starts In
          </h2>
          <CountdownTimer />
        </div>
      </section>
      {/* Features Section */}
      <Features />
      {/* Tracks Section */}
      <Tracks />

      {/* Prizes Section */}
      <Prizes />

      {/* Timeline Section */}
      <section id="timeline" className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center matrix-glow">
            Event Timeline
          </h2>
          <Timeline />
        </div>
      </section>

      {/* Sponsors Section */}
          <Sponsors />

      {/* FAQ Section */}
      <FAQPage />

      {/* Location Section */}
      <Location />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
