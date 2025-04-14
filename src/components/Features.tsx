
import { Brain, MapPin, Clock, ShieldCheck } from "lucide-react";

const Features = () => {
  const featuresList = [
    {
      icon: <Brain className="w-10 h-10 text-health-blue" />,
      title: "AI-powered Predictions",
      description: "Our advanced AI algorithm analyzes your symptoms and provides accurate healthcare predictions and specialist recommendations.",
      color: "text-health-blue",
      bgColor: "bg-health-blue-50 dark:bg-health-blue-900/30",
      delay: "0ms"
    },
    {
      icon: <MapPin className="w-10 h-10 text-health-teal" />,
      title: "Real-time Location Services",
      description: "Find healthcare specialists near you with our integrated map service showing available doctors in your area.",
      color: "text-health-teal",
      bgColor: "bg-health-teal-50 dark:bg-health-teal-900/30",
      delay: "200ms"
    },
    {
      icon: <Clock className="w-10 h-10 text-health-blue" />,
      title: "24/7 Access & Support",
      description: "Use our symptom checker anytime, day or night, and access emergency contacts when you need them most.",
      color: "text-health-blue",
      bgColor: "bg-health-blue-50 dark:bg-health-blue-900/30",
      delay: "400ms"
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-health-teal" />,
      title: "Secure & Private",
      description: "Your health data is encrypted and securely stored, ensuring your medical information stays private and protected.",
      color: "text-health-teal",
      bgColor: "bg-health-teal-50 dark:bg-health-teal-900/30", 
      delay: "600ms"
    }
  ];

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900 dark-transition" id="features">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            Key Features & Benefits
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            HealthLink provides innovative tools and features to make healthcare more accessible and efficient
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuresList.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 card-hover animate-fade-in dark-transition"
              style={{ animationDelay: feature.delay }}
            >
              <div className={`${feature.bgColor} w-16 h-16 rounded-full flex items-center justify-center mb-4 dark-transition`}>
                {feature.icon}
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${feature.color}`}>
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
