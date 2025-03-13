import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Define navigation items based on App.tsx sections
  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'Countdown', id: 'countdown' },
    { name: 'Features', id: 'features' },
    { name: 'Tracks', id: 'tracks' },
    { name: 'Prizes', id: 'prizes' },
    { name: 'Timeline', id: 'timeline' },
    { name: 'Sponsors', id: 'sponsors' },
    { name: 'FAQ', id: 'faq' },
    { name: 'Location', id: 'location' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background on scroll
      setScrolled(window.scrollY > 50);
      
      // Determine which section is currently in view
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100; // Offset for better detection
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(navItems[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navItems]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Close mobile menu if open
      setIsOpen(false);
      
      // Scroll to the section smoothly
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm ${
      scrolled ? 'bg-black/90 shadow-lg shadow-green-400/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <a 
            href="#" 
            className="flex items-center"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
          >
            <img 
              // src="/images/logo.png" 
              src="https://res.cloudinary.com/dk5acaaxg/image/upload/v1741715323/init-ai/ojcw49lklbjnapkvhafe.png" 
              alt="Init AI Matrix Logo" 
              className="h-10 md:h-12 transition-transform hover:scale-105 matrix-glow"
            />
          </a>
          
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-green-400 hover:text-green-300 transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`nav-link text-lg transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'text-green-300 border-b-2 border-green-400' 
                    : 'text-green-400 hover:text-green-300'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden animate-fade-in bg-black/95 rounded-b-lg">
            <div className="flex flex-col space-y-4 p-4">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left py-2 px-4 rounded-lg transition-all ${
                    activeSection === item.id
                      ? 'text-green-300 bg-green-400/20'
                      : 'text-green-400 hover:text-green-300 hover:bg-green-400/10'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 