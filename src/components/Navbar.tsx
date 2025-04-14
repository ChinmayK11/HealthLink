
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-card shadow-sm sticky top-0 z-50 dark-transition">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-health-blue">
              Health<span className="text-health-teal">Link</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-foreground hover:text-health-blue font-medium focus-ring rounded-md px-2 py-1">
              Home
            </Link>
            <Link to="/symptoms" className="text-foreground hover:text-health-blue font-medium focus-ring rounded-md px-2 py-1">
              Symptoms Checker
            </Link>
            <Link to="/doctors" className="text-foreground hover:text-health-blue font-medium focus-ring rounded-md px-2 py-1">
              Book Doctor
            </Link>
            <Link to="/about" className="text-foreground hover:text-health-blue font-medium focus-ring rounded-md px-2 py-1">
              About
            </Link>
            <Link to="/contact" className="text-foreground hover:text-health-blue font-medium focus-ring rounded-md px-2 py-1">
              Contact
            </Link>
          </nav>

          {/* Auth Buttons & Theme Toggle (Desktop) */}
          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />
            <Button variant="outline" asChild className="focus-ring">
              <Link to="/login">Login</Link>
            </Button>
            <Button className="bg-health-blue hover:bg-health-blue-600 focus-ring" asChild>
              <Link to="/register">Register</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              type="button"
              className="text-foreground p-2 rounded-md focus-ring"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-t dark-transition animate-slide-in-right">
          <div className="container mx-auto px-4 py-3 space-y-3">
            <Link
              to="/"
              className="block py-2 text-foreground hover:text-health-blue font-medium focus-ring rounded-md px-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/symptoms"
              className="block py-2 text-foreground hover:text-health-blue font-medium focus-ring rounded-md px-2"
              onClick={toggleMenu}
            >
              Symptoms Checker
            </Link>
            <Link
              to="/doctors"
              className="block py-2 text-foreground hover:text-health-blue font-medium focus-ring rounded-md px-2"
              onClick={toggleMenu}
            >
              Book Doctor
            </Link>
            <Link
              to="/about"
              className="block py-2 text-foreground hover:text-health-blue font-medium focus-ring rounded-md px-2"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-foreground hover:text-health-blue font-medium focus-ring rounded-md px-2"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <div className="pt-3 pb-1 flex flex-col space-y-2">
              <Button variant="outline" asChild className="w-full justify-center focus-ring">
                <Link to="/login" onClick={toggleMenu}>Login</Link>
              </Button>
              <Button className="w-full justify-center bg-health-blue hover:bg-health-blue-600 focus-ring" asChild>
                <Link to="/register" onClick={toggleMenu}>Register</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
