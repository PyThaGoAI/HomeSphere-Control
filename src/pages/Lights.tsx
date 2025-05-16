
import DashboardLayout from '@/components/layout/DashboardLayout';

const Lights = () => {
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
              {["Living Room", "Kitchen", "Bedroom", "Bathroom", "Office"].map((room) => (
                <div key={room} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-2 sm:p-3 bg-cosmic-blue/50 rounded-lg">
                  <span className="mb-2 sm:mb-0 text-sm sm:text-base">{room}</span>
                  <div className="flex items-center mt-2 sm:mt-0">
                    <span className="mr-2 sm:mr-3 text-xs sm:text-sm">Brightness</span>
                    <input 
                      type="range" 
                      className="w-24 sm:w-32 h-1 bg-white/10 rounded-md appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-cosmic-amber"
                    />
                    <button className="ml-3 sm:ml-4 p-1.5 sm:p-2 rounded-full bg-cosmic-blue/70">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-cosmic-amber"></div>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="p-3 sm:p-6 bg-cosmic-blue/30 backdrop-blur-md border border-cosmic-teal/20 rounded-xl">
            <h2 className="font-orbitron text-base sm:text-lg mb-3 sm:mb-4">Lighting Scenes</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
              {["Movie Night", "Reading", "Dinner", "Party", "Night Mode", "Morning"].map((scene) => (
                <button key={scene} className="p-2 sm:p-3 sm:p-4 bg-cosmic-blue/50 rounded-lg text-center hover:bg-cosmic-blue/70 transition-colors">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-1 sm:mb-2 rounded-full bg-cosmic-blue flex items-center justify-center">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full bg-cosmic-amber opacity-70"></div>
                  </div>
                  <span className="text-xs sm:text-sm">{scene}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="p-3 sm:p-6 bg-cosmic-blue/30 backdrop-blur-md border border-cosmic-teal/20 rounded-xl">
          <h2 className="font-orbitron text-base sm:text-lg mb-3 sm:mb-4">Light Activity</h2>
          <div className="h-32 sm:h-48 bg-cosmic-blue/20 rounded-lg flex items-center justify-center">
            <span className="text-sm text-white/70">Light usage chart will appear here</span>
          </div>
          <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-white/70">
            Usage today: 4.2 kWh • Most active: Living Room
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Lights;
