
import { Cloud, CloudRain, Sun, Wind, ThermometerSun } from 'lucide-react';

const WeatherWidget = () => {
  return (
    <div className="module-card h-full">
      <div className="flex flex-col items-center">
        <h3 className="font-orbitron text-lg mb-2 flex items-center">
          <ThermometerSun size={18} className="mr-2 text-cosmic-amber" />
          <span>Weather</span>
        </h3>
        <div className="flex flex-col items-center py-4">
          <Sun className="text-cosmic-amber h-14 w-14 animate-pulse-glow" />
          <p className="text-3xl font-orbitron mt-2">24°C</p>
          <div className="flex items-center mt-1">
            <p className="text-white/70">Sunny</p>
            <Wind size={14} className="ml-2 text-white/50" />
            <span className="text-xs text-white/50 ml-1">3 km/h</span>
          </div>
          <div className="w-full h-px bg-white/10 my-4"></div>
          
          <div className="w-full grid grid-cols-3 gap-2">
            {[
              { day: "Wed", icon: Sun, temp: "23°", condition: "Sunny" },
              { day: "Thu", icon: Cloud, temp: "20°", condition: "Cloudy" },
              { day: "Fri", icon: CloudRain, temp: "18°", condition: "Rain" }
            ].map((day, i) => (
              <div key={i} className="flex flex-col items-center p-2 hover:bg-white/5 rounded-md transition-colors">
                <span className="text-xs text-white/70">{day.day}</span>
                <day.icon className="h-6 w-6 my-1 text-white/70" />
                <span className="text-sm font-medium">{day.temp}</span>
                <span className="text-xs text-white/50">{day.condition}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
