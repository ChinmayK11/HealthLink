
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { User, Stethoscope, MapPin, Phone, Mail, Lock, User2 } from "lucide-react";

const Register = () => {
  const [userType, setUserType] = useState("patient");
  
  // Shared form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  // Doctor-specific fields
  const [specialization, setSpecialization] = useState("");
  const [experience, setExperience] = useState("");
  const [clinicLocation, setClinicLocation] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration attempt", { 
      userType, 
      name, 
      email, 
      phone, 
      city, 
      password,
      // Doctor fields if applicable
      ...(userType === "doctor" && {
        specialization,
        experience,
        clinicLocation
      })
    });
    // Here you would handle registration logic
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="shadow-lg border-gray-200 animate-fade-in">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">
                Create Your HealthLink Account
              </CardTitle>
              <CardDescription className="text-center">
                Register to access personalized healthcare services
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="patient" className="w-full" onValueChange={setUserType}>
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="patient" className="flex items-center justify-center">
                    <User className="mr-2 h-4 w-4" />
                    Patient
                  </TabsTrigger>
                  <TabsTrigger value="doctor" className="flex items-center justify-center">
                    <Stethoscope className="mr-2 h-4 w-4" />
                    Doctor
                  </TabsTrigger>
                </TabsList>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <div className="relative">
                        <User2 className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input 
                          id="name" 
                          type="text" 
                          placeholder="John Doe" 
                          className="pl-10"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="your.email@example.com" 
                          className="pl-10"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input 
                          id="phone" 
                          type="tel" 
                          placeholder="(123) 456-7890" 
                          className="pl-10"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input 
                          id="city" 
                          type="text" 
                          placeholder="New York" 
                          className="pl-10"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Doctor-specific fields */}
                  {userType === "doctor" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                      <div className="space-y-2">
                        <Label htmlFor="specialization">Specialization</Label>
                        <Select value={specialization} onValueChange={setSpecialization}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select specialization" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general-medicine">General Medicine</SelectItem>
                            <SelectItem value="cardiology">Cardiology</SelectItem>
                            <SelectItem value="neurology">Neurology</SelectItem>
                            <SelectItem value="orthopedics">Orthopedics</SelectItem>
                            <SelectItem value="pediatrics">Pediatrics</SelectItem>
                            <SelectItem value="dermatology">Dermatology</SelectItem>
                            <SelectItem value="gynecology">Gynecology</SelectItem>
                            <SelectItem value="ophthalmology">Ophthalmology</SelectItem>
                            <SelectItem value="psychiatry">Psychiatry</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="experience">Years of Experience</Label>
                        <Input 
                          id="experience" 
                          type="number" 
                          placeholder="5" 
                          min="0"
                          max="70"
                          value={experience}
                          onChange={(e) => setExperience(e.target.value)}
                          required={userType === "doctor"}
                        />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="clinic-location">Clinic Location</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input 
                            id="clinic-location" 
                            type="text" 
                            placeholder="123 Medical Center Ave, Suite 101" 
                            className="pl-10"
                            value={clinicLocation}
                            onChange={(e) => setClinicLocation(e.target.value)}
                            required={userType === "doctor"}
                          />
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          A map feature will be available after registration to pinpoint your exact location
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="pt-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input 
                            id="password" 
                            type="password" 
                            placeholder="••••••••" 
                            className="pl-10"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirm Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input 
                            id="confirm-password" 
                            type="password" 
                            placeholder="••••••••" 
                            className="pl-10"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button type="submit" className="w-full bg-health-blue hover:bg-health-blue-600">
                      Register as {userType === "patient" ? "Patient" : "Doctor"}
                    </Button>
                  </div>
                </form>
              </Tabs>
            </CardContent>
            <CardFooter className="flex justify-center">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link to="/login" className="text-health-blue font-medium hover:underline">
                  Login
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
