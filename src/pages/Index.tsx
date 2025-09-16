import { useState, useEffect } from "react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import QuickStats from "@/components/dashboard/QuickStats";
import DoctorSearch from "@/components/dashboard/DoctorSearch";
import DoctorCards from "@/components/dashboard/DoctorCards";
import MedicalWallet from "@/components/dashboard/MedicalWallet";
import PatientAlert from "@/components/dashboard/PatientAlert";
import CardiacSpecialists from "@/components/dashboard/CardiacSpecialists";

const Index = () => {
  const [currentView, setCurrentView] = useState<'dashboard' | 'patientAlert' | 'specialists'>('dashboard');

  // Listen for the custom event from QuickStats
  useEffect(() => {
    const handleShowPatientAlert = () => setCurrentView('patientAlert');
    window.addEventListener('showPatientAlert', handleShowPatientAlert);
    return () => window.removeEventListener('showPatientAlert', handleShowPatientAlert);
  }, []);

  const renderContent = () => {
    switch (currentView) {
      case 'patientAlert':
        return (
          <PatientAlert 
            onBack={() => setCurrentView('dashboard')}
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
            
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
              <DoctorSearch />
              <MedicalWallet />
            </div>
            
            <DoctorCards />
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
