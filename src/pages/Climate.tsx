
import DashboardLayout from '@/components/layout/DashboardLayout';
import { useState } from 'react';

const Climate = () => {
  const [activeZone, setActiveZone] = useState("Living Room");
  
  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-6">
        <div className="flex items-center">
          <h1 className="text-2xl font-orbitron">Climate Control</h1>
          <div className="ml-auto flex space-x-3">
            <button className="px-4 py-2 bg-cosmic-blue/50 rounded-lg hover:bg-cosmic-blue/70 transition-colors">
              Schedule
            </button>
            <button className="px-4 py-2 bg-cosmic-blue/50 rounded-lg hover:bg-cosmic-blue/70 transition-colors">
              Auto Adjust
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-cosmic-blue/30 backdrop-blur-md border border-cosmic-teal/20 rounded-xl col-span-1">
            <h2 className="font-orbitron text-lg mb-4">Climate Zones</h2>
            <div className="space-y-2">
              {["Living Room", "Kitchen", "Bedroom", "Bathroom", "Office"].map((zone) => (
                <button 
                  key={zone} 
                  className={`w-full p-3 text-left rounded-lg transition-colors ${activeZone === zone ? 'bg-cosmic-blue/70 border border-cosmic-teal/40' : 'bg-cosmic-blue/40 hover:bg-cosmic-blue/60'}`}
                  onClick={() => setActiveZone(zone)}
                >
                  <div className="flex items-center justify-between">
                    <span>{zone}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm">22°C</span>
                      <div className={`w-2 h-2 rounded-full ${activeZone === zone ? 'bg-cosmic-teal animate-pulse' : 'bg-white/50'}`}></div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          <div className="p-6 bg-cosmic-blue/30 backdrop-blur-md border border-cosmic-teal/20 rounded-xl col-span-2">
            <h2 className="font-orbitron text-lg mb-2">{activeZone} Controls</h2>
            <div className="mb-6 text-white/70 text-sm">Current temperature: 22.5°C • Target: 22°C</div>
            
            <div className="flex flex-col md:flex-row md:space-x-8">
              <div className="flex flex-col items-center mb-6 md:mb-0">
                <div className="w-36 h-36 rounded-full cosmic-gradient flex items-center justify-center relative mb-4">
                  <span className="font-orbitron text-2xl">22.5°</span>
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-cosmic-teal/30 animate-spin-slow" style={{animationDuration: '30s'}}></div>
                </div>
                <div className="flex space-x-4">
                  <button className="w-12 h-12 flex items-center justify-center rounded-full bg-cosmic-blue/50 hover:bg-cosmic-blue/70 transition-colors">
                    -
                  </button>
                  <button className="w-12 h-12 flex items-center justify-center rounded-full bg-cosmic-blue/50 hover:bg-cosmic-blue/70 transition-colors">
                    +
                  </button>
                </div>
              </div>
              
              <div className="flex-1 grid grid-cols-2 gap-4">
                <div className="p-4 bg-cosmic-blue/50 rounded-lg">
                  <h3 className="text-sm text-white/70 mb-1">Humidity</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-semibold">45%</span>
                    <input 
                      type="range" 
                      className="w-28 h-1 bg-white/10 rounded-md appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-cosmic-teal"
                    />
                  </div>
                </div>
                
                <div className="p-4 bg-cosmic-blue/50 rounded-lg">
                  <h3 className="text-sm text-white/70 mb-1">Fan Speed</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-semibold">Low</span>
                    <div className="flex space-x-1">
                      {["Off", "Low", "Med", "High"].map((speed, index) => (
                        <button 
                          key={speed}
                          className={`w-6 h-6 rounded-full text-xs flex items-center justify-center ${index === 1 ? 'bg-cosmic-teal/60' : 'bg-cosmic-blue/70'}`}
                        >
                          {index === 0 ? "O" : index}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-cosmic-blue/50 rounded-lg">
                  <h3 className="text-sm text-white/70 mb-1">Mode</h3>
                  <div className="flex space-x-2">
                    {["Auto", "Heat", "Cool", "Fan"].map((mode, index) => (
                      <button 
                        key={mode}
                        className={`px-3 py-1 text-xs rounded-full ${index === 0 ? 'bg-cosmic-teal text-black' : 'bg-cosmic-blue/70'}`}
                      >
                        {mode}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="p-4 bg-cosmic-blue/50 rounded-lg">
                  <h3 className="text-sm text-white/70 mb-1">Air Quality</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-semibold text-cosmic-teal">Good</span>
                    <span>PM2.5: 8</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-cosmic-blue/30 backdrop-blur-md border border-cosmic-teal/20 rounded-xl">
          <h2 className="font-orbitron text-lg mb-4">Temperature History</h2>
          <div className="h-48 bg-cosmic-blue/20 rounded-lg flex items-center justify-center">
            <span className="text-white/70">Temperature chart will appear here</span>
          </div>
          <div className="mt-4 text-sm text-white/70">
            Today's average: 22.3°C • Energy used: 2.8 kWh
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Climate;
