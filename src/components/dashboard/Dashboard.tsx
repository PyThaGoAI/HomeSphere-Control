
import HomeStatusOrb from './HomeStatusOrb';
import LightingModule from './LightingModule';
import ClimateModule from './ClimateModule';
import SecurityModule from './SecurityModule';
import EnergyModule from './EnergyModule';
import ScenesModule from './ScenesModule';

const Dashboard = () => {
  return (
    <div>
      {/* Home Status Section */}
      <div className="flex flex-col items-center justify-center mb-8">
        <HomeStatusOrb size="lg" />
        <div className="mt-2 text-center">
          <h2 className="font-orbitron text-xl">Comfort Level</h2>
          <p className="text-white/70">All systems operational</p>
        </div>
      </div>
      
      {/* Quick Scene Access */}
      <div className="mb-8">
        <ScenesModule />
      </div>
      
      {/* Main Control Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <LightingModule />
        <ClimateModule />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SecurityModule />
        <EnergyModule />
      </div>
    </div>
  );
};

export default Dashboard;
