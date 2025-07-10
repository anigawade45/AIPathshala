import React from "react";
import { FaLock, FaBolt } from "react-icons/fa";
import logo from '../assets/logo.jpg'; // adjust the path as needed

// 3D style for icons
const icon3DStyle = "transition-transform duration-200 hover:scale-110 hover:rotate-3 hover:drop-shadow-2xl drop-shadow-lg cursor-pointer animate-float";
const floatKeyframes = `
@keyframes float {
  0% { transform: translateY(0px);}
  50% { transform: translateY(-8px);}
  100% { transform: translateY(0px);}
}
.animate-float {
  animation: float 3s ease-in-out infinite;
}
`;

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Tools", href: "#" },
  { name: "Video", href: "#" },
  { name: "FAQs", href: "#" },
];

const Header = () => (
  <>
    <style>{floatKeyframes}</style>
    {/* NAVBAR */}
    <nav className="absolute top-0 left-0 w-full z-20 flex items-center justify-between px-10 py-4
      bg-black/60 backdrop-blur-md border-b border-gray-700 shadow-lg rounded-b-3xl font-sans
      ">
      <div className="flex items-center">
        <img src={logo} alt="AI Pathshala Logo" className="h-20 w-auto mr-3 drop-shadow-lg" />
      </div>
      <div className="flex gap-8 items-center">
        {navLinks.map(link => (
          <a
            key={link.name}
            href={link.href}
            className={`
              text-white text-lg font-medium px-3 py-1 rounded transition
              hover:text-yellow-400 hover:bg-white/10 hover:scale-105
              ${link.name === "Home" ? "border-b-2 border-yellow-400" : ""}
            `}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
    {/* HERO SECTION */}
    <header className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden pt-28 font-sans">
      {/* Background image and overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/image.png"
          alt="Professional woman with laptop"
          className="w-full h-full object-cover object-center brightness-200 scale-x-[1]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/40"></div>
      </div>
      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between w-full px-4 py-16">
        {/* Left: Text */}
        <div className="flex-1 text-left text-white max-w-xl">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-2 text-white">
            Learn &amp; Apply AI Tools 
            <br/>
            Without the&nbsp;
            <span className="text-yellow-400 font-extrabold whitespace-nowrap">Overwhelm</span>
          </h1>
          {/* Subheading */}
          <div className="text-xl md:text-2xl mb-2 text-white">
            Short reels, <span className="text-yellow-400 font-bold">Automate</span> Grow.
          </div>
          {/* Description */}
          <div className="text-gray-200 mb-6 max-w-lg">
            Short reels, hands-on demos, and ready-to-use workflows. No fluff. Just results.
          </div>
          {/* Buttons */}
          <div className="flex gap-4 mb-6 flex-wrap">
            <button className="flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded font-bold text-base shadow hover:bg-yellow-300 transition">
              <FaLock color="black" /> Watch a 60-Second Demo
            </button>
            <button className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded font-bold text-base shadow hover:bg-gray-700 transition border border-gray-600">
              <FaBolt /> Try a Tool Now
            </button>
          </div>
          {/* Features */}
          <div className="flex flex-wrap gap-6 items-center text-sm">
            <div className="flex items-center gap-2 text-white">
              <span className="text-green-400 text-lg">●</span> <span className="font-bold">Used by 10K+ </span>Creators
            </div>
            <div className="flex items-center gap-2 text-white">
              <span className="text-green-400 text-lg">✔</span> <span className="font-bold">100+ </span>Workflows
            </div>
            <div className="flex items-center gap-2 text-white">
              <span className="text-green-400 text-lg">✔</span> Rated <span className="font-bold">4.9/5</span> on Discord
            </div>
          </div>
        </div>
        {/* Right: 3D Laptop Image */}
        <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0">
          <img
            src="/assets/laptop.png"
            alt="3D Laptop"
            className="max-w-xs md:max-w-sm lg:max-w-md w-full h-auto rounded-2xl shadow-2xl object-contain bg-transparent mr-8"
            style={{ background: 'transparent' }}
          />
        </div>
      </div>
    </header>
  </>
);

export default Header; 