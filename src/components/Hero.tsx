
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-950/30 dark:to-teal-950/30 py-16 md:py-24 dark-transition">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-50 leading-tight">
              Connecting Symptoms to <span className="text-health-blue">the Right Care</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl">
              Experience healthcare simplified. Our AI-powered platform matches your symptoms with 
              qualified doctors nearby, giving you faster access to the care you need.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
              <Button className="bg-health-blue hover:bg-health-blue-600 text-lg h-12 focus-ring shadow-lg" asChild>
                <Link to="/symptoms">
                  Start Symptom Check <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" className="text-lg h-12 focus-ring border-2" asChild>
                <Link to="/doctors">Find a Doctor</Link>
              </Button>
            </div>
            <div className="pt-4 text-sm text-gray-600 dark:text-gray-400 flex flex-col sm:flex-row sm:items-center gap-4">
              <span className="flex items-center">
                <svg className="w-5 h-5 text-health-blue mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Trusted by 10,000+ patients
              </span>
              <span className="flex items-center">
                <svg className="w-5 h-5 text-health-blue mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                24/7 Support
              </span>
            </div>
          </div>
          <div className="relative animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 relative z-10 dark-transition">
              <div className="bg-health-blue-50 dark:bg-health-blue-900/30 p-4 rounded-xl mb-4 dark-transition">
                <h3 className="text-xl font-semibold text-health-blue mb-2">Quick Symptom Check</h3>
                <p className="text-gray-700 dark:text-gray-300">What symptoms are you experiencing today?</p>
              </div>
              <div className="space-y-3">
                <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg flex items-center dark-transition">
                  <div className="bg-health-blue-100 dark:bg-health-blue-900/50 rounded-full p-2 mr-3 dark-transition">
                    <svg className="w-5 h-5 text-health-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Headache</span>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg flex items-center dark-transition">
                  <div className="bg-health-blue-100 dark:bg-health-blue-900/50 rounded-full p-2 mr-3 dark-transition">
                    <svg className="w-5 h-5 text-health-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Fever</span>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg flex items-center dark-transition">
                  <div className="bg-health-blue-100 dark:bg-health-blue-900/50 rounded-full p-2 mr-3 dark-transition">
                    <svg className="w-5 h-5 text-health-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Add symptom...</span>
                </div>
              </div>
              <Button className="w-full mt-4 bg-health-blue hover:bg-health-blue-600 focus-ring">
                Check Symptoms
              </Button>
            </div>
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-health-teal-100 dark:bg-health-teal-500/10 rounded-full opacity-50 z-0 dark-transition"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-health-blue-100 dark:bg-health-blue-500/10 rounded-full opacity-50 z-0 dark-transition"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
