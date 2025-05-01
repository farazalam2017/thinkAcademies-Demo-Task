import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AirQualitySection from "./components/AirQualitySection";
import CausesSection from "./components/CausesSection";
import ImpactSection from "./components/ImpactSection";
import Solutions from "./components/Solutions";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />
      <Hero />
      <AirQualitySection />
      <CausesSection />
      <ImpactSection />
      <Solutions />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default App;
