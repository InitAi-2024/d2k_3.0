import React from 'react';
import { Mail, Github, Twitter, Instagram, Linkedin, Youtube, Facebook, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  // Social media links with their respective icons
  const socialLinks = [
    { name: 'Email', icon: <Mail className="w-6 h-6" />, url: 'mailto:Initai.djsce@gmail.com' },
    { name: 'Instagram', icon: <Instagram className="w-6 h-6" />, url: 'https://www.instagram.com/djinit.ai/' },
    { name: 'LinkedIn', icon: <Linkedin className="w-6 h-6" />, url: 'https://www.linkedin.com/company/init-ai/' },
    { name: 'Website', icon: <Globe className="w-6 h-6" />, url: 'https://init-website-dusky.vercel.app/' },
  ];

  return (
    <footer className="relative z-10 py-12 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold matrix-glow mb-2">
              D2k 3.0
            </h3>
            <p className="text-green-300">The future is what you make it.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors transform hover:scale-110 duration-200"
                aria-label={`Visit our ${social.name}`}
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        
        
        
        <div className="text-center pt-12 text-sm text-green-300 pt-4 border-t border-green-400/20">
          <p>© 2025 Matrix Hackathon. All rights reserved.</p>
          <p className="mt-2">Designed with 💚 by the DJ Init.AI Tech Team</p>
        </div>
      </div>

      {/* Custom styles for glow effects */}
      <style>{`
        .matrix-glow {
          text-shadow: 0 0 5px rgba(74, 222, 128, 0.3),
                      0 0 10px rgba(74, 222, 128, 0.2);
        }
      `}</style>
    </footer>
  );
};

export default Footer; 