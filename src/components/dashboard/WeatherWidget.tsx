
import { Cloud, CloudRain, Sun, Wind, ThermometerSun, Droplets, Calendar } from 'lucide-react';

const WeatherWidget = () => {
  return (
    <div className="module-card h-full relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-cosmic-amber/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cosmic-teal/5 rounded-full blur-3xl"></div>
      
      <div className="flex flex-col items-center relative z-10">
        <h3 className="font-orbitron text-xl mb-3 flex items-center tracking-wide">
          <ThermometerSun size={20} className="mr-2.5 text-cosmic-amber" />
          <span className="bg-gradient-to-r from-white via-cosmic-amber to-white bg-clip-text text-transparent">Weather Forecast</span>
        </h3>
        
        {/* Main weather display with enhanced styling */}
        <div className="flex flex-col items-center py-4 w-full">
          <div className="bg-gradient-to-b from-cosmic-amber/10 to-transparent p-4 rounded-full mb-3">
            <Sun className="text-cosmic-amber h-16 w-16 animate-pulse-glow" />
          </div>
          
          <p className="text-4xl font-orbitron mt-2 bg-gradient-to-r from-white via-cosmic-amber to-white bg-clip-text text-transparent tracking-tight">24°C</p>
          <div className="flex items-center mt-1 mb-3">
            <p className="text-white/80 font-medium">Sunny</p>
            <Wind size={14} className="ml-2.5 text-white/60" />
            <span className="text-sm text-white/60 ml-1 font-light">3 km/h</span>
          </div>
          
          {/* Weather details with icons */}
          <div className="grid grid-cols-2 gap-3 w-full bg-cosmic-blue/40 rounded-lg p-4 mb-5 backdrop-blur-sm border border-cosmic-teal/10">
            <div className="flex items-center">
              <Droplets size={18} className="text-cosmic-teal mr-3" />
              <div>
                <div className="text-xs text-white/60 uppercase tracking-wider font-light">Humidity</div>
                <div className="text-base font-medium">45%</div>
              </div>
            </div>
            <div className="flex items-center">
              <Wind size={18} className="text-cosmic-teal mr-3" />
              <div>
                <div className="text-xs text-white/60 uppercase tracking-wider font-light">Pressure</div>
                <div className="text-base font-medium">1013 hPa</div>
              </div>
            </div>
          </div>
          
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-3"></div>
          
          {/* Weather forecast with enhanced styling */}
          <div className="w-full">
            <div className="flex items-center mb-3">
              <Calendar size={16} className="text-cosmic-teal mr-2" />
              <span className="text-sm text-white/80 font-medium tracking-wide">3-Day Forecast</span>
            </div>
            
            <div className="w-full grid grid-cols-3 gap-3">
              {[
                { day: "Wed", icon: Sun, temp: "23°", condition: "Sunny" },
                { day: "Thu", icon: Cloud, temp: "20°", condition: "Cloudy" },
                { day: "Fri", icon: CloudRain, temp: "18°", condition: "Rain" }
              ].map((day, i) => (
                <div 
                  key={i} 
                  className="flex flex-col items-center p-3 hover:bg-white/5 rounded-md transition-all duration-300 border border-transparent hover:border-cosmic-teal/20"
                >
                  <span className="text-sm text-white/80 font-medium">{day.day}</span>
                  <day.icon className="h-9 w-9 my-2.5 text-white/80" />
                  <span className="text-base font-orbitron">{day.temp}</span>
                  <span className="text-xs text-white/60 font-light">{day.condition}</span>
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
