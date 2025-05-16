
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';

interface Room {
  name: string;
  brightness: number;
  isOn: boolean;
}

export function useLights() {
  const [rooms, setRooms] = useState<Room[]>([
    { name: "Living Room", brightness: 70, isOn: true },
    { name: "Kitchen", brightness: 100, isOn: true },
    { name: "Bedroom", brightness: 50, isOn: true },
    { name: "Bathroom", brightness: 30, isOn: false },
    { name: "Office", brightness: 80, isOn: true }
  ]);

  const toggleLight = (roomName: string, isOn: boolean) => {
    setRooms(rooms.map(room => {
      if (room.name === roomName) {
        return { ...room, isOn };
      }
      return room;
    }));
    
    toast({
      title: `${roomName} lights ${isOn ? 'turned on' : 'turned off'}`,
      description: isOn ? "The lights are now on" : "The lights are now off",
    });
  };

  const changeBrightness = (roomName: string, brightness: number) => {
    setRooms(rooms.map(room => {
      if (room.name === roomName) {
        return { 
          ...room, 
          brightness,
          isOn: brightness > 0 
        };
      }
      return room;
    }));
  };

  const activateScene = (sceneName: string) => {
    // In a real app, each scene would have specific brightness settings for each room
    toast({
      title: `${sceneName} scene activated`,
      description: "Light settings have been adjusted",
    });
  };

  // Calculate total energy usage based on rooms that are on and their brightness
  const calculateUsage = (): number => {
    return rooms
      .filter(room => room.isOn)
      .reduce((total, room) => total + (room.brightness / 100) * 0.3, 0)
      .toFixed(1) as unknown as number;
  };

  const mostActiveRoom = (): string => {
    return rooms.reduce((prev, current) => 
      (current.isOn && current.brightness > (prev?.brightness || 0)) ? current : prev
    , { name: "", brightness: 0, isOn: false }).name;
  };

  return {
    rooms,
    toggleLight,
    changeBrightness,
    activateScene,
    usage: calculateUsage(),
    mostActive: mostActiveRoom()
  };
}
