
import { Cloud, CloudRain, Sun } from 'lucide-react';

const WeatherWidget = () => {
  return (
    <div className="module-card h-full">
      <div className="flex flex-col items-center">
        <h3 className="font-orbitron text-lg mb-2">Weather</h3>
        <div className="flex flex-col items-center py-4">
          <Sun className="text-cosmic-amber h-14 w-14" />
          <p className="text-3xl font-orbitron mt-2">24°C</p>
          <p className="text-white/70">Sunny</p>
          <div className="w-full h-px bg-white/10 my-4"></div>
          
          <div className="w-full grid grid-cols-3 gap-2">
            {[
              { day: "Wed", icon: Sun, temp: "23°" },
              { day: "Thu", icon: Cloud, temp: "20°" },
              { day: "Fri", icon: CloudRain, temp: "18°" }
            ].map((day, i) => (
              <div key={i} className="flex flex-col items-center p-2">
                <span className="text-xs text-white/70">{day.day}</span>
                <day.icon className="h-6 w-6 my-1 text-white/70" />
                <span className="text-sm">{day.temp}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
