
import { useState, useEffect } from 'react';
import { Thermometer, Wind, Droplets, ChevronUp, ChevronDown } from 'lucide-react';
import ModuleCard from './ModuleCard';
import { cn } from '@/lib/utils';

const ClimateModule = () => {
  const [temperature, setTemperature] = useState(22.5);
  const [targetTemp, setTargetTemp] = useState(22);
  const [humidity, setHumidity] = useState(45);
  const [fanSpeed, setFanSpeed] = useState(1); // 0-3 (off, low, med, high)

  // Simulate small temperature and humidity fluctuations
  useEffect(() => {
    const interval = setInterval(() => {
      setTemperature(prev => {
        const fluctuation = (Math.random() * 0.2) - 0.1;
        return +(prev + fluctuation).toFixed(1);
      });
      
      setHumidity(prev => {
        const fluctuation = Math.round((Math.random() * 2) - 1);
        return Math.min(60, Math.max(35, prev + fluctuation));
      });
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const increaseTemp = () => setTargetTemp(prev => Math.min(30, prev + 0.5));
  const decreaseTemp = () => setTargetTemp(prev => Math.max(15, prev - 0.5));
  
  const fanSpeedNames = ['Off', 'Low', 'Medium', 'High'];
  const nextFanSpeed = () => setFanSpeed(prev => (prev + 1) % 4);

  // Determine status based on if actual temp is near target temp
  const tempDiff = Math.abs(temperature - targetTemp);
  const status = tempDiff < 0.5 ? 'optimal' : tempDiff < 2 ? 'warning' : 'alert';

  return (
    <ModuleCard 
      title="Climate Control" 
      icon={<Thermometer className="text-cosmic-teal" />}
      status={status}
      floating
    >
      <div className="flex justify-between">
        <div className="flex-1">
          {/* Temperature control */}
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 rounded-full cosmic-gradient flex items-center justify-center relative">
              <span className="font-orbitron text-xl">{temperature.toFixed(1)}°</span>
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-cosmic-teal/30 animate-spin-slow" style={{animationDuration: '30s'}} />
            </div>
            
            <div className="ml-4">
              <div className="font-orbitron text-sm mb-1">Target: {targetTemp}°C</div>
              <div className="flex space-x-2">
                <button 
                  onClick={decreaseTemp}
                  className="p-1 bg-cosmic-blue/50 rounded hover:bg-cosmic-blue/70 transition-colors"
                >
                  <ChevronDown size={16} />
                </button>
                <button 
                  onClick={increaseTemp}
                  className="p-1 bg-cosmic-blue/50 rounded hover:bg-cosmic-blue/70 transition-colors"
                >
                  <ChevronUp size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Status indicators */}
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center p-2 bg-cosmic-blue/30 rounded-lg">
              <Droplets size={18} className="text-cosmic-teal mr-2" />
              <div>
                <div className="text-xs text-white/70">Humidity</div>
                <div className="text-sm font-semibold">{humidity}%</div>
              </div>
            </div>
            
            <div className="flex items-center p-2 bg-cosmic-blue/30 rounded-lg">
              <Wind size={18} className={cn(
                "mr-2", 
                fanSpeed === 0 ? "text-white/50" : "text-cosmic-amber"
              )} />
              <div>
                <div className="text-xs text-white/70">Fan</div>
                <button 
                  onClick={nextFanSpeed}
                  className="text-sm font-semibold hover:text-cosmic-amber transition-colors"
                >
                  {fanSpeedNames[fanSpeed]}
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-24 flex flex-col items-center justify-center">
          <div className="h-full w-4 bg-cosmic-blue/30 rounded-full relative overflow-hidden">
            <div 
              className="absolute bottom-0 w-full bg-gradient-to-t from-cosmic-teal to-cosmic-teal/50 rounded-full transition-all duration-1000"
              style={{ height: `${((temperature - 15) / (30 - 15)) * 100}%` }}
            />
            <div 
              className="absolute w-full h-1 bg-white/50 transition-all duration-300"
              style={{ bottom: `${((targetTemp - 15) / (30 - 15)) * 100}%` }}
            />
          </div>
          <div className="text-xs mt-1 text-white/70">Scale (°C)</div>
        </div>
      </div>
      
      <div className="mt-3 text-xs text-white/70">
        Air quality: Excellent • Last updated: Just now
      </div>
    </ModuleCard>
  );
};

export default ClimateModule;
