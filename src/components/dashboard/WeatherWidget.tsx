
import { Cloud, CloudRain, Sun, Wind, ThermometerSun, Droplets, Calendar } from 'lucide-react';

const WeatherWidget = () => {
  return (
    <div className="module-card h-full relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-cosmic-amber/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cosmic-teal/5 rounded-full blur-3xl"></div>
      
      <div className="flex flex-col items-center relative z-10">
        <h3 className="font-orbitron text-lg mb-2 flex items-center">
          <ThermometerSun size={18} className="mr-2 text-cosmic-amber" />
          <span>Weather Forecast</span>
        </h3>
        
        {/* Main weather display with enhanced styling */}
        <div className="flex flex-col items-center py-4 w-full">
          <div className="bg-gradient-to-b from-cosmic-amber/10 to-transparent p-4 rounded-full mb-2">
            <Sun className="text-cosmic-amber h-16 w-16 animate-pulse-glow" />
          </div>
          
          <p className="text-3xl font-orbitron mt-2 bg-gradient-to-r from-white via-cosmic-amber to-white bg-clip-text text-transparent">24°C</p>
          <div className="flex items-center mt-1 mb-2">
            <p className="text-white/70">Sunny</p>
            <Wind size={14} className="ml-2 text-white/50" />
            <span className="text-xs text-white/50 ml-1">3 km/h</span>
          </div>
          
          {/* Weather details with icons */}
          <div className="grid grid-cols-2 gap-2 w-full bg-cosmic-blue/30 rounded-lg p-3 mb-4">
            <div className="flex items-center">
              <Droplets size={16} className="text-cosmic-teal mr-2" />
              <div>
                <div className="text-xs text-white/50">Humidity</div>
                <div className="text-sm">45%</div>
              </div>
            </div>
            <div className="flex items-center">
              <Wind size={16} className="text-cosmic-teal mr-2" />
              <div>
                <div className="text-xs text-white/50">Pressure</div>
                <div className="text-sm">1013 hPa</div>
              </div>
            </div>
          </div>
          
          <div className="w-full h-px bg-white/10 my-2"></div>
          
          {/* Weather forecast with enhanced styling */}
          <div className="w-full">
            <div className="flex items-center mb-2">
              <Calendar size={14} className="text-cosmic-teal mr-1" />
              <span className="text-xs text-white/70">3-Day Forecast</span>
            </div>
            
            <div className="w-full grid grid-cols-3 gap-2">
              {[
                { day: "Wed", icon: Sun, temp: "23°", condition: "Sunny" },
                { day: "Thu", icon: Cloud, temp: "20°", condition: "Cloudy" },
                { day: "Fri", icon: CloudRain, temp: "18°", condition: "Rain" }
              ].map((day, i) => (
                <div 
                  key={i} 
                  className="flex flex-col items-center p-2 hover:bg-white/5 rounded-md transition-colors border border-transparent hover:border-cosmic-teal/10"
                >
                  <span className="text-xs text-white/70">{day.day}</span>
                  <day.icon className="h-8 w-8 my-2 text-white/70" />
                  <span className="text-sm font-medium">{day.temp}</span>
                  <span className="text-xs text-white/50">{day.condition}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
