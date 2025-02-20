"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const Head = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Stocks");

  const navItems = [
    { name: "Stocks", path: "/" },
    { name: "F&O", path: "/models/f&o" }, // Corrected path
    { name: "Mutual Funds", path: "/mutual-funds" },
  ];

  return (
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
  );
};

export default Head;
