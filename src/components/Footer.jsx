import React from "react";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Column 1 - Logo & About */}
        <div>
          
          {/* Logo Image */}
          <img
            src="/assets/images/Logo2.jpeg"   // 🔁 Replace with your actual logo path
            alt="B4U Unisex Salon Logo"
            className="h-14 mb-4"
          />

          <p className="text-sm leading-relaxed mb-6">
            B4U Unisex Salon provides professional hair cutting, keratin,
            smoothening, hydra facial, bridal makeup, beard grooming,
            and complete skin care services for men and women.
            Experience premium beauty and grooming under one roof.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3">
            
            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61565173592416"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="B4U Unisex Salon Facebook"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition"
            >
              <Facebook size={16} />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/b4u_unisex_salon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="B4U Unisex Salon Instagram"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition"
            >
              <Instagram size={16} />
            </a>

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
            <li className="hover:text-yellow-500 cursor-pointer transition">Keratin & Smoothening</li>
            <li className="hover:text-yellow-500 cursor-pointer transition">Facial & Skin Care</li>
            <li className="hover:text-yellow-500 cursor-pointer transition">Hydra Facial</li>
            <li className="hover:text-yellow-500 cursor-pointer transition">Bridal & Groom Makeup</li>
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