"use client";

import React from "react";
import Nav from "@/app/components/Nav";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Tools from "@/app/components/Tools";

const FO: React.FC = () => {
  // Option Chain Data
  const optionChain = [
    "NIFTY",
    "SENSEX",
    "BANKNIFTY",
    "FINNIFTY",
    "MIDCPNIFTY",
    "CRUDEOIL",
    "NATURALGAS",
    "GOLD",
    "SILVER",
    "BANKEX",
  ];

  const router = useRouter();
  const [activeTab, setActiveTab] = useState("F&O");

  const navItems = [
    { name: "Stocks", path: "/" },
    { name: "F&O", path: "/models/f&o" },
    { name: "Mutual Funds", path: "/mutual-funds" },
  ];

  // Trading Tools Data
  const tradingTools = [
    { name: "Strategy Bot", description: "Automated Trading", isNew: true },
    { name: "Trade with Charts", description: "Analyze charts", isNew: false },
  ];

  return (
    <div className="bg-white-100 min-h-screen flex mt-16">
      {/* Sidebar */}
      <aside className="w-full lg:w-[30%]" >
      <div className="w-full lg:w-[30%] bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Upcoming Features</h2>
      <p className="text-gray-600">
        This section can be used for charts, updates, or insights.
      </p>
    </div>
      </aside>

      {/* Main Content */}
      <div className=" flex flex-col lg:flex-row gap-6 px-6">
        <Nav />

      <div className=" min-h-screen px-6 mt-0 pt-4">
        {/* Navigation Tabs */}
        <div className="w-full bg-white shadow-md p-4 flex justify-start gap-6">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => {
                setActiveTab(item.name);
                router.push(item.path);
              }}
              className={`relative px-4 py-2 text-gray-600 hover:text-black transition ${
                activeTab === item.name ? "font-bold border-b-2 border-blue-500" : ""
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Option Chain Section */}
        <div className="bg-gray-100 min-h-screen px-6 mt-0 pt-4 mt-5">
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Option Chain</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {optionChain.map((option) => (
              <button
                key={option}
                className="bg-white border px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition"
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Trading Tools Section */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Trading Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tradingTools.map((tool) => (
              <div key={tool.name} className="bg-white p-4 rounded-lg shadow-md flex items-center">
                <div>
                  <h3 className="text-md font-bold">{tool.name}</h3>
                  <p className="text-gray-600 text-sm">{tool.description}</p>
                </div>
                {tool.isNew && (
                  <span className="ml-auto bg-purple-200 text-purple-700 px-2 py-1 text-xs rounded">
                    NOW LIVE
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Research & Market Updates */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Research */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-md font-semibold mb-2">Research</h2>
            <button className="w-full bg-gray-100 p-3 rounded-md text-gray-700 hover:bg-gray-200 transition">
              Derivative Calls
            </button>
          </div>

          {/* Market Updates */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-md font-semibold mb-2">Market Updates</h2>
            <button className="w-full bg-red-100 p-3 rounded-md text-red-700 hover:bg-red-200 transition">
              Live News
            </button>
          </div>
        </div>

        {/* Options Screener Section */}
        <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Options Screener</h2>
          <p className="text-gray-600 text-sm">
            Explore options contracts that stand out in the market
          </p>
          <div className="flex space-x-4 mt-3">
            <button className="text-blue-600 font-semibold border-b-2 border-blue-500 pb-1">
              Most Traded
            </button>
            <button className="text-gray-600 hover:text-black pb-1">OI Gainers</button>
            <button className="text-gray-600 hover:text-black pb-1">OI Losers</button>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FO;
