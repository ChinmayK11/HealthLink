import React from "react";
import { useTheme } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";

const About = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen px-6 py-12 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-health-blue">
          About <span className="text-health-teal">HealthLink</span>
        </h1>

        <p className="text-lg mb-6 leading-relaxed">
          HealthLink is your AI-powered health assistant, bridging the gap between symptoms and the right care. 
          Our platform uses intelligent symptom analysis to connect patients with verified healthcare professionals, 
          streamlining the journey to diagnosis and treatment.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="mb-6 leading-relaxed">
          We aim to make healthcare accessible, efficient, and personalized for everyone. Whether you’re a patient 
          seeking clarity or a doctor wanting to manage appointments better, HealthLink empowers you with smart tools 
          and a user-friendly experience.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>AI-powered symptom checker for early assessment</li>
          <li>Easy doctor discovery and appointment scheduling</li>
          <li>Real-time updates and 24/7 support</li>
          <li>Secure, privacy-focused platform</li>
        </ul>

        <div className="flex space-x-4">
          <Button variant="default" asChild>
            <a href="/symptoms">Start Symptom Check</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="/doctors">Find a Doctor</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
