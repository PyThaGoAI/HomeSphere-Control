
import HomeStatusOrb from './HomeStatusOrb';
import LightingModule from './LightingModule';
import ClimateModule from './ClimateModule';
import SecurityModule from './SecurityModule';
import EnergyModule from './EnergyModule';
import ScenesModule from './ScenesModule';
import QuickStats from './QuickStats';
import RecentActivity from './RecentActivity';
import WeatherWidget from './WeatherWidget';

const Dashboard = () => {
  return (
    <div className="space-y-10 w-full mx-auto">
      {/* Header section with home status orb positioned on the right */}
      <div className="flex flex-row justify-between items-center mb-10">
        <div className="flex-1">
          <h2 className="font-orbitron text-2xl bg-gradient-to-r from-white via-cosmic-teal to-white bg-clip-text text-transparent">Comfort Level</h2>
          <p className="text-white/70">All systems operational</p>
        </div>
        <div className="relative">
          <div className="absolute w-64 h-64 bg-cosmic-teal/5 rounded-full blur-3xl -z-10"></div>
          <HomeStatusOrb size="md" />
        </div>
      </div>
      
      {/* Quick Statistics Row */}
      <section className="mb-10">
        <QuickStats />
      </section>
      
      {/* Quick Scene Access - Consistent Section */}
      <section className="mb-10">
        <div className="flex items-center mb-6">
          <h2 className="font-orbitron text-xl text-white">Quick Scenes</h2>
          <div className="h-px flex-grow bg-gradient-to-r from-transparent via-cosmic-teal/30 to-transparent ml-4"></div>
        </div>
        <ScenesModule />
      </section>
      
      {/* Weather and Recent Activity - Equal Height Section */}
      <section className="mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 h-full">
            <WeatherWidget />
          </div>
          <div className="lg:col-span-2 h-full">
            <RecentActivity />
          </div>
        </div>
      </section>
      
      {/* Main Control Panels - Equal Sections with Consistent Styling */}
      <section className="mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative h-full">
            <div className="absolute w-full h-full bg-cosmic-amber/5 rounded-xl blur-xl -z-10 translate-y-4"></div>
            <LightingModule />
          </div>
          <div className="relative h-full">
            <div className="absolute w-full h-full bg-cosmic-teal/5 rounded-xl blur-xl -z-10 translate-y-4"></div>
            <ClimateModule />
          </div>
        </div>
      </section>
      
      {/* Second Row of Control Panels - Equal Height and Consistent with First Row */}
      <section className="mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative h-full">
            <div className="absolute w-full h-full bg-cosmic-teal/5 rounded-xl blur-xl -z-10 translate-y-4"></div>
            <SecurityModule />
          </div>
          <div className="relative h-full">
            <div className="absolute w-full h-full bg-cosmic-amber/5 rounded-xl blur-xl -z-10 translate-y-4"></div>
            <EnergyModule />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
