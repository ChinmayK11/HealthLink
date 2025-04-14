
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format, addDays } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { ChevronLeft, CalendarIcon, Clock, MapPin, FilePlus, Check } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

// Mock doctor data
const mockDoctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialization: "Cardiology",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    address: "123 Medical Center, Downtown",
    timeSlots: [
      {day: 0, slots: ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM"]},
      {day: 1, slots: ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM"]},
      {day: 2, slots: ["10:00 AM", "11:00 AM", "01:00 PM", "02:00 PM"]},
      {day: 3, slots: ["09:00 AM", "02:00 PM", "03:00 PM", "04:00 PM"]},
      {day: 4, slots: ["09:00 AM", "10:00 AM", "11:00 AM", "03:00 PM"]},
    ]
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialization: "Neurology",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    address: "456 Health Avenue, Uptown",
    timeSlots: [
      {day: 0, slots: ["09:00 AM", "11:00 AM", "02:00 PM"]},
      {day: 1, slots: ["10:00 AM", "11:00 AM", "03:00 PM"]},
      {day: 3, slots: ["09:00 AM", "10:00 AM", "02:00 PM"]},
      {day: 4, slots: ["11:00 AM", "01:00 PM", "03:00 PM"]},
    ]
  },
  // More doctors with the same pattern
];

const BookAppointment = () => {
  const { doctorId } = useParams();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState<any>(null);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [timeSlot, setTimeSlot] = useState<string | undefined>();
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([]);
  const [notes, setNotes] = useState("");
  const [phone, setPhone] = useState("");
  const [insurance, setInsurance] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [appointmentConfirmed, setAppointmentConfirmed] = useState(false);

  useEffect(() => {
    // Find doctor based on ID
    const foundDoctor = mockDoctors.find(d => d.id === Number(doctorId));
    if (foundDoctor) {
      setDoctor(foundDoctor);
    } else {
      toast.error("Doctor not found");
      navigate("/doctor-finder");
    }
  }, [doctorId, navigate]);

  useEffect(() => {
    if (doctor && date) {
      // Get day of week (0 = Sunday, 1 = Monday, etc.)
      const dayOfWeek = date.getDay();
      
      // Find time slots for the selected day
      const daySlots = doctor.timeSlots.find((ts: any) => ts.day === dayOfWeek);
      
      if (daySlots) {
        setAvailableTimeSlots(daySlots.slots);
      } else {
        setAvailableTimeSlots([]);
        toast.info("No appointments available on this day");
      }
      
      // Reset time slot when date changes
      setTimeSlot(undefined);
    }
  }, [date, doctor]);

  const handleBookAppointment = () => {
    if (!date || !timeSlot) {
      toast.error("Please select a date and time");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setAppointmentConfirmed(true);
      toast.success("Appointment booked successfully!");
    }, 1500);
  };

  const handleBackToSearch = () => {
    navigate("/doctor-finder");
  };

  const handleNewAppointment = () => {
    setAppointmentConfirmed(false);
    setDate(new Date());
    setTimeSlot(undefined);
    setNotes("");
  };

  if (appointmentConfirmed) {
    return (
      <DashboardLayout userType="patient">
        <div className="container mx-auto px-4 py-8 max-w-3xl">
          <Card className="border-green-100 shadow-lg">
            <CardHeader className="bg-green-50 border-b border-green-100">
              <div className="flex items-center justify-center mb-4">
                <div className="rounded-full bg-green-100 p-3">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <CardTitle className="text-center text-2xl text-green-700">Appointment Confirmed!</CardTitle>
              <CardDescription className="text-center text-green-600">
                Your appointment has been successfully scheduled
              </CardDescription>
            </CardHeader>
            
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500">Doctor</p>
                    <p className="font-medium">{doctor?.name}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500">Specialization</p>
                    <p className="font-medium">{doctor?.specialization}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500">Date</p>
                    <p className="font-medium">{date ? format(date, "EEEE, MMMM d, yyyy") : ""}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500">Time</p>
                    <p className="font-medium">{timeSlot}</p>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium">{doctor?.address}</p>
                  </div>
                </div>
                
                {notes && (
                  <div className="space-y-2 pt-4 border-t">
                    <p className="text-sm text-gray-500">Notes</p>
                    <p>{notes}</p>
                  </div>
                )}
                
                <div className="rounded-lg bg-blue-50 p-4 text-blue-700 text-sm">
                  <p className="font-medium mb-2">Important:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Please arrive 15 minutes before your appointment time</li>
                    <li>Bring your ID and insurance card</li>
                    <li>You will receive a reminder 24 hours before your appointment</li>
                  </ul>
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" className="w-full sm:w-auto" onClick={handleNewAppointment}>
                Book Another Appointment
              </Button>
              <Button className="w-full sm:w-auto" onClick={handleBackToSearch}>
                Return to Doctor Search
              </Button>
            </CardFooter>
          </Card>
        </div>
      </DashboardLayout>
    );
  }

  if (!doctor) {
    return (
      <DashboardLayout userType="patient">
        <div className="container mx-auto px-4 py-8 text-center">
          <p>Loading...</p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout userType="patient">
      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" onClick={handleBackToSearch} className="mb-6">
          <ChevronLeft className="h-4 w-4 mr-2" />
          Back to Doctor Search
        </Button>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Doctor Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 mb-6">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{doctor.name}</h3>
                    <p className="text-gray-600">{doctor.specialization}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-2 text-gray-500 mt-0.5" />
                    <span>{doctor.address}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="col-span-1 lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Book Your Appointment</CardTitle>
                <CardDescription>
                  Select your preferred date and time
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-medium mb-4 flex items-center">
                      <CalendarIcon className="mr-2 h-5 w-5 text-health-blue" />
                      Select Date
                    </h3>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-white" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          disabled={(date) => 
                            date < new Date() || date > addDays(new Date(), 30)
                          }
                          initialFocus
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-4 flex items-center">
                      <Clock className="mr-2 h-5 w-5 text-health-blue" />
                      Select Time
                    </h3>
                    <Select value={timeSlot} onValueChange={setTimeSlot}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        {availableTimeSlots.length > 0 ? (
                          availableTimeSlots.map((slot) => (
                            <SelectItem key={slot} value={slot}>
                              {slot}
                            </SelectItem>
                          ))
                        ) : (
                          <SelectItem value="none" disabled>
                            No available slots
                          </SelectItem>
                        )}
                      </SelectContent>
                    </Select>
                    
                    {availableTimeSlots.length === 0 && date && (
                      <p className="text-amber-600 text-sm mt-2">
                        No time slots available on this date. Please select another date.
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="mt-8 space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4 flex items-center">
                      <FilePlus className="mr-2 h-5 w-5 text-health-blue" />
                      Additional Information
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Your contact number"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="insurance" className="block text-sm font-medium mb-2">
                          Insurance Provider (optional)
                        </label>
                        <Input
                          id="insurance"
                          value={insurance}
                          onChange={(e) => setInsurance(e.target.value)}
                          placeholder="Your insurance provider"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="notes" className="block text-sm font-medium mb-2">
                          Reason for Visit / Symptoms
                        </label>
                        <Textarea
                          id="notes"
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          placeholder="Briefly describe your symptoms or reason for visit"
                          rows={4}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter>
                <Button 
                  className="w-full" 
                  onClick={handleBookAppointment}
                  disabled={!date || !timeSlot || isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Confirm Appointment"}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default BookAppointment;
