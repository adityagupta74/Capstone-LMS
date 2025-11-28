import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaSkype,
} from "react-icons/fa";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-[#0b1d33] text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + Description */}
        <div>
          <h2 className="text-3xl font-bold flex items-center gap-2">🎓 VCC</h2>
          <p className="mt-4 leading-relaxed">
            Continually optimize backward manufactured products whereas
            communities negotiate life compelling alignments.
          </p>

          {/* Social Icons */}
          <h3 className="mt-6 mb-3 font-semibold">FOLLOW US ON:</h3>
          <div className="flex items-center gap-4 text-lg">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <Link to="https://www.instagram.com/vaishnavicommerceclasses1?igsh=ZXVlYnp5ZTkzdmJu">
              <FaTwitter className="hover:text-white cursor-pointer" />
            </Link>{" "}
            <FaLinkedinIn className="hover:text-white cursor-pointer" />
            <FaYoutube className="hover:text-white cursor-pointer" />
            <FaSkype className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>Development</li>
            <li>Marketing</li>
            <li>Data Science</li>
            <li>Business</li>
            <li>Design</li>
            <li>Photography</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>Community</li>
            <li>Support</li>
            <li>Video Guides</li>
            <li>Documentation</li>
            <li>Security</li>
            <li>Template</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Get in touch!</h3>
          <p className="mb-4">
            Subscribe our newsletter to get our latest update & news
          </p>

          <div className="flex items-center bg-white/10 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="bg-transparent w-full px-4 py-3 text-gray-200 placeholder-gray-400 outline-none"
            />
            <span className="px-4 text-gray-400">✉️</span>
          </div>

          <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg w-full font-semibold">
            SUBSCRIBE
          </button>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-gray-400">
        Copyright © 2025 <span className="text-blue-500">VCC</span> All Rights
        Reserved.
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}
