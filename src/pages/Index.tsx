import DashboardHeader from "@/components/dashboard/DashboardHeader";
import QuickStats from "@/components/dashboard/QuickStats";
import DoctorSearch from "@/components/dashboard/DoctorSearch";
import DoctorCards from "@/components/dashboard/DoctorCards";
import MedicalWallet from "@/components/dashboard/MedicalWallet";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-bg">
      <DashboardHeader />
      
      <main className="container mx-auto px-6 py-8">
        <QuickStats />
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
          <DoctorSearch />
          <MedicalWallet />
        </div>
        
        <DoctorCards />
      </main>
    </div>
  );
};

export default Index;
