import React from "react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
        {/* Brand & About */}
        <div>
          <h2 className="text-2xl font-bold text-indigo-500 mb-4">ShopMate</h2>
          <p className="text-gray-400">
            Your one-stop shop for all your fashion and lifestyle needs. Quality products, fast delivery.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#home" className="hover:text-indigo-500 transition">Home</a></li>
            <li><a href="#shop" className="hover:text-indigo-500 transition">Shop</a></li>
            <li><a href="#categories" className="hover:text-indigo-500 transition">Categories</a></li>
            <li><a href="#contact" className="hover:text-indigo-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#faq" className="hover:text-indigo-500 transition">FAQ</a></li>
            <li><a href="#shipping" className="hover:text-indigo-500 transition">Shipping</a></li>
            <li><a href="#returns" className="hover:text-indigo-500 transition">Returns</a></li>
            <li><a href="#support" className="hover:text-indigo-500 transition">Support</a></li>
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div>
          <h3 className="font-semibold mb-4">Newsletter</h3>
          <p className="text-gray-400 mb-4">Subscribe to get latest updates and offers.</p>
          <div className="flex mb-4">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-l-lg focus:outline-none"
            />
            <button className="bg-indigo-500 px-4 py-2 rounded-r-lg hover:bg-indigo-600 transition text-white">
              Subscribe
            </button>
          </div>
          <div className="flex space-x-4">
            <a href="#"><Facebook size={20} className="hover:text-indigo-500 transition" /></a>
            <a href="#"><Instagram size={20} className="hover:text-pink-500 transition" /></a>
            <a href="#"><Twitter size={20} className="hover:text-blue-400 transition" /></a>
            <a href="#"><Linkedin size={20} className="hover:text-blue-600 transition" /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-10 border-t border-gray-800 pt-6">
        &copy; {new Date().getFullYear()} ShopMate. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
