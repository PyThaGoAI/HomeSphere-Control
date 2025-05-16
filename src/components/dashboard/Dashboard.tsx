
import HomeStatusOrb from './HomeStatusOrb';
import LightingModule from './LightingModule';
import ClimateModule from './ClimateModule';
import SecurityModule from './SecurityModule';
import EnergyModule from './EnergyModule';
import ScenesModule from './ScenesModule';
import QuickStats from './QuickStats';
import RecentActivity from './RecentActivity';
import WeatherWidget from './WeatherWidget';
import { Bell, Clock, Star, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
  return (
    <div className="space-y-10 w-full mx-auto">
      {/* Home Status Section with enhanced layout */}
      <div className="flex justify-between items-center mb-10 relative">
        <div className="flex flex-col">
          <div className="absolute w-64 h-64 bg-cosmic-teal/5 rounded-full blur-3xl -z-10"></div>
          <h2 className="font-orbitron text-2xl bg-gradient-to-r from-white via-cosmic-teal to-white bg-clip-text text-transparent">Comfort Level</h2>
          <p className="text-white/70">All systems operational</p>
        </div>
        
        {/* Home Status Orb */}
        <div className="flex flex-col items-center">
          <HomeStatusOrb size="lg" />
        </div>
      </div>
      
      {/* Smart Home Insights - New Section */}
      <section className="mb-10">
        <div className="flex items-center mb-6">
          <h2 className="font-orbitron text-xl text-white">Smart Home Insights</h2>
          <div className="h-px flex-grow bg-gradient-to-r from-transparent via-cosmic-teal/30 to-transparent ml-4"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 relative bg-cosmic-blue/30 backdrop-blur-sm p-6 rounded-xl border border-cosmic-teal/20">
            <div className="absolute inset-0 bg-gradient-to-br from-cosmic-teal/10 to-transparent opacity-50 rounded-xl"></div>
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-orbitron text-lg text-white">System Status</h3>
                <Bell className="text-cosmic-teal" size={20} />
              </div>
              <div className="space-y-4">
                {[
                  { name: "Security", status: "Optimal", icon: Shield, color: "bg-cosmic-teal" },
                  { name: "Energy", status: "Efficient", icon: Zap, color: "bg-cosmic-amber" },
                  { name: "Automation", status: "Active", icon: Clock, color: "bg-indigo-400" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center">
                    <div className={`p-2 rounded-full ${item.color}/20 mr-3`}>
                      <item.icon size={16} className={item.color.replace('bg-', 'text-')} />
                    </div>
                    <div>
                      <div className="text-sm text-white/80">{item.name}</div>
                      <div className="text-xs text-white/60">{item.status}</div>
                    </div>
                    <div className={`ml-auto w-2 h-2 rounded-full ${item.color}`}></div>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" className="mt-4 w-full border-cosmic-teal/30 text-cosmic-teal hover:bg-cosmic-teal/10">
                View Full Report
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <WeatherWidget />
          </div>
        </div>
      </section>
      
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
      
      {/* Recent Activity Section */}
      <section className="mb-10">
        <div className="flex items-center mb-6">
          <h2 className="font-orbitron text-xl text-white">Recent Activity</h2>
          <div className="h-px flex-grow bg-gradient-to-r from-transparent via-cosmic-teal/30 to-transparent ml-4"></div>
        </div>
        <RecentActivity />
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
