"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Hero: React.FC = () => {
  const router = useRouter();

  // Sections with their respective items
  const sections = [
    {
      title: "Investment Products",
      items: ["Mutual Funds", "IPO", "Stockcase", "SIP"],
    },
    {
      title: "Investing Tools",
      items: ["Screeners", "Results Dashboard", "Superstar Investors", "Trade with Charts"],
    },
    {
      title: "Research & Market Updates",
      items: ["Investment Ideas", "Trading Calls", "Live News"],
    },
  ];

  // Function to navigate to the respective page
  const navigate = (path: string) => {
    router.push(`/${path.toLowerCase().replace(/\s/g, "-")}`);
  };

  return (
    <div className="bg-gray-100 min-h-screen px-6 mt-0 pt-4"> {/* Removed pt-20 to eliminate space */}
      {/* Main Container */}
      <div className="flex flex-col gap-6">
        
        {/* Loop through sections */}
        {sections.map((section) => (
          <div key={section.title} className="bg-white p-6 rounded-lg shadow-md">
            {/* Section Title */}
            <h2 className="text-lg font-bold mb-2">{section.title}</h2>

            {/* Grid Layout for buttons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {section.items.map((item) => (
                <button
                  key={item}
                  className="bg-blue-500 text-white p-4 rounded-lg text-center hover:bg-blue-600 transition w-full"
                  onClick={() => navigate(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Hero;
