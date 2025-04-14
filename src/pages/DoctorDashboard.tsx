
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardLayout from "@/components/DashboardLayout";
import { Calendar, Clock, Users, Star, Settings, ChevronRight, AlertCircle } from "lucide-react";

const DoctorDashboard = () => {
  // Mock data - in a real app, this would come from an API
  const [doctorName] = useState("Dr. Emily Wilson");
  const [specialty] = useState("Cardiologist");
  const [appointmentRequests] = useState([
    { id: 1, patient: "Alice Brown", age: 42, date: "Apr 20, 2025", time: "10:00 AM", reason: "Heart palpitations" },
    { id: 2, patient: "Robert Taylor", age: 65, date: "Apr 20, 2025", time: "11:30 AM", reason: "Routine checkup" },
    { id: 3, patient: "Maria Garcia", age: 56, date: "Apr 21, 2025", time: "9:15 AM", reason: "Chest pain" }
  ]);
  
  const [scheduledAppointments] = useState([
    { id: 1, patient: "John Davis", age: 58, date: "Apr 18, 2025", time: "2:00 PM", visitType: "Follow-up" },
    { id: 2, patient: "Sarah Miller", age: 45, date: "Apr 19, 2025", time: "10:30 AM", visitType: "New Patient" }
  ]);

  const [recentFeedback] = useState([
    { id: 1, patient: "Jennifer Wu", rating: 5, text: "Dr. Wilson was thorough and explained my condition clearly." },
    { id: 2, patient: "Michael Smith", rating: 4, text: "Great doctor, but had to wait a bit longer than expected." }
  ]);

  return (
    <DashboardLayout userType="doctor">
      <div className="space-y-6">
        {/* Welcome Card */}
        <Card className="bg-gradient-to-r from-health-blue-50 to-health-teal-50 border-none shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl font-bold text-gray-800">Welcome back, {doctorName}</CardTitle>
            <CardDescription className="text-gray-600">
              <Badge variant="outline" className="mr-2">{specialty}</Badge>
              Your patient dashboard for today
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-health-blue hover:bg-health-blue-600">
                <Calendar className="mr-2 h-4 w-4" />
                Manage Schedule
              </Button>
              <Button variant="outline" className="border-health-teal text-health-teal hover:bg-health-teal-50">
                <Settings className="mr-2 h-4 w-4" />
                Profile Settings
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Appointment Tabs */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold flex items-center">
              <Clock className="mr-2 h-5 w-5 text-health-blue" />
              Appointments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="requests">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="requests">
                  Appointment Requests
                  {appointmentRequests.length > 0 && (
                    <Badge variant="secondary" className="ml-2">{appointmentRequests.length}</Badge>
                  )}
                </TabsTrigger>
                <TabsTrigger value="scheduled">Scheduled Appointments</TabsTrigger>
              </TabsList>
              
              <TabsContent value="requests" className="pt-4">
                {appointmentRequests.length > 0 ? (
                  <div className="space-y-3">
                    {appointmentRequests.map((request) => (
                      <Card key={request.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="font-medium">{request.patient}, {request.age}</div>
                              <div className="text-sm text-gray-500">{request.date} at {request.time}</div>
                              <div className="text-sm mt-1">{request.reason}</div>
                            </div>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm" className="text-red-500 hover:text-red-700 border-red-200 hover:border-red-300">
                                Decline
                              </Button>
                              <Button size="sm" className="bg-health-blue hover:bg-health-blue-600">
                                Accept
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <AlertCircle className="h-10 w-10 text-gray-400 mx-auto mb-3" />
                    <h3 className="text-gray-500 font-medium">No appointment requests</h3>
                    <p className="text-gray-400 text-sm">You're all caught up!</p>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="scheduled" className="pt-4">
                {scheduledAppointments.length > 0 ? (
                  <div className="space-y-3">
                    {scheduledAppointments.map((appointment) => (
                      <Card key={appointment.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="font-medium">{appointment.patient}, {appointment.age}</div>
                              <div className="text-sm text-gray-500">{appointment.date} at {appointment.time}</div>
                              <div className="text-sm mt-1">Visit type: {appointment.visitType}</div>
                            </div>
                            <Button variant="outline" size="sm" asChild>
                              <Link to={`/patient-details/${appointment.id}`}>
                                View Details
                                <ChevronRight className="ml-1 h-4 w-4" />
                              </Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <Calendar className="h-10 w-10 text-gray-400 mx-auto mb-3" />
                    <h3 className="text-gray-500 font-medium">No scheduled appointments</h3>
                    <p className="text-gray-400 text-sm">Your calendar is clear</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Patient Feedback */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center">
                <Star className="mr-2 h-5 w-5 text-health-blue" />
                Recent Patient Feedback
              </CardTitle>
            </CardHeader>
            <CardContent>
              {recentFeedback.length > 0 ? (
                <div className="space-y-4">
                  {recentFeedback.map((feedback) => (
                    <div key={feedback.id} className="p-3 rounded-lg border border-gray-100 hover:bg-gray-50">
                      <div className="flex justify-between">
                        <div className="font-medium">{feedback.patient}</div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < feedback.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{feedback.text}</p>
                    </div>
                  ))}
                  <Button variant="outline" size="sm" className="mt-2 w-full">
                    View All Feedback
                  </Button>
                </div>
              ) : (
                <div className="text-center py-6">
                  <Star className="h-10 w-10 text-gray-400 mx-auto mb-3" />
                  <h3 className="text-gray-500 font-medium">No feedback yet</h3>
                  <p className="text-gray-400 text-sm">Feedback will appear here</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center">
                <Users className="mr-2 h-5 w-5 text-health-blue" />
                Monthly Statistics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg text-center">
                  <div className="text-3xl font-bold text-health-blue">42</div>
                  <div className="text-sm text-gray-500">Total Patients</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg text-center">
                  <div className="text-3xl font-bold text-health-blue">28</div>
                  <div className="text-sm text-gray-500">Appointments</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg text-center">
                  <div className="text-3xl font-bold text-health-teal">4.8</div>
                  <div className="text-sm text-gray-500">Avg. Rating</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg text-center">
                  <div className="text-3xl font-bold text-health-teal">92%</div>
                  <div className="text-sm text-gray-500">Satisfaction</div>
                </div>
              </div>
              <Button variant="outline" size="sm" className="mt-4 w-full">
                View Detailed Analytics
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DoctorDashboard;
