import React from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-5xl font-bold mb-4 tracking-tight">
          Keen<span className="text-gray-100">Keeper</span>
        </h2>

        <p className="text-gray-300 text-sm md:text-base max-w-3xl mb-8 leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <div className="flex flex-col items-center gap-4 mb-12">
          <span className="text-sm font-medium uppercase tracking-wider">
            Social Links
          </span>
          <div className="flex gap-4">
            <a
              href="#"
              className="bg-white p-2 rounded-full text-[#244D3F] hover:bg-gray-200 transition-colors"
            >
              <BsInstagram size={20} />
            </a>
            <a
              href="#"
              className="bg-white p-2 rounded-full text-[#244D3F] hover:bg-gray-200 transition-colors"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="bg-white p-2 rounded-full text-[#244D3F] hover:bg-gray-200 transition-colors"
            >
              <BsTwitter size={20} />
            </a>
          </div>
        </div>

        <div className="w-full border-t border-gray-700/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
