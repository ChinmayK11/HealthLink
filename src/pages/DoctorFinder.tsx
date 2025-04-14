
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Star, Calendar, Filter, Map, Search, Grid, List } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import DashboardLayout from "@/components/DashboardLayout";

// Mock data for doctors
const mockDoctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialization: "Cardiology",
    rating: 4.8,
    experience: 12,
    distance: 1.2,
    availability: ["Today", "Tomorrow"],
    address: "123 Medical Center, Downtown",
    image: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialization: "Neurology",
    rating: 4.7,
    experience: 15,
    distance: 2.5,
    availability: ["Tomorrow", "Thursday"],
    address: "456 Health Avenue, Uptown",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialization: "Pediatrics",
    rating: 4.9,
    experience: 10,
    distance: 3.1,
    availability: ["Today", "Friday"],
    address: "789 Children's Clinic, Westside",
    image: "https://randomuser.me/api/portraits/women/28.jpg"
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialization: "Dermatology",
    rating: 4.6,
    experience: 8,
    distance: 4.0,
    availability: ["Wednesday", "Friday"],
    address: "321 Skin Health Center, Eastside",
    image: "https://randomuser.me/api/portraits/men/55.jpg"
  },
  {
    id: 5,
    name: "Dr. Priya Patel",
    specialization: "Endocrinology",
    rating: 4.9,
    experience: 14,
    distance: 5.2,
    availability: ["Thursday", "Saturday"],
    address: "567 Diabetes Care, Northside",
    image: "https://randomuser.me/api/portraits/women/63.jpg"
  },
  {
    id: 6,
    name: "Dr. Robert Garcia",
    specialization: "Orthopedics",
    rating: 4.7,
    experience: 18,
    distance: 3.7,
    availability: ["Today", "Monday"],
    address: "890 Joint & Bone Clinic, Southside",
    image: "https://randomuser.me/api/portraits/men/72.jpg"
  },
];

const specializations = [
  "All Specializations",
  "Cardiology",
  "Neurology",
  "Pediatrics", 
  "Dermatology",
  "Endocrinology",
  "Orthopedics",
  "General Practice",
  "Gynecology",
  "Ophthalmology",
  "ENT"
];

const DoctorFinder = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [specialization, setSpecialization] = useState("All Specializations");
  const [maxDistance, setMaxDistance] = useState(10);
  const [viewType, setViewType] = useState("grid");
  const [availabilityFilter, setAvailabilityFilter] = useState("any");
  const [filteredDoctors, setFilteredDoctors] = useState(mockDoctors);

  useEffect(() => {
    // Request location when component mounts
    requestLocation();
  }, []);

  useEffect(() => {
    // Filter doctors based on criteria
    let filtered = mockDoctors;
    
    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(doc => 
        doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.specialization.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Filter by specialization
    if (specialization !== "All Specializations") {
      filtered = filtered.filter(doc => doc.specialization === specialization);
    }
    
    // Filter by distance
    filtered = filtered.filter(doc => doc.distance <= maxDistance);
    
    // Filter by availability
    if (availabilityFilter === "today") {
      filtered = filtered.filter(doc => doc.availability.includes("Today"));
    }
    
    setFilteredDoctors(filtered);
  }, [searchQuery, specialization, maxDistance, availabilityFilter]);

  const requestLocation = () => {
    setIsLoadingLocation(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          setIsLoadingLocation(false);
          toast.success("Location detected successfully!");
        },
        (error) => {
          console.error("Error getting location:", error);
          setIsLoadingLocation(false);
          toast.error("Could not detect location. Using default location.");
        }
      );
    } else {
      toast.error("Geolocation is not supported by your browser");
      setIsLoadingLocation(false);
    }
  };

  const handleBookAppointment = (doctorId: number) => {
    navigate(`/book-appointment/${doctorId}`);
  };

  const openInMaps = (address: string) => {
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://maps.google.com/?q=${encodedAddress}`, '_blank');
  };

  return (
    <DashboardLayout userType="patient">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-health-blue mb-4 md:mb-0">Find Doctors Near You</h1>
          <div className="flex items-center space-x-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={requestLocation}
              disabled={isLoadingLocation}
            >
              <MapPin className="h-4 w-4 mr-2" />
              {isLoadingLocation ? "Detecting..." : location ? "Update Location" : "Get My Location"}
            </Button>
            <Tabs defaultValue={viewType} onValueChange={setViewType} className="w-[140px]">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="grid"><Grid className="h-4 w-4" /></TabsTrigger>
                <TabsTrigger value="list"><List className="h-4 w-4" /></TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          {/* Search and Filter Section */}
          <div className="col-span-1 lg:col-span-1 space-y-6 bg-white rounded-lg shadow p-6">
            <div>
              <h2 className="text-lg font-semibold mb-4 flex items-center">
                <Filter className="mr-2 h-5 w-5" />
                Filters
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Search</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input 
                      placeholder="Doctor name or specialty" 
                      className="pl-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Specialization</label>
                  <Select value={specialization} onValueChange={setSpecialization}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select specialization" />
                    </SelectTrigger>
                    <SelectContent>
                      {specializations.map((spec) => (
                        <SelectItem key={spec} value={spec}>
                          {spec}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Maximum Distance: {maxDistance} km
                  </label>
                  <Slider
                    defaultValue={[maxDistance]}
                    max={20}
                    step={1}
                    onValueChange={(values) => setMaxDistance(values[0])}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Availability</label>
                  <Select value={availabilityFilter} onValueChange={setAvailabilityFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any time</SelectItem>
                      <SelectItem value="today">Available today</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button className="w-full" onClick={() => setFilteredDoctors(mockDoctors)}>
                  Reset Filters
                </Button>
              </div>
            </div>
          </div>

          {/* Doctors List */}
          <div className="col-span-1 lg:col-span-3">
            <h2 className="text-xl font-semibold mb-4">
              {filteredDoctors.length} Doctors Found
            </h2>

            <div className={viewType === "grid" ? "grid grid-cols-1 md:grid-cols-2 gap-6" : "space-y-6"}>
              {filteredDoctors.map((doctor) => (
                <Card key={doctor.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className={`flex ${viewType === "grid" ? "flex-col" : "flex-row"}`}>
                      <div className={`${viewType === "grid" ? "w-full h-48" : "w-1/3 h-40"} relative`}>
                        <img 
                          src={doctor.image} 
                          alt={doctor.name} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 right-2">
                          <Badge className="bg-health-blue">
                            <MapPin className="h-3 w-3 mr-1" />
                            {doctor.distance} km
                          </Badge>
                        </div>
                      </div>
                      
                      <div className={`${viewType === "grid" ? "p-6" : "p-6 w-2/3"}`}>
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-bold text-lg text-health-blue">{doctor.name}</h3>
                            <p className="text-gray-600">{doctor.specialization}</p>
                          </div>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                            <span className="ml-1 font-medium">{doctor.rating}</span>
                          </div>
                        </div>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-sm text-gray-600">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>{doctor.experience} years experience</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span>{doctor.address}</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {doctor.availability.map((day) => (
                            <Badge key={day} variant="outline" className="text-health-teal border-health-teal">
                              {day}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                          <Button onClick={() => handleBookAppointment(doctor.id)} className="flex-1">
                            <Calendar className="h-4 w-4 mr-2" />
                            Book Appointment
                          </Button>
                          <Button variant="outline" onClick={() => openInMaps(doctor.address)} className="flex-1">
                            <Map className="h-4 w-4 mr-2" />
                            Open in Maps
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              {filteredDoctors.length === 0 && (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-500 text-lg">No doctors found matching your criteria. Try adjusting your filters.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DoctorFinder;
