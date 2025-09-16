import { useState, useEffect } from "react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import QuickStats from "@/components/dashboard/QuickStats";
import DoctorSearch from "@/components/dashboard/DoctorSearch";
import DoctorCards from "@/components/dashboard/DoctorCards";
import MedicalWallet from "@/components/dashboard/MedicalWallet";
import PatientAlert from "@/components/dashboard/PatientAlert";
import CardiacSpecialists from "@/components/dashboard/CardiacSpecialists";
import CriticalPatientsList from "@/components/dashboard/CriticalPatientsList";
import PatientOverview from "@/components/dashboard/PatientOverview";

const Index = () => {
  const [currentView, setCurrentView] = useState<'dashboard' | 'criticalPatients' | 'patientAlert' | 'specialists'>('dashboard');
  const [selectedPatientId, setSelectedPatientId] = useState<string>('');

  // Listen for the custom events from QuickStats
  useEffect(() => {
    const handleShowCriticalPatients = () => setCurrentView('criticalPatients');
    window.addEventListener('showCriticalPatients', handleShowCriticalPatients);
    return () => window.removeEventListener('showCriticalPatients', handleShowCriticalPatients);
  }, []);

  const renderContent = () => {
    switch (currentView) {
      case 'criticalPatients':
        return (
          <CriticalPatientsList 
            onBack={() => setCurrentView('dashboard')}
            onSelectPatient={(patientId) => {
              setSelectedPatientId(patientId);
              setCurrentView('patientAlert');
            }}
          />
        );
      case 'patientAlert':
        return (
          <PatientAlert 
            onBack={() => setCurrentView('criticalPatients')}
            onViewSpecialists={() => setCurrentView('specialists')}
          />
        );
      case 'specialists':
        return (
          <CardiacSpecialists 
            onBack={() => setCurrentView('patientAlert')}
          />
        );
      default:
        return (
          <>
            <QuickStats />
            <PatientOverview />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-bg">
      <DashboardHeader />
      
      <main className="container mx-auto px-6 py-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;
