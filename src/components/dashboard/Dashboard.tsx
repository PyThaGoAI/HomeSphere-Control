
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
    <div className="space-y-8">
      {/* Home Status Section with enhanced layout */}
      <div className="flex flex-col items-center justify-center mb-8 relative">
        <div className="absolute w-64 h-64 bg-cosmic-teal/5 rounded-full blur-3xl -z-10"></div>
        <HomeStatusOrb size="lg" />
        <div className="mt-4 text-center">
          <h2 className="font-orbitron text-2xl bg-gradient-to-r from-white via-cosmic-teal to-white bg-clip-text text-transparent">Comfort Level</h2>
          <p className="text-white/70">All systems operational</p>
        </div>
      </div>
      
      {/* Quick Statistics Row */}
      <QuickStats />
      
      {/* Quick Scene Access */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <h2 className="font-orbitron text-xl text-white">Quick Scenes</h2>
          <div className="h-px flex-grow bg-gradient-to-r from-transparent via-cosmic-teal/30 to-transparent ml-4"></div>
        </div>
        <ScenesModule />
      </div>
      
      {/* Weather and Recent Activity - New Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-1">
          <WeatherWidget />
        </div>
        <div className="lg:col-span-2">
          <RecentActivity />
        </div>
      </div>
      
      {/* Main Control Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="relative">
          <div className="absolute w-full h-full bg-cosmic-amber/5 rounded-xl blur-xl -z-10 translate-y-4"></div>
          <LightingModule />
        </div>
        <div className="relative">
          <div className="absolute w-full h-full bg-cosmic-teal/5 rounded-xl blur-xl -z-10 translate-y-4"></div>
          <ClimateModule />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="relative">
          <div className="absolute w-full h-full bg-cosmic-teal/5 rounded-xl blur-xl -z-10 translate-y-4"></div>
          <SecurityModule />
        </div>
        <div className="relative">
          <div className="absolute w-full h-full bg-cosmic-amber/5 rounded-xl blur-xl -z-10 translate-y-4"></div>
          <EnergyModule />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
