
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Activity, 
  Calendar, 
  MapPin, 
  Settings, 
  LogOut, 
  Menu, 
  X, 
  User,
  ChevronRight,
  Bell
} from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
  userType: "patient" | "doctor";
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, userType }) => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  const handleLogout = () => {
    // In a real app, handle logout logic here
    console.log("Logging out...");
    navigate("/login");
  };
  
  // Get navigation links based on user type
  const getNavLinks = () => {
    if (userType === "patient") {
      return [
        { name: "Dashboard", icon: Home, path: "/patient-dashboard" },
        { name: "Symptom Checker", icon: Activity, path: "/symptoms" },
        { name: "Find Doctors", icon: MapPin, path: "/doctors" },
        { name: "Appointments", icon: Calendar, path: "/appointments" },
        { name: "Profile", icon: Settings, path: "/patient-profile" },
      ];
    } else {
      return [
        { name: "Dashboard", icon: Home, path: "/doctor-dashboard" },
        { name: "Appointments", icon: Calendar, path: "/doctor-appointments" },
        { name: "Patients", icon: User, path: "/doctor-patients" },
        { name: "Schedule", icon: Activity, path: "/doctor-schedule" },
        { name: "Profile", icon: Settings, path: "/doctor-profile" },
      ];
    }
  };
  
  const navLinks = getNavLinks();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40 md:hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-health-blue">
                Health<span className="text-health-teal">Link</span>
              </span>
            </Link>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleSidebar}
                aria-label="Toggle menu"
              >
                {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Dashboard Layout */}
      <div className="flex">
        {/* Sidebar - Desktop */}
        <aside className="hidden md:flex md:w-64 lg:w-72 flex-col fixed inset-y-0 bg-white border-r z-30">
          <div className="flex items-center h-16 px-6 border-b">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-health-blue">
                Health<span className="text-health-teal">Link</span>
              </span>
            </Link>
          </div>
          
          <div className="flex-grow overflow-y-auto py-6 px-4">
            <nav className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === link.path
                      ? "bg-health-blue-50 text-health-blue"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <link.icon className="mr-3 h-5 w-5" />
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
          
          <div className="p-4 border-t">
            <Button 
              variant="ghost" 
              className="w-full justify-start text-gray-700 hover:text-red-600 hover:bg-red-50"
              onClick={handleLogout}
            >
              <LogOut className="mr-3 h-5 w-5" />
              Log Out
            </Button>
          </div>
        </aside>
        
        {/* Sidebar - Mobile */}
        {isSidebarOpen && (
          <div className="md:hidden fixed inset-0 z-30 bg-black bg-opacity-30" onClick={toggleSidebar}>
            <aside 
              className="absolute top-0 left-0 h-full w-64 bg-white shadow-lg transform translate-x-0 transition-transform"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between h-16 px-6 border-b">
                <Link to="/" className="flex items-center">
                  <span className="text-xl font-bold text-health-blue">
                    Health<span className="text-health-teal">Link</span>
                  </span>
                </Link>
                <Button variant="ghost" size="sm" onClick={toggleSidebar}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              <div className="overflow-y-auto py-6 px-4">
                <nav className="space-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                        location.pathname === link.path
                          ? "bg-health-blue-50 text-health-blue"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                      onClick={toggleSidebar}
                    >
                      <link.icon className="mr-3 h-5 w-5" />
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>
              
              <div className="p-4 border-t">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-gray-700 hover:text-red-600 hover:bg-red-50"
                  onClick={handleLogout}
                >
                  <LogOut className="mr-3 h-5 w-5" />
                  Log Out
                </Button>
              </div>
            </aside>
          </div>
        )}
        
        {/* Main Content */}
        <main className="flex-1 md:ml-64 lg:ml-72 min-h-screen">
          {/* Desktop Header */}
          <header className="hidden md:block bg-white shadow-sm sticky top-0 z-20">
            <div className="px-6 h-16 flex items-center justify-end">
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                </Button>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <User className="h-4 w-4 text-gray-600" />
                  </div>
                  <div className="hidden lg:block text-sm font-medium">
                    {userType === "patient" ? "John Doe" : "Dr. Emily Wilson"}
                  </div>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
          </header>
          
          {/* Page Content */}
          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
