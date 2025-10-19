import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 border-t border-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-xl font-bold mb-2">FurniMart</h2>
          <p className="text-sm">
            Discover premium furniture crafted for comfort and elegance. Bringing style to your home, one piece at a time.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-md font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/products" className="hover:underline">Products</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-md font-semibold mb-2">Contact Us</h3>
          <ul className="text-sm space-y-1">
            <li>Email: support@furnimart.com</li>
            <li>Phone: +92 300 1234567</li>
            <li>Address: Karachi, Pakistan</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 py-4 border-t border-gray-200">
        &copy; {new Date().getFullYear()} FurniMart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
