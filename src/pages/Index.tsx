
import DashboardLayout from '@/components/layout/DashboardLayout';
import Dashboard from '@/components/dashboard/Dashboard';
import { useEffect } from 'react';

const Index = () => {
  // Add page title
  useEffect(() => {
    document.title = "HomeSphere - Smart Home Control Dashboard";
  }, []);

  return (
    <DashboardLayout>
      <div className="relative">
        {/* Decorative background elements */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-cosmic-teal/5 rounded-full blur-3xl -z-10 animate-pulse-glow"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-cosmic-amber/5 rounded-full blur-3xl -z-10 animate-pulse-amber"></div>
        
        <Dashboard />
      </div>
    </DashboardLayout>
  );
};

export default Index;
