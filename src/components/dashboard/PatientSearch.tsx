import { Search, Filter, Plus, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PatientSearch = () => {
  const patients = [
    {
      id: "PT-001",
      name: "John Miller",
      condition: "Hypertension",
      urgency: "Medium",
      lastVisit: "2 days ago",
      status: "Active Treatment",
    },
    {
      id: "PT-002", 
      name: "Maria Garcia",
      condition: "Diabetes Type 2",
      urgency: "High",
      lastVisit: "1 day ago",
      status: "Follow-up Required",
    },
    {
      id: "PT-003",
      name: "Robert Kim",
      condition: "Cardiac Arrhythmia", 
      urgency: "Low",
      lastVisit: "1 week ago",
      status: "Stable",
    },
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "High": return "bg-destructive text-destructive-foreground";
      case "Medium": return "bg-warning text-foreground";
      case "Low": return "bg-success text-white";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card className="bg-gradient-card border-border shadow-md">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold text-foreground">Patient Search & Selection</CardTitle>
          <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-sm">
            <Plus className="mr-2 h-4 w-4" />
            New Patient
          </Button>
        </div>
        
        <div className="flex items-center space-x-4 mt-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Search by name, ID, condition..." 
              className="pl-10 bg-background border-border focus:border-primary"
            />
          </div>
          <Button variant="outline" className="border-border hover:bg-muted">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          {patients.map((patient) => (
            <div 
              key={patient.id}
              className="flex items-center justify-between p-4 bg-background rounded-lg border border-border hover:shadow-sm transition-shadow cursor-pointer"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-accent text-accent-foreground rounded-full flex items-center justify-center font-semibold">
                  {patient.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{patient.name}</h3>
                  <p className="text-sm text-muted-foreground">ID: {patient.id}</p>
                  <p className="text-sm text-muted-foreground">{patient.condition}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="text-sm font-medium text-foreground">{patient.status}</p>
                  <p className="text-xs text-muted-foreground">Last visit: {patient.lastVisit}</p>
                </div>
                <Badge className={`${getUrgencyColor(patient.urgency)} shadow-sm`}>
                  {patient.urgency === "High" && <AlertCircle className="mr-1 h-3 w-3" />}
                  {patient.urgency}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PatientSearch;