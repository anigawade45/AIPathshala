import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiMoviePlay } from "react-icons/bi";
import { PiBookOpenTextLight } from "react-icons/pi";
import { HiOutlineSquares2X2, HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineMailOutline, MdOutlineFileDownload, MdOutlineGavel, MdOutlineContactMail } from "react-icons/md";
import { FaYoutube, FaInstagram, FaDiscord, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-black text-gray-400 py-10 px-4 text-sm">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
      {/* Brand */}
      <div className="mb-8 md:mb-0 md:mr-12 min-w-[180px]">
        <div className="mb-3">
          <span className="block text-white text-4xl font-extrabold leading-none tracking-tight">AI</span>
          <span className="block text-white text-2xl font-bold leading-none tracking-tight mb-2">Pathशाला</span>
        </div>
        <p className="mb-2">Learn. Build. Automate. Grow.</p>
        <p>We help you master AI tools practically – no fluff, just results.</p>
      </div>
      {/* Quick Links */}
      <div className="mb-8 md:mb-0 md:mr-12">
        <h4 className="text-white font-semibold mb-3">Quick Links</h4>
        <ul className="space-y-2">
          <li className="flex items-center gap-2"><AiOutlineHome /> Home</li>
          <li className="flex items-center gap-2"><BiMoviePlay /> Reels</li>
          <li className="flex items-center gap-2"><PiBookOpenTextLight /> Tutorials</li>
          <li className="flex items-center gap-2"><HiOutlineSquares2X2 /> Workflows</li>
          <li className="flex items-center gap-2"><HiOutlineUsers /> Community</li>
        </ul>
      </div>
      {/* Resources */}
      <div className="mb-8 md:mb-0 md:mr-12">
        <h4 className="text-white font-semibold mb-3">Resources</h4>
        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-yellow-400"><MdOutlineMailOutline /> <span className="text-gray-400">Newsletter Signup</span></li>
          <li className="flex items-center gap-2 text-yellow-400"><MdOutlineContactMail /> <span className="text-gray-400">Submit Your Project</span></li>
          <li className="flex items-center gap-2 text-yellow-400"><MdOutlineFileDownload /> <span className="text-gray-400">Download Toolkit</span></li>
          <li className="flex items-center gap-2 text-yellow-400"><MdOutlineGavel /> <span className="text-gray-400">Terms & Privacy</span></li>
          <li className="flex items-center gap-2 text-yellow-400"><MdOutlineContactMail /> <span className="text-gray-400">Contact Us</span></li>
        </ul>
      </div>
      {/* Follow Us */}
      <div>
        <h4 className="text-white font-semibold mb-3">Follow Us</h4>
        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-yellow-400">
            <FaYoutube />
            <span className="text-white font-medium">YouTube</span>
            <span className="text-gray-400 ml-2">Shorts / Reels</span>
          </li>
          <li className="flex items-center gap-2 text-yellow-400">
            <FaInstagram />
            <span className="text-white font-medium">Instagram</span>
            <span className="text-gray-400 ml-2">Tips & Demos</span>
          </li>
          <li className="flex items-center gap-2 text-yellow-400">
            <FaDiscord />
            <span className="text-white font-medium">Discord</span>
            <span className="text-gray-400 ml-2">Community</span>
          </li>
          <li className="flex items-center gap-2 text-yellow-400">
            <FaLinkedin />
            <span className="text-white font-medium">Linkedin</span>
            <span className="text-gray-400 ml-2">For Founders</span>
          </li>
          <li className="flex items-center gap-2 text-yellow-400">
            <FaGithub />
            <span className="text-white font-medium">GitHub</span>
            <span className="text-gray-400 ml-2">Toolkits</span>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer; 