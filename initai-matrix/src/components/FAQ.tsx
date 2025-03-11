import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);
  
  const faqItems = [
    {
      question: "What is D2K Hack?",
      answer: "D2K Hack is a 48-hour hackathon focused on AI, machine learning, and cutting-edge technology. It brings together developers, designers, and innovators to create groundbreaking solutions."
    },
    {
      question: "Who can participate?",
      answer: "Anyone over 18 years old can participate, regardless of their experience level. We welcome students, professionals, and enthusiasts alike."
    },
    {
      question: "Do I need a team?",
      answer: "You can participate solo or in a team of up to 4 people. We'll also have team formation events if you're looking to join one!"
    },
    {
      question: "What should I bring?",
      answer: "Your laptop, charger, any hardware you plan to use, and your creativity! We'll provide food, drinks, and a comfortable hacking environment."
    },
    {
      question: "Is there a registration fee?",
      answer: "No, participation is completely free! We believe in making technology accessible to everyone."
    },
    {
      question: "Will there be prizes?",
      answer: "Yes! We have a total prize pool of $50,000 distributed across various categories and special awards."
    },
    {
      question: "What if I don't know how to code?",
      answer: "That's okay! We welcome participants of all skill levels. We'll have workshops and mentors to help you get started."
    },
    {
      question: "Can I start working on my project before the event?",
      answer: "No, all projects must be started during the hackathon. You can brainstorm ideas beforehand, but coding and design must begin at the event."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-6">
        {faqItems.map((item, index) => (
          <div 
            key={index}
            className="border border-green-400/30 rounded-lg overflow-hidden backdrop-blur-sm transition-all hover:border-green-400/50"
          >
            <button
              className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
              onClick={() => toggleItem(index)}
            >
              <span className="text-xl font-medium">{item.question}</span>
              <ChevronDown 
                className={`w-5 h-5 transition-transform ${openItem === index ? 'rotate-180' : ''}`} 
              />
            </button>
            <div 
              className={`overflow-hidden transition-all duration-300 ${
                openItem === index ? 'max-h-96 p-6 pt-0' : 'max-h-0'
              }`}
            >
              <p className="text-green-300">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>

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

// Combined FAQPage component
const FAQPage: React.FC = () => {
  return (
    <section id="faq" className="relative z-10 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center matrix-glow">
          Frequently Asked Questions
        </h2>
        <FAQ />
      </div>
    </section>
  );
};

export { FAQ, FAQPage };
export default FAQPage; 