import React from "react";
import Image from "../assets/image-1.avif";
import {
  ChevronDown,
  Leaf,
  AlertTriangle,
  Wind,
  Droplets,
  Sun,
} from "lucide-react";
const Hero = () => {
  return (
    <section
      id="home"
      className="pt-32 pb-20 bg-gradient-to-b from-gray-800 to-gray-900 text-white"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Fighting the Rising Pollution Crisis in North India
            </h1>
            <p className="text-lg mb-8 text-gray-300">
              Join our mission to combat the dangerous levels of air pollution
              affecting millions across North India, and work towards a cleaner,
              healthier future.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#air-quality"
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Check Air Quality
              </a>
              <a
                href="#solutions"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Take Action
              </a>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="bg-gray-700 rounded-lg overflow-hidden shadow-xl">
                <img
                  src={Image}
                  alt="Delhi smog"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
                  <p className="text-white text-sm">
                    Delhi skyline obscured by thick smog during peak pollution
                    season
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden md:block">
          <a
            href="#air-quality"
            className="text-white flex flex-col items-center animate-bounce"
          >
            <span className="mb-2">Scroll Down</span>
            <ChevronDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
