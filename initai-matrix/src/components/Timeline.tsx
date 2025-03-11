import React from 'react';

const Timeline: React.FC = () => {
  const timelineItems = [
    {
      time: "Day 1 - 9:00 AM",
      title: "Registration & Check-in",
      description: "Get your badges and swag"
    },
    {
      time: "Day 1 - 10:00 AM",
      title: "Opening Ceremony",
      description: "Welcome address and keynote speakers"
    },
    {
      time: "Day 1 - 11:00 AM",
      title: "Hacking Begins",
      description: "Start your engines!"
    },
    {
      time: "Day 1 - 2:00 PM",
      title: "Workshop Session 1",
      description: "AI & Machine Learning Fundamentals"
    },
    {
      time: "Day 2 - 10:00 AM",
      title: "Workshop Session 2",
      description: "Web3 Development"
    },
    {
      time: "Day 2 - 3:00 PM",
      title: "Project Submissions",
      description: "Submit your hacks"
    },
    {
      time: "Day 2 - 4:00 PM",
      title: "Judging",
      description: "Present your projects"
    },
    {
      time: "Day 2 - 6:00 PM",
      title: "Closing Ceremony",
      description: "Awards and celebrations"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto relative">
      <div className="space-y-8">
        {timelineItems.map((item, index) => (
          <div key={index} className="flex gap-6 items-start group">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-green-400 group-hover:bg-green-300 transition-all duration-300 shadow-glow"></div>
              <div className="w-0.5 h-24 bg-gradient-to-b from-green-400/50 to-green-400/10 group-hover:from-green-400/70 group-hover:to-green-400/30 transition-all duration-300"></div>
            </div>
            <div 
              className="flex-1 backdrop-blur-md bg-black/40 p-6 rounded-xl border border-green-400/30 
                         group-hover:border-green-400/50 group-hover:bg-black/50 transition-all duration-300
                         shadow-lg shadow-black/20 hover:shadow-green-400/10"
            >
              <div className="inline-block px-3 py-1 rounded-full bg-green-400/10 border border-green-400/20
                            group-hover:bg-green-400/20 group-hover:border-green-400/30 transition-all duration-300">
                <span className="text-sm text-green-300 font-medium">{item.time}</span>
              </div>
              <h3 className="text-xl font-bold mt-3 text-green-400 group-hover:text-green-300 
                           transition-all duration-300 matrix-glow">{item.title}</h3>
              <p className="text-green-300/90 mt-2 group-hover:text-green-200/90 
                          transition-all duration-300">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <style jsx>{`
        .shadow-glow {
          box-shadow: 0 0 10px rgba(74, 222, 128, 0.3),
                      0 0 20px rgba(74, 222, 128, 0.2);
        }
        
        .matrix-glow {
          text-shadow: 0 0 5px rgba(74, 222, 128, 0.3),
                      0 0 10px rgba(74, 222, 128, 0.2);
        }
      `}</style>
    </div>
  );
};

export default Timeline; 