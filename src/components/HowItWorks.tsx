
import { CheckCircle, MapPin, Calendar } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <CheckCircle className="w-10 h-10 text-health-blue" />,
      title: "Enter Your Symptoms",
      description: "Describe your symptoms in detail to get accurate analysis from our AI system.",
      iconBg: "bg-health-blue-50 dark:bg-health-blue-900/30",
      delay: "0ms"
    },
    {
      icon: <MapPin className="w-10 h-10 text-health-teal" />,
      title: "Get Prediction",
      description: "Receive AI-powered predictions and recommendations for healthcare specialists.",
      iconBg: "bg-health-teal-50 dark:bg-health-teal-900/30",
      delay: "200ms"
    },
    {
      icon: <Calendar className="w-10 h-10 text-health-blue" />,
      title: "Book Doctor Nearby",
      description: "Schedule appointments with qualified healthcare providers in your area.",
      iconBg: "bg-health-blue-50 dark:bg-health-blue-900/30",
      delay: "400ms"
    },
  ];

  return (
    <section className="section-padding bg-white dark:bg-gray-800 dark-transition" id="how-it-works">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">How It Works</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            HealthLink simplifies your healthcare journey in just three easy steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700 card-hover animate-fade-in dark-transition" 
              style={{ animationDelay: step.delay }}
            >
              <div className={`${step.iconBg} w-16 h-16 rounded-full flex items-center justify-center mb-4 dark-transition`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
              <div className="mt-4 flex items-center">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-health-blue text-white font-bold text-sm">
                  {index + 1}
                </span>
                {index < steps.length - 1 && (
                  <div className="hidden md:block h-0.5 flex-1 bg-gray-200 dark:bg-gray-700 ml-2 dark-transition">
                    <div className="h-0.5 bg-health-blue" style={{ width: "0%", transition: "width 1s ease-in-out 1s" }}></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
