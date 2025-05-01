import React from "react";
import {
  ChevronDown,
  Leaf,
  AlertTriangle,
  Wind,
  Droplets,
  Sun,
} from "lucide-react";
const Solutions = () => {
  const solutions = [
    {
      title: "Policy Measures",
      items: [
        "Stricter emissions standards for industries",
        "Improved public transportation systems",
        "Incentives for cleaner energy production",
        "Subsidies for farmers to adopt alternatives to crop burning",
      ],
    },
    {
      title: "Technological Solutions",
      items: [
        "Air purification towers in urban centers",
        "Smog-eating building materials and paints",
        "Clean energy adoption (solar, wind, etc.)",
        "Electric vehicle infrastructure development",
      ],
    },
    {
      title: "Community Actions",
      items: [
        "Carpooling and public transport use",
        "Tree planting initiatives",
        "Awareness campaigns and education",
        "Community monitoring of air quality",
      ],
    },
  ];

  return (
    <section id="solutions" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-3 text-center">
          Solutions for a Cleaner Future
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Addressing North India's pollution crisis requires coordinated efforts
          from government, industry, and communities. Here are some key
          approaches:
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-lg shadow-lg p-6 hover:bg-gray-600 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-4 text-green-400">
                {solution.title}
              </h3>
              <ul className="space-y-2">
                {solution.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <Leaf
                      className="text-green-400 mr-2 flex-shrink-0 mt-1"
                      size={16}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-900 rounded-lg p-8">
          <h3 className="text-xl font-semibold mb-6 text-center">
            Success Stories
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="font-semibold text-green-400 mb-2">
                Delhi's Odd-Even Vehicle Scheme
              </h4>
              <p className="text-gray-300">
                This policy reduced traffic congestion and led to a temporary
                20-25% reduction in air pollution levels when implemented.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="font-semibold text-green-400 mb-2">
                Happy Seeder Technology
              </h4>
              <p className="text-gray-300">
                Farmers using this technology can avoid burning crop residue,
                reducing pollution while maintaining agricultural productivity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
