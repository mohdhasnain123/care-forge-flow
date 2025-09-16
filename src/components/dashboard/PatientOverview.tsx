import { Activity, Heart, FileText, Clock, TrendingUp, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const PatientOverview = () => {
  const recentPatients = [
    {
      id: "PA-2024-004",
      name: "Emma Johnson",
      age: 34,
      condition: "Post-Surgery Recovery",
      status: "Stable",
      vitals: { hr: "78", bp: "120/80", temp: "98.6°F", spo2: "98%" },
      lastUpdate: "5 min ago",
      riskScore: 15
    },
    {
      id: "PA-2024-005", 
      name: "David Miller",
      age: 52,
      condition: "Diabetes Management",
      status: "Monitoring",
      vitals: { hr: "85", bp: "135/85", temp: "99.1°F", spo2: "96%" },
      lastUpdate: "12 min ago",
      riskScore: 35
    },
    {
      id: "PA-2024-006",
      name: "Lisa Brown",
      age: 41,
      condition: "Hypertension",
      status: "Stable",
      vitals: { hr: "72", bp: "125/82", temp: "98.4°F", spo2: "99%" },
      lastUpdate: "8 min ago", 
      riskScore: 22
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Stable": return "bg-success text-white";
      case "Monitoring": return "bg-warning text-white";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getRiskColor = (score: number) => {
    if (score < 30) return "text-success";
    if (score < 60) return "text-warning";
    return "text-destructive";
  };

  return (
    <div className="space-y-6">
      {/* Real-time Dashboard Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-card border-border shadow-md">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Patients</p>
                <p className="text-2xl font-bold text-foreground">247</p>
              </div>
              <Users className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border shadow-md">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Staff on Duty</p>
                <p className="text-2xl font-bold text-foreground">68</p>
              </div>
              <Activity className="h-8 w-8 text-secondary" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border shadow-md">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Resource Usage</p>
                <p className="text-2xl font-bold text-foreground">76%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-accent" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border shadow-md">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Response</p>
                <p className="text-2xl font-bold text-foreground">4.2m</p>
              </div>
              <Clock className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Patients */}
      <Card className="bg-gradient-card border-border shadow-md">
        <CardHeader>
          <CardTitle className="text-lg text-foreground flex items-center space-x-2">
            <Heart className="h-5 w-5 text-primary" />
            <span>Recent Patient Updates</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentPatients.map((patient) => (
              <div key={patient.id} className="p-4 bg-background rounded-lg border border-border hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-foreground">{patient.name}</h4>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <span>Age: {patient.age}</span>
                      <span>•</span>
                      <span>ID: {patient.id}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className={`${getStatusColor(patient.status)} text-xs`}>
                      {patient.status}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{patient.lastUpdate}</span>
                  </div>
                </div>

                <div className="mb-3">
                  <p className="text-sm font-medium text-foreground">{patient.condition}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs text-muted-foreground">Risk Score:</span>
                    <span className={`text-xs font-semibold ${getRiskColor(patient.riskScore)}`}>
                      {patient.riskScore}%
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-3 text-xs">
                  <div>
                    <p className="text-muted-foreground">HR</p>
                    <p className="font-medium text-foreground">{patient.vitals.hr}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">BP</p>
                    <p className="font-medium text-foreground">{patient.vitals.bp}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Temp</p>
                    <p className="font-medium text-foreground">{patient.vitals.temp}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">SpO2</p>
                    <p className="font-medium text-foreground">{patient.vitals.spo2}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PatientOverview;