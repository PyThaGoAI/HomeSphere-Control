
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
      {/* Home Status Section with header layout */}
      <div className="flex items-center justify-between mb-16 relative">
        {/* Welcome section on the left */}
        <div className="max-w-2xl">
          <div className="flex items-center mb-2">
            <div className="text-lg font-orbitron bg-gradient-to-r from-cosmic-teal via-white to-cosmic-amber bg-clip-text text-transparent tracking-wider">
              ULTRA PREMIUM EXPERIENCE
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-orbitron mb-4 tracking-tight leading-tight">
            Welcome to <span className="bg-gradient-to-r from-cosmic-teal to-cosmic-amber bg-clip-text text-transparent">HomeSphere</span>
          </h1>
          <p className="text-white/70 max-w-2xl text-lg leading-relaxed font-exo">
            Your entire smart home ecosystem is optimized for maximum efficiency and luxury. All systems are operational and ready for your commands.
          </p>
        </div>

        {/* Status orb on the right */}
        <div className="flex flex-col items-center">
          <HomeStatusOrb size="lg" />
          <div className="mt-2 text-center">
            <h2 className="font-orbitron text-2xl bg-gradient-to-r from-white via-cosmic-teal to-white bg-clip-text text-transparent">Comfort Level</h2>
            <p className="text-white/70">All systems operational</p>
          </div>
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
