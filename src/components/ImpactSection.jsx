import React from "react";
import {
  ChevronDown,
  Leaf,
  AlertTriangle,
  Wind,
  Droplets,
  Sun,
} from "lucide-react";
const ImpactSection = () => {
  return (
    <section id="impact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-3 text-center">
          Health & Environmental Impact
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          The consequences of pollution extend far beyond just poor visibility,
          affecting health, economy, and quality of life across North India.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 border-l-4 border-green-600 pl-4">
              Health Effects
            </h3>
            <div className="space-y-6">
              <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
                <h4 className="font-semibold text-lg mb-2">
                  Respiratory Issues
                </h4>
                <p className="text-gray-600">
                  Rising cases of asthma, bronchitis, and other respiratory
                  conditions across all age groups, particularly among children.
                </p>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
                <h4 className="font-semibold text-lg mb-2">
                  Cardiovascular Diseases
                </h4>
                <p className="text-gray-600">
                  Increased risk of heart attacks, strokes, and other
                  cardiovascular problems due to prolonged exposure to air
                  pollution.
                </p>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
                <h4 className="font-semibold text-lg mb-2">Premature Deaths</h4>
                <p className="text-gray-600">
                  Studies estimate that air pollution contributes to over 1.2
                  million premature deaths annually in India.
                </p>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
                <h4 className="font-semibold text-lg mb-2">
                  Weakened Immunity
                </h4>
                <p className="text-gray-600">
                  Decreased immune function leading to increased susceptibility
                  to infections and other diseases.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 border-l-4 border-green-600 pl-4">
              Broader Impacts
            </h3>
            <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md mb-6">
              <h4 className="font-semibold text-lg mb-3">Economic Burden</h4>
              <div className="flex items-center justify-between mb-2">
                <span>Healthcare Costs</span>
                <span className="text-green-400">$40+ billion/year</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span>Lost Productivity</span>
                <span className="text-green-400">$30+ billion/year</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span>Tourism Impact</span>
                <span className="text-green-400">$20+ billion/year</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Other Costs</span>
                <span className="text-green-400">$15+ billion/year</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
                <h4 className="font-semibold text-lg mb-2">
                  Environmental Degradation
                </h4>
                <p className="text-gray-600">
                  Damage to crops, forests, and water bodies, reducing
                  agricultural yields and harming biodiversity.
                </p>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
                <h4 className="font-semibold text-lg mb-2">Climate Change</h4>
                <p className="text-gray-600">
                  Air pollutants contribute to global warming, affecting
                  long-term climate patterns and agricultural productivity.
                </p>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
                <h4 className="font-semibold text-lg mb-2">Quality of Life</h4>
                <p className="text-gray-600">
                  Reduced visibility, outdoor activity restrictions, and school
                  closures significantly impact daily life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
