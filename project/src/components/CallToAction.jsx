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
const CallToAction = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this to your backend
    console.log("Submitted email:", email);
    setSubmitted(true);
    setEmail("");
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-20 bg-green-600 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Join Our Fight for Clean Air
          </h2>
          <p className="text-xl mb-8">
            Stay updated on air quality, pollution control measures, and ways
            you can contribute to a healthier North India.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-gray-800"
                required
              />
              <button
                type="submit"
                className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </div>
            {submitted && (
              <p className="mt-4 text-white bg-green-700 p-2 rounded-lg">
                Thank you for subscribing!
              </p>
            )}
          </form>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <a
              href="#"
              className="bg-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Donate
            </a>
            <a
              href="#"
              className="bg-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Volunteer
            </a>
            <a
              href="#"
              className="bg-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Download App
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
