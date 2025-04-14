import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mic, MicOff, Search, ChevronDown, ChevronRight, Activity, User, Stethoscope, Calendar, Bug, MapPin } from "lucide-react";

const SymptomChecker = () => {
  const [symptomText, setSymptomText] = useState("");
  const [selectedSymptom, setSelectedSymptom] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [hasAnalyzed, setHasAnalyzed] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const commonSymptoms = [
    "Abdominal Pain",
    "Abnormal Menstruation",
    "Acidity",
    "Acute Liver Failure",
    "Altered Sensorium",
    "Anxiety",
    "Back Pain",
    "Belly Pain",
    "Blackheads",
    "Bladder Discomfort",
    "Blister",
    "Blood In Sputum",
    "Bloody Stool",
    "Blurred And Distorted Vision",
    "Breathlessness",
    "Brittle Nails",
    "Bruising",
    "Burning Micturition",
    "Chest Pain",
    "Chills",
    "Cold Hands And Feets",
    "Coma",
    "Congestion",
    "Constipation",
    "Continuous Feel Of Urine",
    "Continuous Sneezing",
    "Cough",
    "Cramps",
    "Dark Urine",
    "Dehydration",
    "Depression",
    "Diarrhoea",
    "Dischromic Patches",
    "Distention Of Abdomen",
    "Dizziness",
    "Drying And Tingling Lips",
    "Enlarged Thyroid",
    "Excessive Hunger",
    "Extra Marital Contacts",
    "Family History",
    "Fast Heart Rate",
    "Fatigue",
    "Fluid Overload",
    "Foul Smell Of Urine",
    "Headache",
    "High Fever",
    "Hip Joint Pain",
    "History Of Alcohol Consumption",
    "Increased Appetite",
    "Indigestion",
    "Inflammatory Nails",
    "Internal Itching",
    "Irregular Sugar Level",
    "Irritability",
    "Irritation In Anus",
    "Itching",
    "Joint Pain",
    "Knee Pain",
    "Lack Of Concentration",
    "Lethargy",
    "Loss Of Appetite",
    "Loss Of Balance",
    "Loss Of Smell",
    "Malaise",
    "Mild Fever",
    "Mood Swings",
    "Movement Stiffness",
    "Mucoid Sputum",
    "Muscle Pain",
    "Muscle Wasting",
    "Muscle Weakness",
    "Nausea",
    "Neck Pain",
    "Nodal Skin Eruptions",
    "Obesity",
    "Pain Behind The Eyes",
    "Pain During Bowel Movements",
    "Pain In Anal Region",
    "Painful Walking",
    "Palpitations",
    "Passage Of Gases",
    "Patches In Throat",
    "Phlegm",
    "Polyuria",
    "Prominent Veins On Calf",
    "Puffy Face And Eyes",
    "Pus Filled Pimples",
    "Receiving Blood Transfusion",
    "Receiving Unsterile Injections",
    "Red Sore Around Nose",
    "Red Spots Over Body",
    "Redness Of Eyes",
    "Restlessness",
    "Runny Nose",
    "Rusty Sputum",
    "Scurring",
    "Shivering",
    "Silver Like Dusting",
    "Sinus Pressure",
    "Skin Peeling",
    "Skin Rash",
    "Slurred Speech",
    "Small Dents In Nails",
    "Spinning Movements",
    "Spotting Urination",
    "Stiff Neck",
    "Stomach Bleeding",
    "Stomach Pain",
    "Sunken Eyes",
    "Sweating",
    "Swelled Lymph Nodes",
    "Swelling Joints",
    "Swelling Of Stomach",
    "Swollen Blood Vessels",
    "Swollen Extremeties",
    "Swollen Legs",
    "Throat Irritation",
    "Toxic Look (Typhos)",
    "Ulcers On Tongue",
    "Unsteadiness",
    "Visual Disturbances",
    "Vomiting",
    "Watering From Eyes",
    "Weakness In Limbs",
    "Weakness Of One Body Side",
    "Weight Gain",
    "Weight Loss",
    "Yellow Crust Ooze",
    "Yellow Urine",
    "Yellowing Of Eyes",
    "Yellowish Skin"
  ];
  

  
  const mockResults = {
    predictions: [
      { name: "Common Cold", probability: 87, description: "A viral infection of the upper respiratory tract." },
      { name: "Seasonal Allergies", probability: 64, description: "An immune system reaction to pollen, dust, or other allergens." },
      { name: "Sinusitis", probability: 42, description: "Inflammation of the sinuses, often due to infection." }
    ],
    specialization: "General Practitioner",
    urgency: "Low",
    nearbyDoctors: [
      { id: 1, name: "Dr. James Wilson", distance: "1.2 miles", availability: "Today" },
      { id: 2, name: "Dr. Lisa Chen", distance: "2.4 miles", availability: "Tomorrow" },
      { id: 3, name: "Dr. Robert Smith", distance: "3.1 miles", availability: "Apr 21" }
    ]
  };
  
  const handleSymptomSelect = (value: string) => {
    setSelectedSymptom(value);
    if (value && !symptomText.includes(value)) {
      setSymptomText(prev => 
        prev ? `${prev}, ${value.toLowerCase()}` : value.toLowerCase()
      );
    }
  };
  
  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (isRecording) {
      setTimeout(() => {
        setSymptomText(prev => 
          prev ? `${prev}, headache and sore throat` : "headache and sore throat"
        );
      }, 500);
    }
  };
  
  const analyzeSymptoms = () => {
    if (!symptomText.trim()) return;
    
    setIsAnalyzing(true);
    
    setTimeout(() => {
      setIsAnalyzing(false);
      setHasAnalyzed(true);
    }, 1500);
  };
  
  const resetAnalysis = () => {
    setHasAnalyzed(false);
    setSymptomText("");
    setSelectedSymptom("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">AI Symptom Checker</h1>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Describe your symptoms in detail to get AI-powered health insights. This tool is for informational purposes only and does not replace professional medical advice.
          </p>
          
          {!hasAnalyzed ? (
            <Card className="shadow-md max-w-3xl mx-auto animate-fade-in">
              <CardHeader>
                <CardTitle className="text-xl font-semibold flex items-center">
                  <Activity className="mr-2 h-5 w-5 text-health-blue" />
                  Enter Your Symptoms
                </CardTitle>
                <CardDescription>
                  Be as specific as possible for more accurate results
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label htmlFor="symptoms" className="block text-sm font-medium text-gray-700 mb-1">
                    Describe your symptoms
                  </label>
                  <Textarea
                    id="symptoms"
                    placeholder="E.g., I've been experiencing a headache for the past two days, along with a sore throat..."
                    className="min-h-[120px]"
                    value={symptomText}
                    onChange={(e) => setSymptomText(e.target.value)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="w-full max-w-xs">
                    <label htmlFor="common-symptoms" className="block text-sm font-medium text-gray-700 mb-1">
                      Common symptoms
                    </label>
                    <Select value={selectedSymptom} onValueChange={handleSymptomSelect}>
                      <SelectTrigger id="common-symptoms">
                        <SelectValue placeholder="Select from list" />
                      </SelectTrigger>
                      <SelectContent>
                        {commonSymptoms.map((symptom) => (
                          <SelectItem key={symptom} value={symptom}>
                            {symptom}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="ml-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Voice input
                    </label>
                    <Button 
                      variant="outline" 
                      className={`h-10 ${isRecording ? 'bg-red-50 text-red-500 border-red-200' : ''}`}
                      onClick={toggleRecording}
                    >
                      {isRecording ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
                    </Button>
                  </div>
                </div>
                
                <div className="pt-2">
                  <p className="text-xs text-gray-500 mb-2">
                    Selected symptoms will appear here as tags
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {symptomText.split(',').map(symptom => 
                      symptom.trim() && (
                        <Badge key={symptom} variant="outline" className="bg-gray-100">
                          {symptom.trim()}
                        </Badge>
                      )
                    )}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button 
                  className="bg-health-blue hover:bg-health-blue-600" 
                  onClick={analyzeSymptoms}
                  disabled={!symptomText.trim() || isAnalyzing}
                >
                  {isAnalyzing ? (
                    <>
                      <div className="animate-spin mr-2 h-4 w-4 border-2 border-b-transparent border-white rounded-full"></div>
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Search className="mr-2 h-4 w-4" />
                      Analyze Symptoms
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <div className="space-y-6 max-w-3xl mx-auto animate-fade-in">
              <Card className="shadow-md">
                <CardHeader className="bg-health-blue-50 rounded-t-lg">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl font-semibold flex items-center">
                      <Activity className="mr-2 h-5 w-5 text-health-blue" />
                      Analysis Results
                    </CardTitle>
                    <Button variant="ghost" size="sm" onClick={resetAnalysis}>
                      Check Different Symptoms
                    </Button>
                  </div>
                  <CardDescription>
                    Based on: <span className="font-medium">{symptomText}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3 flex items-center">
                      <Bug className="mr-2 h-5 w-5 text-health-blue" />
                      Possible Conditions
                    </h3>
                    <div className="space-y-3">
                      {mockResults.predictions.map((condition, index) => (
                        <Collapsible key={condition.name}>
                          <div className="border rounded-lg overflow-hidden">
                            <div className="flex items-center justify-between p-4 bg-white">
                              <div className="flex items-center">
                                <Badge className={`mr-3 ${
                                  index === 0 ? 'bg-health-blue' : (index === 1 ? 'bg-health-teal' : 'bg-gray-500')
                                }`}>
                                  {condition.probability}%
                                </Badge>
                                <span className="font-medium">{condition.name}</span>
                              </div>
                              <CollapsibleTrigger asChild>
                                <Button variant="ghost" size="sm">
                                  <ChevronDown className="h-4 w-4" />
                                </Button>
                              </CollapsibleTrigger>
                            </div>
                            <CollapsibleContent>
                              <div className="p-4 pt-0 border-t text-sm text-gray-600">
                                <p>{condition.description}</p>
                                <Button variant="link" size="sm" className="mt-2 h-auto p-0 text-health-blue">
                                  Learn more
                                </Button>
                              </div>
                            </CollapsibleContent>
                          </div>
                        </Collapsible>
                      ))}
                    </div>
                    <div className="mt-4 bg-yellow-50 border border-yellow-100 rounded-lg p-4">
                      <p className="text-sm text-yellow-800">
                        <strong>Disclaimer:</strong> This analysis is for informational purposes only and does not constitute medical advice. Always consult with a healthcare professional.
                      </p>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <h3 className="text-lg font-medium mb-3 flex items-center">
                      <Stethoscope className="mr-2 h-5 w-5 text-health-blue" />
                      Recommended Specialist
                    </h3>
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center">
                          <div className="bg-health-blue-50 p-3 rounded-full mr-4">
                            <User className="h-6 w-6 text-health-blue" />
                          </div>
                          <div>
                            <div className="font-medium">{mockResults.specialization}</div>
                            <div className="text-sm text-gray-500">
                              Urgency: <span className="text-green-600 font-medium">{mockResults.urgency}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold flex items-center">
                    <MapPin className="mr-2 h-5 w-5 text-health-blue" />
                    Nearby Specialists
                  </CardTitle>
                  <CardDescription>
                    Doctors available in your area
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {mockResults.nearbyDoctors.map((doctor) => (
                    <div key={doctor.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium">{doctor.name}</div>
                          <div className="text-sm text-gray-500">
                            <span className="inline-flex items-center">
                              <MapPin className="h-3 w-3 mr-1" />
                              {doctor.distance}
                            </span>
                            <span className="inline-flex items-center ml-4">
                              <Calendar className="h-3 w-3 mr-1" />
                              Available: {doctor.availability}
                            </span>
                          </div>
                        </div>
                        <Button size="sm" className="bg-health-blue hover:bg-health-blue-600" asChild>
                          <Link to={`/book-doctor/${doctor.id}`}>
                            Book
                            <ChevronRight className="ml-1 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full mt-2">
                    View More Doctors
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SymptomChecker;
