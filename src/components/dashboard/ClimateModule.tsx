
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
      icon={<Thermometer className="text-cosmic-teal" size={22} />}
      status={status}
      floating
      className="bg-gradient-to-br from-cosmic-blue/40 to-cosmic-blue/20"
    >
      <div className="flex justify-between">
        <div className="flex-1">
          {/* Temperature control */}
          <div className="flex items-center mb-5">
            <div className="w-20 h-20 rounded-full cosmic-gradient flex items-center justify-center relative">
              <span className="font-orbitron text-2xl">{temperature.toFixed(1)}°</span>
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-cosmic-teal/30 animate-spin-slow" style={{animationDuration: '30s'}} />
            </div>
            
            <div className="ml-6">
              <div className="font-orbitron text-base mb-2 tracking-wide">Target: {targetTemp}°C</div>
              <div className="flex space-x-3">
                <button 
                  onClick={decreaseTemp}
                  className="p-2 bg-cosmic-blue/50 rounded-lg hover:bg-cosmic-blue/70 transition-colors border border-cosmic-teal/10"
                >
                  <ChevronDown size={18} />
                </button>
                <button 
                  onClick={increaseTemp}
                  className="p-2 bg-cosmic-blue/50 rounded-lg hover:bg-cosmic-blue/70 transition-colors border border-cosmic-teal/10"
                >
                  <ChevronUp size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Status indicators */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center p-3.5 bg-cosmic-blue/30 rounded-lg border border-cosmic-teal/10">
              <Droplets size={20} className="text-cosmic-teal mr-3" />
              <div>
                <div className="text-xs text-white/70 uppercase tracking-wide font-light">Humidity</div>
                <div className="text-base font-semibold">{humidity}%</div>
              </div>
            </div>
            
            <div className="flex items-center p-3.5 bg-cosmic-blue/30 rounded-lg border border-cosmic-teal/10">
              <Wind size={20} className={cn(
                "mr-3", 
                fanSpeed === 0 ? "text-white/50" : "text-cosmic-amber"
              )} />
              <div>
                <div className="text-xs text-white/70 uppercase tracking-wide font-light">Fan Speed</div>
                <button 
                  onClick={nextFanSpeed}
                  className="text-base font-semibold hover:text-cosmic-amber transition-colors"
                >
                  {fanSpeedNames[fanSpeed]}
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-24 flex flex-col items-center justify-center ml-4">
          <div className="h-full w-5 bg-cosmic-blue/30 rounded-full relative overflow-hidden border border-white/10">
            <div 
              className="absolute bottom-0 w-full bg-gradient-to-t from-cosmic-teal to-cosmic-teal/50 rounded-full transition-all duration-1000"
              style={{ height: `${((temperature - 15) / (30 - 15)) * 100}%` }}
            />
            <div 
              className="absolute w-full h-1.5 bg-white/50 transition-all duration-300"
              style={{ bottom: `${((targetTemp - 15) / (30 - 15)) * 100}%` }}
            />
          </div>
          <div className="text-xs mt-2 text-white/70 text-center">Scale (°C)</div>
        </div>
      </div>
      
      <div className="mt-4 text-sm text-white/80 font-medium flex items-center border-t border-white/10 pt-3">
        <span className="bg-cosmic-teal/20 px-3 py-1 rounded-full text-cosmic-teal">Excellent</span>
        <span className="mx-2">•</span>
        <span>Air quality updated just now</span>
      </div>
    </ModuleCard>
  );
};

export default ClimateModule;
