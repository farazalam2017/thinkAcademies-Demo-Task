import React from "react";
import { useState } from "react";
import {
  ChevronDown,
  Leaf,
  AlertTriangle,
  Wind,
  Droplets,
  Sun,
} from "lucide-react";
const AirQualitySection = () => {
  const [selectedCity, setSelectedCity] = useState("Delhi");

  // Simulate AQI data (in a real app, this would come from an API)
  const cityData = {
    Delhi: { aqi: 358, level: "Hazardous", color: "bg-red-600" },
    Gurugram: { aqi: 325, level: "Very Unhealthy", color: "bg-purple-600" },
    Noida: { aqi: 301, level: "Very Unhealthy", color: "bg-purple-600" },
    Lucknow: { aqi: 275, level: "Very Unhealthy", color: "bg-purple-600" },
    Kanpur: { aqi: 295, level: "Very Unhealthy", color: "bg-purple-600" },
    Chandigarh: { aqi: 185, level: "Unhealthy", color: "bg-red-400" },
  };

  return (
    <section id="air-quality" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-3 text-center">
          Current Air Quality
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          North India consistently faces some of the worst air quality levels in
          the world, with many cities regularly exceeding safe limits by 10-15
          times.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Select a City:</h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {Object.keys(cityData).map((city) => (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={`py-2 px-4 rounded-md text-center transition-colors ${
                    selectedCity === city
                      ? "bg-green-600 text-white"
                      : "bg-white hover:bg-gray-200"
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-inner">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-bold">{selectedCity}</h4>
                <span
                  className={`${cityData[selectedCity].color} text-white px-3 py-1 rounded-full text-sm`}
                >
                  {cityData[selectedCity].level}
                </span>
              </div>

              <div className="flex items-center mb-4">
                <div className="text-4xl font-bold mr-4">
                  {cityData[selectedCity].aqi}
                </div>
                <div>
                  <p className="text-gray-600">Air Quality Index (AQI)</p>
                  <p className="text-sm text-gray-500">Updated: Today</p>
                </div>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                <div
                  className={`${cityData[selectedCity].color} h-4 rounded-full`}
                  style={{
                    width: `${Math.min(cityData[selectedCity].aqi / 5, 100)}%`,
                  }}
                ></div>
              </div>

              <p className="text-red-600 flex items-center">
                <AlertTriangle size={16} className="mr-2" />
                {cityData[selectedCity].aqi > 300
                  ? "Health emergency: Everyone may experience serious health effects"
                  : cityData[selectedCity].aqi > 200
                  ? "Health alert: Everyone may experience more serious health effects"
                  : "Health warning: Sensitive groups should avoid outdoor activity"}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Understanding AQI Levels
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-green-500 mr-3"></div>
                <div>
                  <p className="font-medium">0-50: Good</p>
                  <p className="text-sm text-gray-600">
                    Air quality is satisfactory, poses little or no risk
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-yellow-400 mr-3"></div>
                <div>
                  <p className="font-medium">51-100: Moderate</p>
                  <p className="text-sm text-gray-600">
                    Acceptable; may be problematic for sensitive groups
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-orange-400 mr-3"></div>
                <div>
                  <p className="font-medium">
                    101-150: Unhealthy for Sensitive Groups
                  </p>
                  <p className="text-sm text-gray-600">
                    Children, elderly, and people with respiratory issues at
                    risk
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-red-400 mr-3"></div>
                <div>
                  <p className="font-medium">151-200: Unhealthy</p>
                  <p className="text-sm text-gray-600">
                    Everyone may begin to experience health effects
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-purple-600 mr-3"></div>
                <div>
                  <p className="font-medium">201-300: Very Unhealthy</p>
                  <p className="text-sm text-gray-600">
                    Health alert: everyone may experience serious health effects
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-red-600 mr-3"></div>
                <div>
                  <p className="font-medium">301+: Hazardous</p>
                  <p className="text-sm text-gray-600">
                    Health warnings of emergency conditions, entire population
                    at risk
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AirQualitySection;
