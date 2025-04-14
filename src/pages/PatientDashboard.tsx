
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DashboardLayout from "@/components/DashboardLayout";
import { MapPin, Calendar, Activity, Settings, CheckCircle, Clock, AlertCircle } from "lucide-react";

const PatientDashboard = () => {
  // Mock data - in a real app, this would come from an API
  const [patientName] = useState("John Doe");
  const [upcomingAppointments] = useState([
    { id: 1, doctor: "Dr. Sarah Johnson", specialty: "Cardiologist", date: "Apr 20, 2025", time: "10:00 AM", status: "confirmed" },
    { id: 2, doctor: "Dr. Michael Chen", specialty: "Dermatologist", date: "Apr 28, 2025", time: "2:30 PM", status: "pending" }
  ]);

  return (
    <DashboardLayout userType="patient">
      <div className="space-y-6">
        {/* Welcome Card */}
        <Card className="bg-gradient-to-r from-health-blue-50 to-health-teal-50 border-none shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl font-bold text-gray-800">Welcome back, {patientName}</CardTitle>
            <CardDescription className="text-gray-600">
              Your health companion is ready to assist you
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-health-blue hover:bg-health-blue-600" asChild>
                <Link to="/symptoms">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Check Symptoms
                </Link>
              </Button>
              <Button variant="outline" className="border-health-teal text-health-teal hover:bg-health-teal-50">
                <MapPin className="mr-2 h-4 w-4" />
                Find Doctors Nearby
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Recent Health Check */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center">
                <Activity className="mr-2 h-5 w-5 text-health-blue" />
                Recent Health Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* If there's a recent health check */}
              <div className="space-y-4">
                <p className="text-sm text-gray-500">Last check: Apr 14, 2025</p>
                <div className="space-y-2">
                  <div className="font-medium">Top predictions:</div>
                  <ul className="pl-5 space-y-1 list-disc text-sm">
                    <li>Seasonal Allergies (87% match)</li>
                    <li>Common Cold (62% match)</li>
                    <li>Sinusitis (48% match)</li>
                  </ul>
                </div>
                <div className="pt-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/symptoms">View Details</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link to="/patient-profile">
                  <Settings className="mr-2 h-4 w-4" />
                  Profile Settings
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="mr-2 h-4 w-4" />
                Book Appointment
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Activity className="mr-2 h-4 w-4" />
                Health Records
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Appointments */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold flex items-center">
              <Calendar className="mr-2 h-5 w-5 text-health-blue" />
              Upcoming Appointments
            </CardTitle>
          </CardHeader>
          <CardContent>
            {upcomingAppointments.length > 0 ? (
              <div className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div key={appointment.id} className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:bg-gray-50">
                    <div>
                      <div className="font-medium">{appointment.doctor}</div>
                      <div className="text-sm text-gray-500">{appointment.specialty}</div>
                      <div className="text-sm flex items-center mt-1">
                        <Calendar className="mr-1 h-3 w-3" />
                        {appointment.date}, {appointment.time}
                      </div>
                    </div>
                    <div className="flex items-center">
                      {appointment.status === 'confirmed' ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <CheckCircle className="mr-1 h-3 w-3" />
                          Confirmed
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          <Clock className="mr-1 h-3 w-3" />
                          Pending
                        </span>
                      )}
                    </div>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="mt-2">
                  View All Appointments
                </Button>
              </div>
            ) : (
              <div className="text-center py-6">
                <AlertCircle className="h-10 w-10 text-gray-400 mx-auto mb-3" />
                <h3 className="text-gray-500 font-medium">No upcoming appointments</h3>
                <p className="text-gray-400 text-sm mb-4">Schedule your first appointment with a specialist</p>
                <Button size="sm">Book Appointment</Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default PatientDashboard;
