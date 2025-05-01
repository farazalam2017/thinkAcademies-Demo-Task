import React from "react";
import {
  ChevronDown,
  Leaf,
  AlertTriangle,
  Wind,
  Droplets,
  Sun,
} from "lucide-react";
const CausesSection = () => {
  const causes = [
    {
      title: "Industrial Emissions",
      description:
        "Factories and power plants across North India release hazardous levels of particulate matter, sulfur dioxide, and nitrogen oxides into the atmosphere.",
      icon: <Wind className="text-gray-600" size={36} />,
    },
    {
      title: "Vehicular Pollution",
      description:
        "The millions of vehicles in cities like Delhi, Gurugram, and Noida contribute significantly to air pollution through exhaust emissions.",
      icon: <Wind className="text-gray-600" size={36} />,
    },
    {
      title: "Crop Burning",
      description:
        "Farmers in Punjab and Haryana burn agricultural residue during harvest seasons, which significantly worsens air quality across the region.",
      icon: <AlertTriangle className="text-gray-600" size={36} />,
    },
    {
      title: "Construction Activities",
      description:
        "Ongoing construction projects generate large amounts of dust and particulate matter that contribute to poor air quality.",
      icon: <AlertTriangle className="text-gray-600" size={36} />,
    },
    {
      title: "Weather Conditions",
      description:
        "Winter temperature inversions trap pollutants close to the ground, intensifying pollution during the colder months.",
      icon: <Sun className="text-gray-600" size={36} />,
    },
    {
      title: "Population Density",
      description:
        "High population density increases energy consumption, waste generation, and resource usage, all contributing to pollution.",
      icon: <Droplets className="text-gray-600" size={36} />,
    },
  ];

  return (
    <section id="causes" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-3 text-center">
          Major Causes of Pollution
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Understanding the sources of pollution is essential for developing
          effective solutions to improve air quality in North India.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {causes.map((cause, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{cause.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{cause.title}</h3>
              <p className="text-gray-600">{cause.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CausesSection;
