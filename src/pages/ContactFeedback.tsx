
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone, Mail, MessageSquare, AlertTriangle, Send, HelpCircle, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContactFeedback = () => {
  const [activeTab, setActiveTab] = useState("contact");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Your message has been sent. We'll get back to you soon!");
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
      setIsSubmitting(false);
    }, 1500);
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!rating || !feedback) {
      toast.error("Please provide both a rating and feedback");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Thank you for your feedback!");
      setRating("");
      setFeedback("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-health-blue mb-4">Contact Us</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions or feedback? We're here to help. Reach out to our team or share your thoughts about our service.
            </p>
          </div>
          
          <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="contact" className="text-base">
                <MessageSquare className="h-4 w-4 mr-2" />
                Contact Us
              </TabsTrigger>
              <TabsTrigger value="feedback" className="text-base">
                <Star className="h-4 w-4 mr-2" />
                Send Feedback
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="contact">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="col-span-1">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Contact Information</CardTitle>
                      <CardDescription>
                        Ways to reach our support team
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex items-start">
                        <Mail className="h-5 w-5 mr-3 text-health-blue mt-1" />
                        <div>
                          <h3 className="font-medium">Email Us</h3>
                          <p className="text-sm text-gray-600">support@healthlink.com</p>
                          <p className="text-sm text-gray-600 mt-1">Response time: 24-48 hours</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Phone className="h-5 w-5 mr-3 text-health-blue mt-1" />
                        <div>
                          <h3 className="font-medium">Call Us</h3>
                          <p className="text-sm text-gray-600">+1 (800) 123-4567</p>
                          <p className="text-sm text-gray-600 mt-1">Mon-Fri: 9am-5pm EST</p>
                        </div>
                      </div>
                      
                      <div className="pt-6 border-t">
                        <div className="flex items-start mb-4">
                          <AlertTriangle className="h-5 w-5 mr-3 text-red-500 mt-1" />
                          <div>
                            <h3 className="font-medium text-red-600">Emergency</h3>
                            <p className="text-sm">
                              For medical emergencies, please call your local emergency number or go to the nearest emergency room.
                            </p>
                          </div>
                        </div>
                        <div className="bg-red-50 rounded-lg p-4 text-center">
                          <p className="font-bold text-red-600">Emergency: 911</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="col-span-1 md:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Send Us a Message</CardTitle>
                      <CardDescription>
                        Fill out the form below and we'll get back to you as soon as possible
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleContactSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label htmlFor="name" className="block text-sm font-medium">
                              Name <span className="text-red-500">*</span>
                            </label>
                            <Input
                              id="name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder="Your name"
                              required
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium">
                              Email <span className="text-red-500">*</span>
                            </label>
                            <Input
                              id="email"
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="Your email address"
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label htmlFor="phone" className="block text-sm font-medium">
                              Phone (Optional)
                            </label>
                            <Input
                              id="phone"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              placeholder="Your phone number"
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <label htmlFor="subject" className="block text-sm font-medium">
                              Subject
                            </label>
                            <Select value={subject} onValueChange={setSubject}>
                              <SelectTrigger id="subject">
                                <SelectValue placeholder="Select a subject" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="general">General Inquiry</SelectItem>
                                <SelectItem value="technical">Technical Support</SelectItem>
                                <SelectItem value="billing">Billing Question</SelectItem>
                                <SelectItem value="appointment">Appointment Help</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="message" className="block text-sm font-medium">
                            Message <span className="text-red-500">*</span>
                          </label>
                          <Textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="How can we help you?"
                            rows={5}
                            required
                          />
                        </div>
                        
                        <Button 
                          type="submit" 
                          className="w-full" 
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            "Sending..."
                          ) : (
                            <>
                              <Send className="h-4 w-4 mr-2" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="feedback">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Share Your Feedback</CardTitle>
                  <CardDescription>
                    Your feedback helps us improve our services and provide better healthcare solutions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleFeedbackSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="rating" className="block text-sm font-medium">
                        How would you rate your experience? <span className="text-red-500">*</span>
                      </label>
                      <Select value={rating} onValueChange={setRating}>
                        <SelectTrigger id="rating">
                          <SelectValue placeholder="Select a rating" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5">5 - Excellent</SelectItem>
                          <SelectItem value="4">4 - Very Good</SelectItem>
                          <SelectItem value="3">3 - Good</SelectItem>
                          <SelectItem value="2">2 - Fair</SelectItem>
                          <SelectItem value="1">1 - Poor</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="feedback" className="block text-sm font-medium">
                        Your Feedback <span className="text-red-500">*</span>
                      </label>
                      <Textarea
                        id="feedback"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        placeholder="Tell us about your experience and suggestions for improvement"
                        rows={6}
                        required
                      />
                    </div>
                    
                    <div className="bg-blue-50 rounded-lg p-4 flex items-start">
                      <HelpCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-blue-700">
                        Your feedback is anonymous unless you include personal information in your message. We use this information to improve our services.
                      </p>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Submitting..."
                      ) : (
                        <>
                          <Star className="h-4 w-4 mr-2" />
                          Submit Feedback
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
};

export default ContactFeedback;
