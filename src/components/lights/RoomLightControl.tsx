
import { useState } from 'react';

interface RoomLightControlProps {
  room: string;
  initialBrightness?: number;
  onToggle?: (room: string, isOn: boolean) => void;
  onBrightnessChange?: (room: string, brightness: number) => void;
}

const RoomLightControl = ({
  room,
  initialBrightness = 50,
  onToggle,
  onBrightnessChange
}: RoomLightControlProps) => {
  const [brightness, setBrightness] = useState(initialBrightness);
  const [isOn, setIsOn] = useState(initialBrightness > 0);

  const handleToggle = () => {
    const newState = !isOn;
    setIsOn(newState);
    
    if (newState && brightness === 0) {
      setBrightness(50);
      if (onBrightnessChange) onBrightnessChange(room, 50);
    } else if (!newState) {
      if (onBrightnessChange) onBrightnessChange(room, 0);
    }
    
    if (onToggle) onToggle(room, newState);
  };

  const handleBrightnessChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setBrightness(value);
    setIsOn(value > 0);
    
    if (onBrightnessChange) onBrightnessChange(room, value);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-2 sm:p-3 bg-cosmic-blue/50 rounded-lg">
      <span className="mb-2 sm:mb-0 text-sm sm:text-base">{room}</span>
      <div className="flex items-center mt-2 sm:mt-0">
        <span className="mr-2 sm:mr-3 text-xs sm:text-sm">Brightness</span>
        <input 
          type="range" 
          value={brightness}
          onChange={handleBrightnessChange}
          className="w-24 sm:w-32 h-1 bg-white/10 rounded-md appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-cosmic-amber"
        />
        <button 
          onClick={handleToggle}
          className={`ml-3 sm:ml-4 p-1.5 sm:p-2 rounded-full ${isOn ? 'bg-cosmic-blue/70' : 'bg-cosmic-blue/30'}`}
        >
          <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${isOn ? 'bg-cosmic-amber' : 'bg-white/30'}`}></div>
        </button>
      </div>
    </div>
  );
};

export default RoomLightControl;
