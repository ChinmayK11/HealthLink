
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-bold text-white">
                Health<span className="text-health-teal">Link</span>
              </span>
            </Link>
            <p className="text-gray-300">
              Connecting patients with the right healthcare providers through AI-powered symptom analysis.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-health-teal transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-health-teal transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-health-teal transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-health-teal transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-health-teal">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/symptoms" className="text-gray-300 hover:text-white transition-colors">
                  Symptoms Checker
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="text-gray-300 hover:text-white transition-colors">
                  Find Doctors
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* For Patients & Doctors */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-health-teal">For Patients & Doctors</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/login" className="text-gray-300 hover:text-white transition-colors">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-300 hover:text-white transition-colors">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/appointments" className="text-gray-300 hover:text-white transition-colors">
                  Manage Appointments
                </Link>
              </li>
              <li>
                <Link to="/health-resources" className="text-gray-300 hover:text-white transition-colors">
                  Health Resources
                </Link>
              </li>
              <li>
                <Link to="/emergency" className="text-gray-300 hover:text-white transition-colors">
                  Emergency Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-health-teal">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="mr-3 mt-1">
                  <Mail size={18} className="text-health-teal" />
                </div>
                <span className="text-gray-300">
                  support@healthlink.com
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1">
                  <Phone size={18} className="text-health-teal" />
                </div>
                <span className="text-gray-300">
                  +1 (800) 123-4567
                </span>
              </li>
              <li className="text-gray-300 mt-4">
                <strong className="text-white">Emergency Support:</strong><br />
                Available 24/7 for urgent health concerns
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} HealthLink. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 text-sm hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 text-sm hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/accessibility" className="text-gray-400 text-sm hover:text-white transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
