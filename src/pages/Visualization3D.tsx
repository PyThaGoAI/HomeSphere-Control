
import { useState } from 'react';
import { Laptop, Layers, Thermometer, Lightbulb, Lock, ChevronDown, ChevronUp } from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import ModuleCard from '@/components/dashboard/ModuleCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Visualization3D = () => {
  const [activeFloor, setActiveFloor] = useState('ground');
  const [activeSystem, setActiveSystem] = useState('all');
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [detailsExpanded, setDetailsExpanded] = useState(false);
  const isMobile = useIsMobile();
  
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

  // Mobile optimized room details panel
  const MobileRoomDetails = () => {
    if (!isMobile || !selectedRoom) return null;
    
    return (
      <div className="fixed inset-x-0 bottom-0 z-50 bg-cosmic-blue/90 backdrop-blur-md border-t border-cosmic-teal/30 shadow-lg">
        <div className="container px-4 py-3">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-orbitron text-lg text-white">
              {activeRooms.find(r => r.id === selectedRoom)?.name}
            </h3>
            <Button 
              size="sm" 
              variant="ghost"
              className="h-8 w-8 p-0 text-white"
              onClick={() => {
                setDetailsExpanded(!detailsExpanded);
              }}
            >
              {detailsExpanded ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
            </Button>
          </div>
          
          {detailsExpanded && (
            <div className="space-y-4 pb-4">
              <div className="p-3 bg-cosmic-blue/50 rounded-lg border border-white/10">
                <div className="flex items-center mb-2">
                  <Thermometer size={16} className="text-cosmic-teal mr-2" />
                  <h3 className="font-orbitron text-sm text-white">Climate</h3>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
                  <div className="text-white/70">Temperature</div>
                  <div className="text-white">{roomDetails?.climate.temperature}°F</div>
                  <div className="text-white/70">Humidity</div>
                  <div className="text-white">{roomDetails?.climate.humidity}%</div>
                </div>
              </div>
              
              <div className="p-3 bg-cosmic-blue/50 rounded-lg border border-white/10">
                <div className="flex items-center mb-2">
                  <Lightbulb size={16} className="text-cosmic-amber mr-2" />
                  <h3 className="font-orbitron text-sm text-white">Lighting</h3>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
                  <div className="text-white/70">Brightness</div>
                  <div className="text-white">{roomDetails?.lighting.brightness}%</div>
                  <div className="text-white/70">Status</div>
                  <div className="text-white">{roomDetails?.lighting.status}</div>
                </div>
              </div>
              
              <Button
                size="sm"
                className="w-full bg-cosmic-blue/60 hover:bg-cosmic-blue/80 text-white border border-white/10 text-xs py-1"
                onClick={() => setSelectedRoom(null)}
              >
                Close Details
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <DashboardLayout>
      <div className="pb-10 space-y-6 sm:space-y-8">
        <h1 className="font-orbitron text-2xl sm:text-3xl text-gradient-premium">3D Home Visualization</h1>
        
        {/* Floor Controls - Responsive Layout */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full sm:w-auto">
            <h2 className="text-sm text-white/70 mb-2">Floor Level</h2>
            <Tabs defaultValue={activeFloor} onValueChange={setActiveFloor} className="w-full sm:w-fit">
              <TabsList className="bg-cosmic-blue/30 w-full sm:w-auto">
                {floors.map(floor => (
                  <TabsTrigger
                    key={floor.id}
                    value={floor.id}
                    className="flex-1 sm:flex-none data-[state=active]:bg-cosmic-teal/20 data-[state=active]:text-cosmic-teal"
                  >
                    {isMobile ? floor.name.split(' ')[0] : floor.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
          
          <div className="flex-grow">
            <h2 className="text-sm text-white/70 mb-2">System Filter</h2>
            <div className="flex flex-wrap gap-2">
              {systems.map(system => (
                <Button
                  key={system.id}
                  size="sm"
                  variant="outline"
                  onClick={() => setActiveSystem(system.id)}
                  className={cn(
                    "border-white/10 bg-cosmic-blue/20 text-xs sm:text-sm",
                    activeSystem === system.id && "border-cosmic-teal/50 bg-cosmic-teal/10 text-cosmic-teal"
                  )}
                >
                  <system.icon className={cn("mr-1", isMobile ? "h-4 w-4" : "h-5 w-5")} />
                  {isMobile && system.id !== 'all' ? system.name.substring(0,1) : system.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
        
        {/* 3D Visualization Area - Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="lg:col-span-2">
            <ModuleCard
              title={`3D Floor Plan - ${floors.find(f => f.id === activeFloor)?.name}`}
              icon={<Layers className="text-cosmic-teal" size={isMobile ? 18 : 22} />}
              status="optimal"
              className="bg-gradient-to-br from-cosmic-blue/40 to-cosmic-blue/20 h-full"
            >
              <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] bg-cosmic-blue/30 rounded-lg border border-white/10 overflow-hidden">
                {/* 3D Floor plan visualization */}
                <div className="absolute inset-0 p-2 sm:p-4">
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
                          <span className={cn(
                            "text-center px-1 text-white/90", 
                            isMobile ? "text-xs" : "text-sm font-medium"
                          )}>
                            {isMobile ? room.name.substring(0, 4) : room.name}
                          </span>
                        </div>
                        
                        {/* Status indicator */}
                        <div className={cn(
                          "status-badge w-2 h-2 sm:w-3 sm:h-3 absolute -top-1 -right-1 rounded-full",
                          room.status === 'optimal' && "bg-cosmic-teal animate-pulse-glow",
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
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 sm:w-16 sm:h-16 bg-cosmic-blue/30 rounded-full border border-white/20 flex items-center justify-center">
                  <div className="w-0.5 sm:w-1 h-4 sm:h-8 bg-gradient-to-t from-white/30 to-cosmic-teal relative">
                    <span className="absolute -top-5 sm:-top-7 left-1/2 transform -translate-x-1/2 text-xs sm:text-base text-cosmic-teal font-orbitron">N</span>
                  </div>
                </div>
              </div>
            </ModuleCard>
          </div>
          
          {/* Room Details Panel - Hidden on mobile when room is selected (moved to bottom sheet) */}
          <div className={cn(
            isMobile && selectedRoom ? "hidden" : "block"
          )}>
            <ModuleCard
              title={selectedRoom ? activeRooms.find(r => r.id === selectedRoom)?.name || "Room Details" : "Room Details"}
              icon={<Laptop className="text-cosmic-amber" size={isMobile ? 18 : 22} />}
              className="bg-gradient-to-br from-cosmic-blue/40 to-cosmic-blue/20 h-full"
            >
              {selectedRoom ? (
                <div className="space-y-4 sm:space-y-6">
                  {/* Climate Section */}
                  <div className="p-3 sm:p-4 bg-cosmic-blue/30 rounded-lg border border-white/10">
                    <div className="flex items-center mb-2 sm:mb-3">
                      <Thermometer size={isMobile ? 16 : 18} className="text-cosmic-teal mr-2" />
                      <h3 className="font-orbitron text-sm sm:text-base text-white">Climate</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 sm:gap-y-2">
                      <div className="text-xs sm:text-sm text-white/70">Temperature</div>
                      <div className="text-xs sm:text-sm text-white">{roomDetails?.climate.temperature}°F</div>
                      <div className="text-xs sm:text-sm text-white/70">Humidity</div>
                      <div className="text-xs sm:text-sm text-white">{roomDetails?.climate.humidity}%</div>
                      <div className="text-xs sm:text-sm text-white/70">Mode</div>
                      <div className="text-xs sm:text-sm text-white">{roomDetails?.climate.mode}</div>
                    </div>
                  </div>
                  
                  {/* Lighting Section */}
                  <div className="p-3 sm:p-4 bg-cosmic-blue/30 rounded-lg border border-white/10">
                    <div className="flex items-center mb-2 sm:mb-3">
                      <Lightbulb size={isMobile ? 16 : 18} className="text-cosmic-amber mr-2" />
                      <h3 className="font-orbitron text-sm sm:text-base text-white">Lighting</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 sm:gap-y-2">
                      <div className="text-xs sm:text-sm text-white/70">Brightness</div>
                      <div className="text-xs sm:text-sm text-white">{roomDetails?.lighting.brightness}%</div>
                      <div className="text-xs sm:text-sm text-white/70">Mode</div>
                      <div className="text-xs sm:text-sm text-white">{roomDetails?.lighting.mode}</div>
                      <div className="text-xs sm:text-sm text-white/70">Status</div>
                      <div className="text-xs sm:text-sm text-white">{roomDetails?.lighting.status}</div>
                    </div>
                  </div>
                  
                  {/* Security Section */}
                  <div className="p-3 sm:p-4 bg-cosmic-blue/30 rounded-lg border border-white/10">
                    <div className="flex items-center mb-2 sm:mb-3">
                      <Lock size={isMobile ? 16 : 18} className="text-cosmic-teal mr-2" />
                      <h3 className="font-orbitron text-sm sm:text-base text-white">Security</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 sm:gap-y-2">
                      <div className="text-xs sm:text-sm text-white/70">Motion</div>
                      <div className="text-xs sm:text-sm text-white">{roomDetails?.security.motionDetected ? 'Detected' : 'None'}</div>
                      <div className="text-xs sm:text-sm text-white/70">Windows</div>
                      <div className="text-xs sm:text-sm text-white">{roomDetails?.security.windows}</div>
                      <div className="text-xs sm:text-sm text-white/70">Doors</div>
                      <div className="text-xs sm:text-sm text-white">{roomDetails?.security.doors}</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button
                      size={isMobile ? "sm" : "default"}
                      className="bg-cosmic-blue/40 hover:bg-cosmic-blue/60 text-white border border-white/10"
                      onClick={() => setSelectedRoom(null)}
                    >
                      Close Details
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center p-4 sm:p-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-cosmic-blue/40 flex items-center justify-center mb-3 sm:mb-4">
                    <Layers size={isMobile ? 24 : 32} className="text-white/50" />
                  </div>
                  <h3 className="text-base sm:text-lg font-orbitron mb-1 sm:mb-2">No Room Selected</h3>
                  <p className="text-xs sm:text-sm text-white/70">
                    Click on any room in the floor plan to view detailed information and controls.
                  </p>
                </div>
              )}
            </ModuleCard>
          </div>
        </div>
      </div>
      
      {/* Mobile Room Details Panel */}
      <MobileRoomDetails />
    </DashboardLayout>
  );
};

export default Visualization3D;
