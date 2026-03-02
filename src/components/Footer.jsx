import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Column 1 - Logo & About */}
        <div>
          <h2 className="text-2xl font-serif text-yellow-500 mb-4">
            B4U Unisex Salon
          </h2>
          <p className="text-sm leading-relaxed mb-6">
            Elevate your style with premium hair, skin, and grooming services.
            Where beauty meets confidence and luxury.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3">
            <div className="w-9 h-9 flex items-center justify-center rounded-full border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition">
              <Facebook size={16} />
            </div>
            <div className="w-9 h-9 flex items-center justify-center rounded-full border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition">
              <Twitter size={16} />
            </div>
            <div className="w-9 h-9 flex items-center justify-center rounded-full border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition">
              <Instagram size={16} />
            </div>
            <div className="w-9 h-9 flex items-center justify-center rounded-full border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition">
              <Linkedin size={16} />
            </div>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-5">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-yellow-500 cursor-pointer transition">Home</li>
            <li className="hover:text-yellow-500 cursor-pointer transition">About Us</li>
            <li className="hover:text-yellow-500 cursor-pointer transition">Our Services</li>
            <li className="hover:text-yellow-500 cursor-pointer transition">Gallery</li>
            <li className="hover:text-yellow-500 cursor-pointer transition">Book Appointment</li>
          </ul>
        </div>

        {/* Column 3 - Our Services */}
        <div>
          <h3 className="text-white font-semibold mb-5">Our Services</h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-yellow-500 cursor-pointer transition">Hair Cut & Styling</li>
            <li className="hover:text-yellow-500 cursor-pointer transition">Hair Coloring</li>
            <li className="hover:text-yellow-500 cursor-pointer transition">Facial & Skin Care</li>
            <li className="hover:text-yellow-500 cursor-pointer transition">Manicure & Pedicure</li>
            <li className="hover:text-yellow-500 cursor-pointer transition">Bridal & Groom Packages</li>
          </ul>
        </div>

        {/* Column 4 - Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-5">
            Subscribe for Offers
          </h3>
          <p className="text-sm mb-4">
            Get exclusive salon deals, beauty tips, and special discounts.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 text-sm rounded-l-md bg-[#14193b] border border-gray-700 focus:outline-none focus:border-yellow-500"
            />
            <button className="px-4 py-2 bg-yellow-500 text-black text-sm font-medium rounded-r-md hover:bg-yellow-400 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} B4U Unisex Salon. All rights reserved.
      </div>
    </footer>
  );
}