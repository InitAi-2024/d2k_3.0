import React from 'react';
import { MapPin } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section id="location" className="relative z-10 py-20 bg-black/80">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center matrix-glow">
          Event Location
        </h2>
        
        {/* Map Container - Full Width */}
        <div className="max-w-6xl mx-auto mb-8 rounded-xl overflow-hidden border-2 border-green-400/30 shadow-lg shadow-green-400/10 hover:shadow-green-400/20 transition-all duration-300 hover:border-green-400/50">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16499.039892661625!2d72.82489230211115!3d19.108655033463666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c676018b43%3A0x75f29a4205098f99!2sSVKM&#39;s%20Dwarkadas%20J.%20Sanghvi%20College%20of%20Engineering!5e1!3m2!1sen!2sin!4v1741702546613!5m2!1sen!2sin" 
            width="100%" 
            height="500" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Event Location Map"
            className="w-full"
          />
        </div>
        
        {/* Venue Details - Below Map */}
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <MapPin className="w-8 h-8 text-green-400" />
            <h3 className="text-2xl font-bold text-green-300">SVKM's Dwarkadas J. Sanghvi College of Engineering</h3>
          </div>
          <p className="text-green-300/80">
            Plot No.U-15, J.V.P.D Scheme, Bhaktivedanta Swami Marg, Vile Parle West, Mumbai, Maharashtra 400056
          </p>
          <div className="pt-4">
            <a 
              href="https://maps.app.goo.gl/GkDj9WzdcgDYn8Tf9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-black rounded-lg font-bold hover:bg-green-400 transition-colors"
            >
              Get Directions
              <MapPin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Custom styles for glow effects */}
      <style>{`
        .matrix-glow {
          text-shadow: 0 0 5px rgba(74, 222, 128, 0.3),
                      0 0 10px rgba(74, 222, 128, 0.2);
        }
      `}</style>
    </section>
  );
};

export default Location; 