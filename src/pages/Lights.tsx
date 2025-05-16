import DashboardLayout from '@/components/layout/DashboardLayout';
import RoomLightControl from '@/components/lights/RoomLightControl';
import LightingScene from '@/components/lights/LightingScene';
import { useLights } from '@/hooks/use-lights';
import LightActivityChart from '@/components/lights/LightActivityChart';
import { Zap } from 'lucide-react';

const Lights = () => {
  const { 
    rooms, 
    toggleLight, 
    changeBrightness, 
    activateScene,
    usage,
    mostActive
  } = useLights();

  const lightingScenes = ["Movie Night", "Reading", "Dinner", "Party", "Night Mode", "Morning"];

  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-4 sm:space-y-6 w-full">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <h1 className="text-xl sm:text-2xl font-orbitron">Lighting Control</h1>
          <div className="flex space-x-2 sm:space-x-3 mt-2 sm:mt-0 sm:ml-auto">
            <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-cosmic-blue/50 rounded-lg hover:bg-cosmic-blue/70 transition-colors text-sm sm:text-base">
              Add Device
            </button>
            <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-cosmic-blue/50 rounded-lg hover:bg-cosmic-blue/70 transition-colors text-sm sm:text-base">
              Presets
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <div className="p-3 sm:p-6 bg-cosmic-blue/30 backdrop-blur-md border border-cosmic-teal/20 rounded-xl">
            <h2 className="font-orbitron text-base sm:text-lg mb-3 sm:mb-4">Room Controls</h2>
            <div className="space-y-3 sm:space-y-4">
              {rooms.map((room) => (
                <RoomLightControl
                  key={room.name}
                  room={room.name}
                  initialBrightness={room.brightness}
                  onToggle={toggleLight}
                  onBrightnessChange={changeBrightness}
                />
              ))}
            </div>
          </div>
          
          <div className="p-3 sm:p-6 bg-cosmic-blue/30 backdrop-blur-md border border-cosmic-teal/20 rounded-xl">
            <h2 className="font-orbitron text-base sm:text-lg mb-3 sm:mb-4">Lighting Scenes</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
              {lightingScenes.map((scene) => (
                <LightingScene 
                  key={scene} 
                  name={scene} 
                  onClick={() => activateScene(scene)}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="p-3 sm:p-6 bg-[#1A1F2C] backdrop-blur-lg border border-[#8B5CF6]/50 rounded-xl shadow-xl shadow-[#8B5CF6]/10">
          <div className="flex items-center mb-3 sm:mb-4">
            <Zap size={20} className="text-[#8B5CF6] mr-2" />
            <h2 className="font-orbitron text-base sm:text-lg text-white">Light Activity <span className="text-xs font-normal text-[#8B5CF6] opacity-80 ml-1">(Premium)</span></h2>
          </div>
          <div className="h-40 sm:h-56 rounded-lg">
            <LightActivityChart />
          </div>
          <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-white/70">
            Utilizare astăzi: {usage} kWh • Cea mai activă: {mostActive}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Lights;
