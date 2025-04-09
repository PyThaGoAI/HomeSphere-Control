
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
      icon={<Lightbulb className="text-cosmic-amber" />}
      status={activeRooms > 0 ? 'warning' : 'optimal'}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {rooms.map(room => (
          <div key={room.id} className="flex flex-col">
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center">
                <div 
                  className={cn(
                    "w-3 h-3 rounded-full mr-2",
                    room.lightsOn ? "bg-cosmic-amber animate-pulse-amber" : "bg-white/30"
                  )}
                />
                <span className="text-sm">{room.name}</span>
              </div>
              <button 
                onClick={() => toggleLight(room.id)}
                className="text-xs underline text-cosmic-teal"
              >
                {room.lightsOn ? 'Turn Off' : 'Turn On'}
              </button>
            </div>
            
            <div className="flex items-center">
              <input
                type="range"
                min="0"
                max="100"
                value={room.brightness}
                onChange={e => changeBrightness(room.id, parseInt(e.target.value))}
                className="w-full h-1 bg-white/10 rounded-md appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-cosmic-amber"
              />
              <span className="ml-2 text-xs w-6">{room.brightness}%</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 text-xs text-white/70">
        {activeRooms} lights on • Usage today: 4.2 kWh
      </div>
    </ModuleCard>
  );
};

export default LightingModule;
