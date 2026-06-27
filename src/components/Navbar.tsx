"use client";

import { useState } from "react";
import { Menu, X, Leaf } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <Leaf className="text-green-700 w-8 h-8" />

            <h1 className="text-3xl font-bold text-green-700">
              Amma Gardens
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">

            <a
              href="#"
              className="text-gray-700 hover:text-green-700 transition font-medium"
            >
              Home
            </a>

            <a
              href="#"
              className="text-gray-700 hover:text-green-700 transition font-medium"
            >
              About
            </a>

            <a
              href="#"
              className="text-gray-700 hover:text-green-700 transition font-medium"
            >
              Contact
            </a>

            <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl transition font-semibold">
              Buy Now
            </button>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6">

            <div className="flex flex-col gap-5">

              <a href="#" className="text-gray-700">
                Home
              </a>

              <a href="#" className="text-gray-700">
                About
              </a>

              <a href="#" className="text-gray-700">
                Contact
              </a>

              <button className="bg-green-700 text-white py-3 rounded-xl">
                Buy Now
              </button>

            </div>

          </div>
        )}

      </div>
    </nav>
  );
}