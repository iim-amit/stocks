"use client";
import { useState } from "react";
import Nav from "@/app/components/Nav";

export default function Orders() {
  const [orders, setOrders] = useState([
    { id: 1, stock: "AAPL", type: "Buy", quantity: 10, price: 175.50, status: "Completed" },
    { id: 2, stock: "TSLA", type: "Sell", quantity: 5, price: 230.75, status: "Pending" },
    { id: 3, stock: "GOOGL", type: "Buy", quantity: 8, price: 2900.30, status: "Failed" },
  ]);

  return (
    
    <div className="max-w-4xl mx-auto p-6">
        <Nav />
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Your Orders</h1>

      {orders.length === 0 ? (
        <p className="text-gray-600">No orders placed yet.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-3">Stock</th>
              <th className="border p-3">Type</th>
              <th className="border p-3">Quantity</th>
              <th className="border p-3">Price</th>
              <th className="border p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="text-center">
                <td className="border p-3">{order.stock}</td>
                <td className={`border p-3 font-semibold ${order.type === "Buy" ? "text-green-600" : "text-red-600"}`}>
                  {order.type}
                </td>
                <td className="border p-3">{order.quantity}</td>
                <td className="border p-3">${order.price.toFixed(2)}</td>
                <td
                  className={`border p-3 font-semibold ${
                    order.status === "Completed" ? "text-green-600" : order.status === "Pending" ? "text-yellow-600" : "text-red-600"
                  }`}
                >
                  {order.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
