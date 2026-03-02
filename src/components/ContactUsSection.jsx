import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export default function ContactUsSection() {
  return (
    <section className="w-full bg-[#f5efe6] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}
          <div className="flex justify-center -mt-20">
            <div className="w-full max-w-md">
              <img
                src="https://img.freepik.com/free-photo/hairdresser-taking-care-her-client_23-2149319805.jpg?uid=R162123361&ga=GA1.1.1312737827.1743758138&semt=ais_hybrid&w=740&q=80"
                alt="B4U Unisex Salon Interior"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full">

            {/* HEADING */}
            <h2 className="text-4xl md:text-5xl font-serif font-extrabold text-black mb-6">
              Contact Us
            </h2>

            <p className="text-black/70 mb-10 max-w-lg">
              We would love to hear from you. Book your appointment today or 
              get in touch for premium hair, skin, and grooming services in Bhubaneswar.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

              {/* FORM */}
              <div className="md:col-span-2 space-y-8">

                {/* FULL NAME */}
                <div>
                  <label className="block text-sm text-black mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full bg-transparent border-b border-black focus:outline-none py-2"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="block text-sm text-black mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent border-b border-black focus:outline-none py-2"
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="block text-sm text-black mb-2">
                    Message
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Write your message or appointment request"
                    className="w-full bg-transparent border-b border-black focus:outline-none py-2 resize-none"
                  />
                </div>

                {/* BUTTON */}
                <button className="mt-6 bg-[#8B6914] text-white px-10 py-3 rounded-full hover:bg-[#7a5c10] transition">
                  Send Message
                </button>
              </div>

              {/* CONTACT INFO */}
              <div className="space-y-8 text-sm text-black">

                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-black/70 mt-1">
                    b4uunisexsalon@gmail.com
                  </p>
                </div>

                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-black/70 mt-1">
                    +91 94384 00005
                  </p>
                </div>

                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-black/70 mt-1">
                    Plot number- EB -848, Badagada brit colony, Bhubaneswar
                  </p>
                </div>

                <div>
                  <p className="font-medium">Opening Hours</p>
                  <p className="text-black/70 mt-1">
                    Mon – Sun : 9:00 AM – 9:00 PM
                  </p>
                </div>

                {/* SOCIAL ICONS */}
                <div className="flex gap-4 pt-4">
                  <a href="https://www.facebook.com/profile.php?id=61565173592416#" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF className="cursor-pointer hover:opacity-60" />
                  </a>

                  <a
                    href="https://www.instagram.com/b4u_unisex_salon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="cursor-pointer hover:opacity-60" />
                  </a>

                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="cursor-pointer hover:opacity-60" />
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}