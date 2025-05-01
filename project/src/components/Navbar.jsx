import React, { useState, useEffect } from "react";
import { Leaf } from "lucide-react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Leaf className="text-green-600 mr-2" />
          <span className="text-xl font-bold">CleanAirIndia</span>
        </div>

        <div className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-green-600 transition-colors">
            Home
          </a>
          <a
            href="#air-quality"
            className="hover:text-green-600 transition-colors"
          >
            Air Quality
          </a>
          <a href="#causes" className="hover:text-green-600 transition-colors">
            Causes
          </a>
          <a href="#impact" className="hover:text-green-600 transition-colors">
            Impact
          </a>
          <a
            href="#solutions"
            className="hover:text-green-600 transition-colors"
          >
            Solutions
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <a
              href="#home"
              className="hover:text-green-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#air-quality"
              className="hover:text-green-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Air Quality
            </a>
            <a
              href="#causes"
              className="hover:text-green-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Causes
            </a>
            <a
              href="#impact"
              className="hover:text-green-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Impact
            </a>
            <a
              href="#solutions"
              className="hover:text-green-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
