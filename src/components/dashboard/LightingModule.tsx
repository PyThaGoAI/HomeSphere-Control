
import { useState } from 'react';
import { Lightbulb } from 'lucide-react';
import ModuleCard from './ModuleCard';
import { cn } from '@/lib/utils';

interface Room {
  id: string;
  name: string;
  lightsOn: boolean;
  brightness: number;
}

const LightingModule = () => {
  const [rooms, setRooms] = useState<Room[]>([
    { id: 'living', name: 'Living Room', lightsOn: true, brightness: 70 },
    { id: 'kitchen', name: 'Kitchen', lightsOn: true, brightness: 100 },
    { id: 'bedroom', name: 'Bedroom', lightsOn: false, brightness: 0 },
    { id: 'bathroom', name: 'Bathroom', lightsOn: false, brightness: 0 },
    { id: 'office', name: 'Office', lightsOn: true, brightness: 80 }
  ]);

  const toggleLight = (id: string) => {
    setRooms(rooms.map(room => {
      if (room.id === id) {
        const lightsOn = !room.lightsOn;
        return { 
          ...room, 
          lightsOn, 
          brightness: lightsOn ? 70 : 0 
        };
      }
      return room;
    }));
  };

  const changeBrightness = (id: string, value: number) => {
    setRooms(rooms.map(room => {
      if (room.id === id) {
        return { 
          ...room, 
          brightness: value,
          lightsOn: value > 0
        };
      }
      return room;
    }));
  };

  const activeRooms = rooms.filter(r => r.lightsOn).length;

  return (
    <ModuleCard 
      title="Lighting System" 
      icon={<Lightbulb className="text-cosmic-amber" size={22} />}
      status={activeRooms > 0 ? 'warning' : 'optimal'}
      className="bg-gradient-to-br from-cosmic-blue/40 to-cosmic-blue/20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {rooms.map(room => (
          <div key={room.id} className="flex flex-col bg-cosmic-blue/30 p-3.5 rounded-lg border border-white/5">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <div 
                  className={cn(
                    "w-3.5 h-3.5 rounded-full mr-2.5",
                    room.lightsOn ? "bg-cosmic-amber animate-pulse-amber" : "bg-white/30"
                  )}
                />
                <span className="text-base font-medium tracking-wide">{room.name}</span>
              </div>
              <button 
                onClick={() => toggleLight(room.id)}
                className="text-sm font-medium text-cosmic-teal hover:text-cosmic-teal/80 transition-colors px-2 py-1 rounded-md hover:bg-cosmic-blue/50"
              >
                {room.lightsOn ? 'Turn Off' : 'Turn On'}
              </button>
            </div>
            
            <div className="flex items-center mt-1">
              <input
                type="range"
                min="0"
                max="100"
                value={room.brightness}
                onChange={e => changeBrightness(room.id, parseInt(e.target.value))}
                className="w-full h-1.5 bg-white/10 rounded-md appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-cosmic-amber"
              />
              <span className="ml-3 text-sm font-medium min-w-[40px] text-right">{room.brightness}%</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-5 text-sm text-white/80 font-medium flex items-center">
        <span className="bg-cosmic-amber/20 px-3 py-1 rounded-full text-cosmic-amber">{activeRooms} lights on</span>
        <span className="mx-2">•</span>
        <span>Usage today: 4.2 kWh</span>
      </div>
    </ModuleCard>
  );
};

export default LightingModule;
