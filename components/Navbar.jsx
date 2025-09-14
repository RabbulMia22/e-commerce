"use client";
import React, { useState } from "react";
import { Menu, X, ShoppingCart, Search } from "lucide-react";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3); // Example cart items count

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-indigo-600 cursor-pointer">
          <span className="text-2xl font-bold text-gray-900">
                Stylish<span className="text-[#F05252]">Threads</span>
              </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
          <Link href="/" className="hover:text-indigo-600 transition">Home</Link>
          <Link href="/shop" className="hover:text-indigo-600 transition">Shop</Link>
          <Link href="/categories" className="hover:text-indigo-600 transition">Categories</Link>
          <Link href="/about" className="hover:text-indigo-600 transition">About</Link>
          <Link href="/contact" className="hover:text-indigo-600 transition">Contact</Link>
        </div>

        {/* Search + Cart */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <Search className="absolute right-2 top-1.5 text-gray-400" size={18} />
          </div>
          <div className="relative cursor-pointer">
            <ShoppingCart className="text-black" size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden ">
          <button onClick={toggleMenu}>
            {isOpen ? <X className="text-black" size={28} /> : <Menu className="text-black" size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
       <div
        className={`md:hidden bg-white overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-100"
        }`}
      >
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="space-y-4 px-6 py-4 text-gray-700 font-medium">
            <li><Link href="/" className="block hover:text-indigo-600 transition">Home</Link></li>
            <li><Link href="/shop" className="block hover:text-indigo-600 transition">Shop</Link></li>
            <li><Link href="/categories" className="block hover:text-indigo-600 transition">Categories</Link></li>
            <li><Link href="/about" className="block hover:text-indigo-600 transition">About</Link></li>
            <li><Link href="/contact" className="block hover:text-indigo-600 transition">Contact</Link></li>
            <li>
              <div className="relative mt-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <Search className="absolute right-2 top-1.5 text-gray-400" size={18} />
              </div>
            </li>
            <li>
              <div className="relative mt-2  cursor-pointer">
                <ShoppingCart className="text-black" size={24} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </div>
            </li>
          </ul>
        </div>
      )}
      </div>
    </nav>
  );
}

export default Navbar;
