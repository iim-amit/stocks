"use client";
import { useState } from "react";
import Nav from "@/app/components/Nav";

export default function Portfolio() {
  const [portfolio, setPortfolio] = useState([
    { id: 1, stock: "AAPL", shares: 15, avgPrice: 172.5, currentPrice: 175.8 },
    { id: 2, stock: "TSLA", shares: 8, avgPrice: 225.3, currentPrice: 230.1 },
    { id: 3, stock: "GOOGL", shares: 5, avgPrice: 2800.0, currentPrice: 2905.6 },
  ]);

  const calculateProfitLoss = (stock) => {
    return ((stock.currentPrice - stock.avgPrice) * stock.shares).toFixed(2);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Nav />
      
      {/* Fixed heading position */}
      <h1 className="text-3xl font-bold text-gray-800 mt-20">My Portfolio</h1>

      {portfolio.length === 0 ? (
        <p className="text-gray-600">No stocks in portfolio.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300 mt-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-3">Stock</th>
              <th className="border p-3">Shares</th>
              <th className="border p-3">Avg. Buy Price</th>
              <th className="border p-3">Current Price</th>
              <th className="border p-3">Profit/Loss</th>
            </tr>
          </thead>
          <tbody>
            {portfolio.map((stock) => (
              <tr key={stock.id} className="text-center">
                <td className="border p-3 font-semibold">{stock.stock}</td>
                <td className="border p-3">{stock.shares}</td>
                <td className="border p-3">${stock.avgPrice.toFixed(2)}</td>
                <td className="border p-3">${stock.currentPrice.toFixed(2)}</td>
                <td
                  className={`border p-3 font-semibold ${
                    calculateProfitLoss(stock) >= 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  ${calculateProfitLoss(stock)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
