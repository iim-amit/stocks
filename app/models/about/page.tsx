import Nav from "@/app/components/Nav";


export default function About() {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <Nav />
        <h1 className="text-3xl font-bold text-gray-800 mt-20">About Our Stock Market Platform</h1>
        <p className="text-gray-600 mb-4">
          Welcome to our stock market platform, your go-to source for real-time stock updates, market trends, and investment insights. 
          We aim to empower traders, investors, and financial enthusiasts with the latest data and tools.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Our Mission</h2>
        <p className="text-gray-600 mb-4">
          Our mission is to simplify stock market investments by providing accurate and user-friendly analytics.
        </p>
  
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Key Features</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>📊 Real-time Stock Prices & Market Updates</li>
          <li>📈 Advanced Charting & Analysis Tools</li>
          <li>📉 AI-driven Investment Insights</li>
          <li>🔔 Price Alerts & Watchlists</li>
          <li>📰 Latest Stock Market News</li>
        </ul>
  
        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-2">Why Choose Us?</h2>
        <p className="text-gray-600">
          Whether you're a beginner or an experienced trader, our platform offers reliable stock data and investment strategies to help you make informed decisions.
        </p>
      </div>
    );
  }
  