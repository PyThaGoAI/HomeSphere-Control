
import { useState } from 'react';
import { Laptop, Layers, Thermometer, Lightbulb, Lock } from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import ModuleCard from '@/components/dashboard/ModuleCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

const Visualization3D = () => {
  const [activeFloor, setActiveFloor] = useState('ground');
  const [activeSystem, setActiveSystem] = useState('all');
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  
  const floors = [
    { id: 'ground', name: 'Ground Floor' },
    { id: 'first', name: 'First Floor' },
    { id: 'basement', name: 'Basement' }
  ];
  
  const systems = [
    { id: 'all', name: 'All Systems', icon: Laptop },
    { id: 'climate', name: 'Climate', icon: Thermometer },
    { id: 'lighting', name: 'Lighting', icon: Lightbulb },
    { id: 'security', name: 'Security', icon: Lock }
  ];

  // Room data for ground floor
  const groundFloorRooms = [
    { id: 'living', name: 'Living Room', x: 20, y: 20, width: 40, height: 30, status: 'optimal' },
    { id: 'kitchen', name: 'Kitchen', x: 20, y: 55, width: 25, height: 25, status: 'warning' },
    { id: 'dining', name: 'Dining Room', x: 50, y: 55, width: 25, height: 25, status: 'optimal' },
    { id: 'hallway', name: 'Hallway', x: 65, y: 20, width: 15, height: 30, status: 'optimal' },
    { id: 'bathroom', name: 'Bathroom', x: 80, y: 20, width: 15, height: 15, status: 'alert' }
  ];
  
  // Room data for first floor
  const firstFloorRooms = [
    { id: 'master', name: 'Master Bedroom', x: 20, y: 20, width: 35, height: 30, status: 'optimal' },
    { id: 'ensuite', name: 'En-suite', x: 60, y: 20, width: 20, height: 15, status: 'optimal' },
    { id: 'bedroom1', name: 'Bedroom 1', x: 20, y: 55, width: 25, height: 25, status: 'warning' },
    { id: 'bedroom2', name: 'Bedroom 2', x: 50, y: 55, width: 25, height: 25, status: 'optimal' },
    { id: 'bathroom2', name: 'Bathroom 2', x: 80, y: 40, width: 15, height: 20, status: 'optimal' }
  ];
  
  // Room data for basement
  const basementFloorRooms = [
    { id: 'utility', name: 'Utility Room', x: 20, y: 20, width: 30, height: 30, status: 'alert' },
    { id: 'storage', name: 'Storage', x: 55, y: 20, width: 40, height: 30, status: 'optimal' },
    { id: 'garage', name: 'Garage', x: 20, y: 55, width: 75, height: 25, status: 'optimal' }
  ];

  // Get active rooms based on selected floor
  const getActiveRooms = () => {
    switch(activeFloor) {
      case 'ground': return groundFloorRooms;
      case 'first': return firstFloorRooms;
      case 'basement': return basementFloorRooms;
      default: return [];
    }
  };
  
  const activeRooms = getActiveRooms();
  
  // Room details based on selection
  const getRoomDetails = () => {
    if (!selectedRoom) return null;
    
    const room = activeRooms.find(r => r.id === selectedRoom);
    if (!room) return null;
    
    return {
      climate: {
        temperature: room.id === 'kitchen' ? 74 : 72,
        humidity: room.id === 'bathroom' ? 65 : 45,
        mode: room.id === 'master' ? 'Sleep' : 'Auto'
      },
      lighting: {
        brightness: room.id === 'living' ? 60 : 40,
        mode: room.id === 'living' ? 'Evening' : 'Standard',
        status: room.id === 'utility' ? 'Off' : 'On'
      },
      security: {
        motionDetected: room.id === 'utility',
        windows: room.id === 'kitchen' ? 'Open' : 'Closed',
        doors: 'Locked'
      }
    };
  };
  
  const roomDetails = getRoomDetails();

  return (
    <DashboardLayout>
      <div className="pb-10 space-y-8">
        <h1 className="font-orbitron text-3xl text-gradient-premium">3D Home Visualization</h1>
        
        {/* Floor Controls */}
        <div className="flex flex-wrap gap-4 items-center">
          <div>
            <h2 className="text-sm text-white/70 mb-2">Floor Level</h2>
            <Tabs defaultValue={activeFloor} onValueChange={setActiveFloor} className="w-fit">
              <TabsList className="bg-cosmic-blue/30">
                {floors.map(floor => (
                  <TabsTrigger
                    key={floor.id}
                    value={floor.id}
                    className="data-[state=active]:bg-cosmic-teal/20 data-[state=active]:text-cosmic-teal"
                  >
                    {floor.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
          
          <div className="flex-grow">
            <h2 className="text-sm text-white/70 mb-2">System Filter</h2>
            <div className="flex gap-2 overflow-x-auto pb-1">
              {systems.map(system => (
                <Button
                  key={system.id}
                  size="sm"
                  variant="outline"
                  onClick={() => setActiveSystem(system.id)}
                  className={cn(
                    "border-white/10 bg-cosmic-blue/20",
                    activeSystem === system.id && "border-cosmic-teal/50 bg-cosmic-teal/10 text-cosmic-teal"
                  )}
                >
                  <system.icon className="mr-1" size={16} />
                  {system.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
        
        {/* 3D Visualization Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ModuleCard
              title={`3D Floor Plan - ${floors.find(f => f.id === activeFloor)?.name}`}
              icon={<Layers className="text-cosmic-teal" size={22} />}
              status="optimal"
              className="bg-gradient-to-br from-cosmic-blue/40 to-cosmic-blue/20 h-full"
            >
              <div className="relative w-full h-[500px] bg-cosmic-blue/30 rounded-lg border border-white/10 overflow-hidden">
                {/* 3D Floor plan visualization */}
                <div className="absolute inset-0 p-4">
                  <div className="relative w-full h-full">
                    {/* Room rectangles */}
                    {activeRooms.map(room => (
                      <div
                        key={room.id}
                        className={cn(
                          "absolute border-2 transition-all duration-300 cursor-pointer",
                          selectedRoom === room.id 
                            ? "border-cosmic-teal bg-cosmic-teal/30" 
                            : "border-white/20 bg-cosmic-blue/40 hover:bg-cosmic-blue/60",
                          room.status === 'warning' && "border-cosmic-amber/50",
                          room.status === 'alert' && "border-red-500/50"
                        )}
                        style={{
                          left: `${room.x}%`,
                          top: `${room.y}%`,
                          width: `${room.width}%`,
                          height: `${room.height}%`
                        }}
                        onClick={() => setSelectedRoom(room.id === selectedRoom ? null : room.id)}
                      >
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-sm font-medium text-white/90 text-center px-1">
                            {room.name}
                          </span>
                        </div>
                        
                        {/* Status indicator */}
                        <div className={cn(
                          "status-badge",
                          room.status === 'optimal' && "status-optimal",
                          room.status === 'warning' && "bg-cosmic-amber animate-pulse-amber",
                          room.status === 'alert' && "bg-red-500 animate-pulse"
                        )}></div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* 3D Effects - Ambient Light Beams */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-[-50px] left-[10%] w-[200px] h-[300px] bg-cosmic-teal/5 rounded-full rotate-45 blur-3xl"></div>
                  <div className="absolute bottom-[-100px] right-[20%] w-[300px] h-[400px] bg-cosmic-amber/5 rounded-full blur-3xl"></div>
                </div>
                
                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
                
                {/* North Indicator */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-cosmic-blue/30 rounded-full border border-white/20 flex items-center justify-center">
                  <div className="w-1 h-8 bg-gradient-to-t from-white/30 to-cosmic-teal relative">
                    <span className="absolute -top-7 left-1/2 transform -translate-x-1/2 text-cosmic-teal font-orbitron">N</span>
                  </div>
                </div>
              </div>
            </ModuleCard>
          </div>
          
          {/* Room Details Panel */}
          <div>
            <ModuleCard
              title={selectedRoom ? activeRooms.find(r => r.id === selectedRoom)?.name || "Room Details" : "Room Details"}
              icon={<Laptop className="text-cosmic-amber" size={22} />}
              className="bg-gradient-to-br from-cosmic-blue/40 to-cosmic-blue/20 h-full"
            >
              {selectedRoom ? (
                <div className="space-y-6">
                  {/* Climate Section */}
                  <div className="p-4 bg-cosmic-blue/30 rounded-lg border border-white/10">
                    <div className="flex items-center mb-3">
                      <Thermometer size={18} className="text-cosmic-teal mr-2" />
                      <h3 className="font-orbitron text-white">Climate</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                      <div className="text-sm text-white/70">Temperature</div>
                      <div className="text-sm text-white">{roomDetails?.climate.temperature}°F</div>
                      <div className="text-sm text-white/70">Humidity</div>
                      <div className="text-sm text-white">{roomDetails?.climate.humidity}%</div>
                      <div className="text-sm text-white/70">Mode</div>
                      <div className="text-sm text-white">{roomDetails?.climate.mode}</div>
                    </div>
                  </div>
                  
                  {/* Lighting Section */}
                  <div className="p-4 bg-cosmic-blue/30 rounded-lg border border-white/10">
                    <div className="flex items-center mb-3">
                      <Lightbulb size={18} className="text-cosmic-amber mr-2" />
                      <h3 className="font-orbitron text-white">Lighting</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                      <div className="text-sm text-white/70">Brightness</div>
                      <div className="text-sm text-white">{roomDetails?.lighting.brightness}%</div>
                      <div className="text-sm text-white/70">Mode</div>
                      <div className="text-sm text-white">{roomDetails?.lighting.mode}</div>
                      <div className="text-sm text-white/70">Status</div>
                      <div className="text-sm text-white">{roomDetails?.lighting.status}</div>
                    </div>
                  </div>
                  
                  {/* Security Section */}
                  <div className="p-4 bg-cosmic-blue/30 rounded-lg border border-white/10">
                    <div className="flex items-center mb-3">
                      <Lock size={18} className="text-cosmic-teal mr-2" />
                      <h3 className="font-orbitron text-white">Security</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                      <div className="text-sm text-white/70">Motion</div>
                      <div className="text-sm text-white">{roomDetails?.security.motionDetected ? 'Detected' : 'None'}</div>
                      <div className="text-sm text-white/70">Windows</div>
                      <div className="text-sm text-white">{roomDetails?.security.windows}</div>
                      <div className="text-sm text-white/70">Doors</div>
                      <div className="text-sm text-white">{roomDetails?.security.doors}</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button
                      className="bg-cosmic-blue/40 hover:bg-cosmic-blue/60 text-white border border-white/10"
                      onClick={() => setSelectedRoom(null)}
                    >
                      Close Details
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center p-6">
                  <div className="w-16 h-16 rounded-full bg-cosmic-blue/40 flex items-center justify-center mb-4">
                    <Layers size={32} className="text-white/50" />
                  </div>
                  <h3 className="text-lg font-orbitron mb-2">No Room Selected</h3>
                  <p className="text-white/70">
                    Click on any room in the floor plan to view detailed information and controls.
                  </p>
                </div>
              )}
            </ModuleCard>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Visualization3D;
