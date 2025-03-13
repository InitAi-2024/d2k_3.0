import React from 'react';

const Timeline: React.FC = () => {
  const timelineItems = [
    {
      time: "Two Days Before the Event",
      title: "Problem Statement Reveal",
      description: "A major portion of the problem statement will be revealed, allowing participants to start coding during this timeframe. The remaining part of the problem statement will be unveiled on the day of the event."
    },
    {
      time: "Day 1 - 7:00 AM",
      title: "Report to College",
      description: "Participants should report to the venue and complete the check-in process."
    },
    {
      time: "Day 1 - 7:30 AM",
      title: "Coding Begins",
      description: "Start working on your projects."
    },
    {
      time: "Day 1 - 8:00 AM",
      title: "Inauguration Session",
      description: "Opening ceremony and welcome address."
    },
    {
      time: "Day 1 - 9:00 AM",
      title: "Inauguration Ends",
      description: "Official start of the event."
    },
    {
      time: "Day 1 - 10:00 AM",
      title: "First Mentoring Round",
      description: "Get valuable insights and guidance from mentors."
    },
    {
      time: "Day 1 - 1:00 PM",
      title: "Snacks Break",
      description: "Take a break and refuel."
    },
    {
      time: "Day 1 - 4:30 PM",
      title: "Coding Ends",
      description: "Final submissions should be ready."
    },
    {
      time: "Day 1 - 4:30 PM to 6:00 PM",
      title: "First Judging Round",
      description: "Judges will review and evaluate the submitted projects."
    },
    {
      time: "Day 1 - 6:30 PM",
      title: "Results Declaration",
      description: "Announcement of teams proceeding to the final round."
    },
    {
      time: "Day 1 - 7:00 PM to 9:00 PM",
      title: "Final Round",
      description: "Top teams will present their projects."
    },
    {
      time: "Day 1 - 9:00 PM to 9:30 PM",
      title: "Final Results Declaration",
      description: "Announcement of winners and prize distribution."
    },
    {
      time: "Day 1 - 9:30 PM",
      title: "Closing Ceremony",
      description: "Thank you for participating!"
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