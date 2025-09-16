import { useState } from "react";
import { ArrowLeft, Heart, Activity, AlertTriangle, Phone, MessageSquare, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface PatientAlertProps {
  onBack: () => void;
  onViewSpecialists: () => void;
}

const PatientAlert = ({ onBack, onViewSpecialists }: PatientAlertProps) => {
  const patientData = {
    name: "Bob Anderson",
    age: 58,
    patientId: "PA-2024-001",
    condition: "Imminent Cardiac Arrest Risk",
    severity: "CRITICAL",
    timeDetected: "2 minutes ago",
    riskScore: 95
  };

  const vitals = [
    { label: "Heart Rate", value: "165 BPM", normal: "60-100", status: "critical", trend: "+45%" },
    { label: "Blood Pressure", value: "180/120", normal: "120/80", status: "critical", trend: "+33%" },
    { label: "SpO2", value: "89%", normal: ">95%", status: "critical", trend: "-8%" },
    { label: "Temperature", value: "101.2°F", normal: "98.6°F", status: "elevated", trend: "+2.6°F" },
  ];

  const symptoms = [
    "Severe chest pain radiating to left arm",
    "Difficulty breathing (dyspnea)",
    "Cold sweats and nausea",
    "Dizziness and lightheadedness",
    "Irregular heart rhythm detected"
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "critical": return "bg-destructive text-destructive-foreground";
      case "elevated": return "bg-warning text-warning-foreground";
      default: return "bg-success text-success-foreground";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" onClick={onBack} className="p-2">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-foreground flex items-center space-x-2">
              <AlertTriangle className="h-6 w-6 text-destructive" />
              <span>Critical Patient Alert</span>
            </h1>
            <p className="text-muted-foreground">Real-time monitoring detected emergency condition</p>
          </div>
        </div>
        <Badge className="bg-destructive text-destructive-foreground text-sm px-3 py-1">
          {patientData.severity}
        </Badge>
      </div>

      {/* Patient Info Card */}
      <Card className="bg-gradient-card border-destructive/20 shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl text-foreground">{patientData.name}</CardTitle>
              <p className="text-muted-foreground">Age: {patientData.age} • ID: {patientData.patientId}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Detected</p>
              <p className="font-semibold text-destructive">{patientData.timeDetected}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-destructive mb-2">{patientData.condition}</h3>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-muted-foreground">Risk Score:</span>
                <div className="flex-1 max-w-48">
                  <Progress value={patientData.riskScore} className="h-2" />
                </div>
                <span className="font-bold text-destructive">{patientData.riskScore}%</span>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <Button className="bg-destructive hover:bg-destructive/90 text-destructive-foreground">
                <Phone className="mr-2 h-4 w-4" />
                Emergency Call
              </Button>
              <Button variant="outline" className="border-border">
                <MessageSquare className="mr-2 h-4 w-4" />
                Alert Medical Team
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Vital Signs */}
        <Card className="bg-gradient-card border-border shadow-md">
          <CardHeader>
            <CardTitle className="text-lg text-foreground flex items-center space-x-2">
              <Activity className="h-5 w-5 text-primary" />
              <span>Critical Vital Signs</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {vitals.map((vital, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-background rounded-lg border border-border">
                  <div>
                    <p className="font-medium text-foreground">{vital.label}</p>
                    <p className="text-sm text-muted-foreground">Normal: {vital.normal}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg text-foreground">{vital.value}</p>
                    <Badge className={`${getStatusColor(vital.status)} text-xs`}>
                      {vital.trend}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Symptoms */}
        <Card className="bg-gradient-card border-border shadow-md">
          <CardHeader>
            <CardTitle className="text-lg text-foreground flex items-center space-x-2">
              <Heart className="h-5 w-5 text-destructive" />
              <span>Reported Symptoms</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {symptoms.map((symptom, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-background rounded-lg border border-border">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-foreground">{symptom}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Action Buttons */}
      <Card className="bg-gradient-card border-border shadow-md">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-foreground mb-1">Immediate Action Required</h3>
              <p className="text-sm text-muted-foreground">Connect with cardiac specialists for emergency treatment plan</p>
            </div>
            <Button 
              onClick={onViewSpecialists}
              className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-sm"
            >
              <Calendar className="mr-2 h-4 w-4" />
              View Cardiac Specialists
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PatientAlert;