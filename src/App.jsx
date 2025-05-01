import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/hero";
import AirQualitySection from "./components/AirQualitySection";
import CausesSection from "./components/CausesSection";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import ImpactSection from "./components/ImpactSection";
import Solutions from "./components/Solutions";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <NavBar />
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
