'use client';

export default function Footer() {
  return (
    <footer className="bg-white shadow-md mt-10 p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        {/* Section 1: Company Info */}
        <div>
          <h2 className="text-lg font-bold mb-3">About Us</h2>
          <p className="text-gray-600">We provide seamless stock trading experiences with advanced tools and expert insights.</p>
        </div>

        {/* Section 2: Quick Links */}
        <div>
          <h2 className="text-lg font-bold mb-3">Quick Links</h2>
          <ul className="text-gray-600">
            <li><a href="#" className="hover:text-red-500">Home</a></li>
            <li><a href="#" className="hover:text-red-500">Invest</a></li>
            <li><a href="#" className="hover:text-red-500">Portfolio</a></li>
            <li><a href="#" className="hover:text-red-500">Funds</a></li>
          </ul>
        </div>

        {/* Section 3: Contact Info */}
        <div>
          <h2 className="text-lg font-bold mb-3">Contact Us</h2>
          <p className="text-gray-600">Email: support@dhandmat.com</p>
          <p className="text-gray-600">Phone: +91 98765 43210</p>
          <p className="text-gray-600">Address: Mumbai, India</p>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="text-center text-gray-500 mt-6 border-t pt-4">
        <p>&copy; 2025 Dhan D-mat. All rights reserved.</p>
      </div>
    </footer>
  );
}
