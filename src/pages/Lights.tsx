
import DashboardLayout from '@/components/layout/DashboardLayout';

const Lights = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-6 w-full">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <h1 className="text-2xl font-orbitron">Lighting Control</h1>
          <div className="flex space-x-3 mt-2 sm:mt-0 sm:ml-auto">
            <button className="px-4 py-2 bg-cosmic-blue/50 rounded-lg hover:bg-cosmic-blue/70 transition-colors">
              Add Device
            </button>
            <button className="px-4 py-2 bg-cosmic-blue/50 rounded-lg hover:bg-cosmic-blue/70 transition-colors">
              Presets
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-4 sm:p-6 bg-cosmic-blue/30 backdrop-blur-md border border-cosmic-teal/20 rounded-xl">
            <h2 className="font-orbitron text-lg mb-4">Room Controls</h2>
            <div className="space-y-4">
              {["Living Room", "Kitchen", "Bedroom", "Bathroom", "Office"].map((room) => (
                <div key={room} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 bg-cosmic-blue/50 rounded-lg">
                  <span className="mb-2 sm:mb-0">{room}</span>
                  <div className="flex items-center mt-2 sm:mt-0">
                    <span className="mr-3 text-sm">Brightness</span>
                    <input 
                      type="range" 
                      className="w-24 sm:w-32 h-1 bg-white/10 rounded-md appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-cosmic-amber"
                    />
                    <button className="ml-4 p-2 rounded-full bg-cosmic-blue/70">
                      <div className="w-4 h-4 rounded-full bg-cosmic-amber"></div>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="p-4 sm:p-6 bg-cosmic-blue/30 backdrop-blur-md border border-cosmic-teal/20 rounded-xl">
            <h2 className="font-orbitron text-lg mb-4">Lighting Scenes</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {["Movie Night", "Reading", "Dinner", "Party", "Night Mode", "Morning"].map((scene) => (
                <button key={scene} className="p-3 sm:p-4 bg-cosmic-blue/50 rounded-lg text-center hover:bg-cosmic-blue/70 transition-colors">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 rounded-full bg-cosmic-blue flex items-center justify-center">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-cosmic-amber opacity-70"></div>
                  </div>
                  <span className="text-sm">{scene}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="p-4 sm:p-6 bg-cosmic-blue/30 backdrop-blur-md border border-cosmic-teal/20 rounded-xl">
          <h2 className="font-orbitron text-lg mb-4">Light Activity</h2>
          <div className="h-48 bg-cosmic-blue/20 rounded-lg flex items-center justify-center">
            <span className="text-white/70">Light usage chart will appear here</span>
          </div>
          <div className="mt-4 text-sm text-white/70">
            Usage today: 4.2 kWh • Most active: Living Room
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Lights;
