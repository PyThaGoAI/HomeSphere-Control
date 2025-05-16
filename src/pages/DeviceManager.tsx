
import { useState, useEffect } from 'react';
import { HardDrive, Cpu, RefreshCw, Plus, Signal, Wifi, Activity, Power, Settings, Bluetooth } from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import ModuleCard from '@/components/dashboard/ModuleCard';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface Device {
  id: string;
  name: string;
  type: 'light' | 'thermostat' | 'security' | 'multimedia' | 'other';
  status: 'online' | 'offline' | 'warning' | 'updating';
  battery?: number;
  firmware: string;
  lastUpdated: string;
  location: string;
  model: string;
  connection: 'wifi' | 'zigbee' | 'bluetooth' | 'zwave';
  signalStrength?: number;
  ipAddress?: string;
  notes?: string;
}

const DeviceManager = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [devices, setDevices] = useState<Device[]>([]);
  const [isScanning, setIsScanning] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState<Device | null>(null);
  const { toast } = useToast();
  
  // Generate mock devices data
  useEffect(() => {
    const mockDevices: Device[] = [
      {
        id: 'lgt-001',
        name: 'Living Room Ceiling Light',
        type: 'light',
        status: 'online',
        firmware: '3.2.5',
        lastUpdated: '2025-04-28',
        location: 'Living Room',
        model: 'SphereLight Pro',
        connection: 'zigbee',
        signalStrength: 92
      },
      {
        id: 'lgt-002',
        name: 'Kitchen Ambient Lights',
        type: 'light',
        status: 'online',
        firmware: '3.2.5',
        lastUpdated: '2025-04-28',
        location: 'Kitchen',
        model: 'SphereLight Strip',
        connection: 'zigbee',
        signalStrength: 87
      },
      {
        id: 'thm-001',
        name: 'Main Thermostat',
        type: 'thermostat',
        status: 'online',
        battery: 78,
        firmware: '2.4.0',
        lastUpdated: '2025-05-01',
        location: 'Hallway',
        model: 'SphereClimate Touch',
        connection: 'wifi',
        signalStrength: 95,
        ipAddress: '192.168.1.45'
      },
      {
        id: 'sec-001',
        name: 'Front Door Camera',
        type: 'security',
        status: 'warning',
        firmware: '1.9.2',
        lastUpdated: '2025-04-15',
        location: 'Front Door',
        model: 'SphereVision Pro',
        connection: 'wifi',
        signalStrength: 76,
        ipAddress: '192.168.1.22',
        notes: 'Occasional connection drops'
      },
      {
        id: 'sec-002',
        name: 'Motion Sensor - Backyard',
        type: 'security',
        status: 'online',
        battery: 92,
        firmware: '2.1.0',
        lastUpdated: '2025-05-10',
        location: 'Backyard',
        model: 'SphereSense Motion',
        connection: 'zigbee',
        signalStrength: 81
      },
      {
        id: 'med-001',
        name: 'Living Room Speaker',
        type: 'multimedia',
        status: 'online',
        firmware: '5.2.1',
        lastUpdated: '2025-05-12',
        location: 'Living Room',
        model: 'SphereSound 360',
        connection: 'wifi',
        signalStrength: 98,
        ipAddress: '192.168.1.33'
      },
      {
        id: 'med-002',
        name: 'Bedroom TV',
        type: 'multimedia',
        status: 'offline',
        firmware: '4.0.3',
        lastUpdated: '2025-03-20',
        location: 'Main Bedroom',
        model: 'SphereScreen 55"',
        connection: 'wifi',
        ipAddress: '192.168.1.55'
      },
      {
        id: 'oth-001',
        name: 'Smart Refrigerator',
        type: 'other',
        status: 'online',
        firmware: '2.3.4',
        lastUpdated: '2025-04-05',
        location: 'Kitchen',
        model: 'KitchenSphere Pro',
        connection: 'wifi',
        signalStrength: 90,
        ipAddress: '192.168.1.60'
      },
      {
        id: 'oth-002',
        name: 'Plant Moisture Sensor',
        type: 'other',
        status: 'online',
        battery: 45,
        firmware: '1.0.2',
        lastUpdated: '2025-02-15',
        location: 'Living Room',
        model: 'SpherePlant Mini',
        connection: 'bluetooth',
        signalStrength: 65
      },
      {
        id: 'lgt-003',
        name: 'Bedroom Night Light',
        type: 'light',
        status: 'updating',
        firmware: '3.1.9 → 3.2.0',
        lastUpdated: '2025-05-16',
        location: 'Main Bedroom',
        model: 'SphereLight Mini',
        connection: 'zwave',
        signalStrength: 88
      }
    ];
    
    setDevices(mockDevices);
  }, []);
  
  // Filter devices based on active tab
  const filteredDevices = devices.filter(device => {
    if (activeTab === 'all') return true;
    if (activeTab === 'issues') return device.status === 'offline' || device.status === 'warning';
    return device.type === activeTab;
  });
  
  // Simulate device scanning
  const handleScan = () => {
    setIsScanning(true);
    toast({
      title: "Scanning for new devices",
      description: "This may take up to 60 seconds...",
    });
    
    // Simulate scan completion
    setTimeout(() => {
      setIsScanning(false);
      toast({
        title: "Scan completed",
        description: "No new devices found on your network.",
      });
    }, 5000);
  };
  
  // Simulate firmware update
  const handleUpdate = (deviceId: string) => {
    toast({
      title: "Firmware Update",
      description: "Update initiated for " + devices.find(d => d.id === deviceId)?.name,
    });
    
    // Update device status
    setDevices(devices.map(d => {
      if (d.id === deviceId) {
        return { ...d, status: 'updating' };
      }
      return d;
    }));
    
    // Simulate update completion
    setTimeout(() => {
      setDevices(devices.map(d => {
        if (d.id === deviceId) {
          return { 
            ...d, 
            status: 'online', 
            firmware: d.firmware.split(' → ')[1] || (parseFloat(d.firmware) + 0.1).toFixed(1) 
          };
        }
        return d;
      }));
      
      toast({
        title: "Update Successful",
        description: "Device firmware has been updated successfully.",
      });
    }, 8000);
  };
  
  // Get connection icon based on type
  const getConnectionIcon = (type: string) => {
    switch (type) {
      case 'wifi': return <Wifi size={16} />;
      case 'zigbee': return <Signal size={16} />;
      case 'bluetooth': return <Bluetooth size={16} />;
      default: return <Signal size={16} />;
    }
  };
  
  // Stats summary for all devices
  const deviceStats = {
    total: devices.length,
    online: devices.filter(d => d.status === 'online').length,
    offline: devices.filter(d => d.status === 'offline').length,
    warning: devices.filter(d => d.status === 'warning').length,
    updating: devices.filter(d => d.status === 'updating').length
  };

  return (
    <DashboardLayout>
      <div className="pb-10 space-y-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h1 className="font-orbitron text-3xl text-gradient-premium">Device Manager</h1>
          <div className="flex gap-4">
            <Button
              onClick={handleScan}
              disabled={isScanning}
              className="bg-cosmic-teal text-black hover:bg-cosmic-teal/80"
            >
              {isScanning ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  Scanning...
                </>
              ) : (
                <>
                  <Signal className="mr-2 h-4 w-4" />
                  Scan for Devices
                </>
              )}
            </Button>
            <Button
              variant="outline"
              className="border-cosmic-teal/30 bg-cosmic-blue/30 hover:bg-cosmic-blue/50 text-white"
            >
              <Plus className="mr-2 h-4 w-4" />
              Add Device
            </Button>
          </div>
        </div>
        
        {/* Device Stats Summary */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          <Card className="bg-cosmic-blue/30 border-white/10">
            <CardContent className="p-4 flex flex-col items-center">
              <div className="p-3 rounded-full bg-cosmic-blue/40 mb-3">
                <HardDrive className="h-6 w-6 text-cosmic-teal" />
              </div>
              <div className="text-2xl font-orbitron text-white mb-1">{deviceStats.total}</div>
              <div className="text-xs text-white/70">Total Devices</div>
            </CardContent>
          </Card>
          
          <Card className="bg-cosmic-blue/30 border-white/10">
            <CardContent className="p-4 flex flex-col items-center">
              <div className="p-3 rounded-full bg-cosmic-teal/20 mb-3">
                <Power className="h-6 w-6 text-cosmic-teal" />
              </div>
              <div className="text-2xl font-orbitron text-cosmic-teal mb-1">{deviceStats.online}</div>
              <div className="text-xs text-white/70">Online</div>
            </CardContent>
          </Card>
          
          <Card className="bg-cosmic-blue/30 border-white/10">
            <CardContent className="p-4 flex flex-col items-center">
              <div className="p-3 rounded-full bg-red-500/20 mb-3">
                <Power className="h-6 w-6 text-red-500" />
              </div>
              <div className="text-2xl font-orbitron text-red-400 mb-1">{deviceStats.offline}</div>
              <div className="text-xs text-white/70">Offline</div>
            </CardContent>
          </Card>
          
          <Card className="bg-cosmic-blue/30 border-white/10">
            <CardContent className="p-4 flex flex-col items-center">
              <div className="p-3 rounded-full bg-cosmic-amber/20 mb-3">
                <Activity className="h-6 w-6 text-cosmic-amber" />
              </div>
              <div className="text-2xl font-orbitron text-cosmic-amber mb-1">{deviceStats.warning}</div>
              <div className="text-xs text-white/70">Warnings</div>
            </CardContent>
          </Card>
          
          <Card className="bg-cosmic-blue/30 border-white/10">
            <CardContent className="p-4 flex flex-col items-center">
              <div className="p-3 rounded-full bg-blue-400/20 mb-3">
                <RefreshCw className="h-6 w-6 text-blue-400" />
              </div>
              <div className="text-2xl font-orbitron text-blue-400 mb-1">{deviceStats.updating}</div>
              <div className="text-xs text-white/70">Updating</div>
            </CardContent>
          </Card>
        </div>
        
        {/* Device List with Tabs */}
        <ModuleCard
          title="Connected Devices"
          icon={<Cpu className="text-cosmic-teal" size={22} />}
          className="bg-gradient-to-br from-cosmic-blue/40 to-cosmic-blue/20"
        >
          <div className="mb-6">
            <Tabs 
              value={activeTab} 
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="bg-cosmic-blue/40 w-full justify-start overflow-x-auto">
                <TabsTrigger 
                  value="all"
                  className="data-[state=active]:bg-cosmic-teal/20 data-[state=active]:text-cosmic-teal"
                >
                  All Devices
                </TabsTrigger>
                <TabsTrigger 
                  value="light"
                  className="data-[state=active]:bg-cosmic-teal/20 data-[state=active]:text-cosmic-teal"
                >
                  Lighting
                </TabsTrigger>
                <TabsTrigger 
                  value="thermostat"
                  className="data-[state=active]:bg-cosmic-teal/20 data-[state=active]:text-cosmic-teal"
                >
                  Climate
                </TabsTrigger>
                <TabsTrigger 
                  value="security"
                  className="data-[state=active]:bg-cosmic-teal/20 data-[state=active]:text-cosmic-teal"
                >
                  Security
                </TabsTrigger>
                <TabsTrigger 
                  value="multimedia"
                  className="data-[state=active]:bg-cosmic-teal/20 data-[state=active]:text-cosmic-teal"
                >
                  Media
                </TabsTrigger>
                <TabsTrigger 
                  value="other"
                  className="data-[state=active]:bg-cosmic-teal/20 data-[state=active]:text-cosmic-teal"
                >
                  Other
                </TabsTrigger>
                <TabsTrigger 
                  value="issues"
                  className="data-[state=active]:bg-cosmic-amber/20 data-[state=active]:text-cosmic-amber"
                >
                  Issues
                </TabsTrigger>
              </TabsList>
              
              <div className="mt-6 space-y-4">
                {filteredDevices.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center text-white/60">
                    <HardDrive size={48} className="mb-4 text-white/30" />
                    <p className="text-lg">No devices found in this category</p>
                    {activeTab === 'issues' && (
                      <p className="mt-2">All your devices are working properly</p>
                    )}
                  </div>
                ) : (
                  filteredDevices.map(device => (
                    <div
                      key={device.id}
                      className={cn(
                        "border rounded-lg p-4 transition-all duration-300 hover:bg-cosmic-blue/40 cursor-pointer",
                        device.status === 'online' && "border-cosmic-teal/20",
                        device.status === 'offline' && "border-red-500/20 bg-red-500/5",
                        device.status === 'warning' && "border-cosmic-amber/20 bg-cosmic-amber/5",
                        device.status === 'updating' && "border-blue-400/20 bg-blue-400/5",
                        selectedDevice?.id === device.id && "ring-2 ring-cosmic-teal/30"
                      )}
                      onClick={() => setSelectedDevice(device)}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className={cn(
                            "w-3 h-3 rounded-full mr-3",
                            device.status === 'online' && "bg-cosmic-teal animate-pulse-glow",
                            device.status === 'offline' && "bg-red-500",
                            device.status === 'warning' && "bg-cosmic-amber animate-pulse-amber",
                            device.status === 'updating' && "bg-blue-400 animate-pulse"
                          )}></div>
                          <div>
                            <h3 className="font-orbitron text-base text-white">{device.name}</h3>
                            <div className="flex items-center mt-1 text-xs text-white/70">
                              <span className="mr-3">{device.model}</span>
                              <span className="flex items-center">
                                {getConnectionIcon(device.connection)}
                                <span className="ml-1">{device.connection.toUpperCase()}</span>
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          {device.battery && (
                            <div className="hidden sm:flex items-center text-xs text-white/70">
                              <div className="w-16 mr-2">
                                <Progress 
                                  value={device.battery} 
                                  className="h-1.5" 
                                  indicatorClassName={cn(
                                    device.battery > 50 ? "bg-cosmic-teal" : 
                                    device.battery > 20 ? "bg-cosmic-amber" : "bg-red-500"
                                  )}
                                />
                              </div>
                              {device.battery}%
                            </div>
                          )}
                          
                          {device.signalStrength && (
                            <div className="hidden md:flex items-center text-xs text-white/70">
                              <Signal size={12} className="mr-1" />
                              {device.signalStrength}%
                            </div>
                          )}
                          
                          {device.status !== 'updating' && (
                            <Button
                              variant="outline" 
                              size="sm"
                              className="bg-cosmic-blue/30 border-white/10 hover:bg-cosmic-blue/50"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedDevice(device);
                              }}
                            >
                              <Settings size={14} />
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </Tabs>
          </div>
        </ModuleCard>
        
        {/* Device Details Panel */}
        {selectedDevice && (
          <ModuleCard
            title="Device Details"
            icon={<Cpu className="text-cosmic-amber" size={22} />}
            className="bg-gradient-to-br from-cosmic-blue/40 to-cosmic-blue/20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1 space-y-6">
                <div className="bg-cosmic-blue/30 p-4 rounded-lg border border-white/10">
                  <h3 className="font-orbitron text-base text-white mb-4">Information</h3>
                  
                  <div className="space-y-3">
                    <div className="grid grid-cols-2">
                      <span className="text-sm text-white/70">Device ID:</span>
                      <span className="text-sm text-white">{selectedDevice.id}</span>
                    </div>
                    <div className="grid grid-cols-2">
                      <span className="text-sm text-white/70">Location:</span>
                      <span className="text-sm text-white">{selectedDevice.location}</span>
                    </div>
                    <div className="grid grid-cols-2">
                      <span className="text-sm text-white/70">Model:</span>
                      <span className="text-sm text-white">{selectedDevice.model}</span>
                    </div>
                    <div className="grid grid-cols-2">
                      <span className="text-sm text-white/70">Connection:</span>
                      <span className="text-sm text-white flex items-center">
                        {getConnectionIcon(selectedDevice.connection)}
                        <span className="ml-1">{selectedDevice.connection.toUpperCase()}</span>
                      </span>
                    </div>
                    {selectedDevice.ipAddress && (
                      <div className="grid grid-cols-2">
                        <span className="text-sm text-white/70">IP Address:</span>
                        <span className="text-sm text-white">{selectedDevice.ipAddress}</span>
                      </div>
                    )}
                    {selectedDevice.signalStrength && (
                      <div className="grid grid-cols-2">
                        <span className="text-sm text-white/70">Signal Strength:</span>
                        <div className="flex items-center">
                          <Progress 
                            value={selectedDevice.signalStrength} 
                            className="h-1.5 w-16 mr-2" 
                            indicatorClassName={cn(
                              selectedDevice.signalStrength > 70 ? "bg-cosmic-teal" : 
                              selectedDevice.signalStrength > 40 ? "bg-cosmic-amber" : "bg-red-500"
                            )}
                          />
                          <span className="text-sm text-white">{selectedDevice.signalStrength}%</span>
                        </div>
                      </div>
                    )}
                    {selectedDevice.battery && (
                      <div className="grid grid-cols-2">
                        <span className="text-sm text-white/70">Battery:</span>
                        <div className="flex items-center">
                          <Progress 
                            value={selectedDevice.battery} 
                            className="h-1.5 w-16 mr-2" 
                            indicatorClassName={cn(
                              selectedDevice.battery > 50 ? "bg-cosmic-teal" : 
                              selectedDevice.battery > 20 ? "bg-cosmic-amber" : "bg-red-500"
                            )}
                          />
                          <span className="text-sm text-white">{selectedDevice.battery}%</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="bg-cosmic-blue/30 p-4 rounded-lg border border-white/10">
                  <h3 className="font-orbitron text-base text-white mb-4">Software</h3>
                  
                  <div className="space-y-3">
                    <div className="grid grid-cols-2">
                      <span className="text-sm text-white/70">Firmware:</span>
                      <span className="text-sm text-white">{selectedDevice.firmware}</span>
                    </div>
                    <div className="grid grid-cols-2">
                      <span className="text-sm text-white/70">Last Updated:</span>
                      <span className="text-sm text-white">{selectedDevice.lastUpdated}</span>
                    </div>
                    <div className="grid grid-cols-2">
                      <span className="text-sm text-white/70">Status:</span>
                      <span className={cn(
                        "text-sm flex items-center",
                        selectedDevice.status === 'online' && "text-cosmic-teal",
                        selectedDevice.status === 'offline' && "text-red-500",
                        selectedDevice.status === 'warning' && "text-cosmic-amber",
                        selectedDevice.status === 'updating' && "text-blue-400"
                      )}>
                        <div className={cn(
                          "w-2 h-2 rounded-full mr-2",
                          selectedDevice.status === 'online' && "bg-cosmic-teal",
                          selectedDevice.status === 'offline' && "bg-red-500",
                          selectedDevice.status === 'warning' && "bg-cosmic-amber",
                          selectedDevice.status === 'updating' && "bg-blue-400 animate-pulse"
                        )}></div>
                        {selectedDevice.status === 'updating' ? 'Updating...' : selectedDevice.status.charAt(0).toUpperCase() + selectedDevice.status.slice(1)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-5">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-cosmic-blue/20 border-white/10 hover:bg-cosmic-blue/40 w-full"
                      onClick={() => handleUpdate(selectedDevice.id)}
                      disabled={selectedDevice.status === 'updating' || selectedDevice.status === 'offline'}
                    >
                      {selectedDevice.status === 'updating' ? (
                        <>
                          <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                          Updating...
                        </>
                      ) : (
                        <>
                          <RefreshCw className="mr-2 h-4 w-4" />
                          Check for Updates
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-cosmic-blue/30 p-4 rounded-lg border border-white/10">
                  <h3 className="font-orbitron text-base text-white mb-4">Activity Log</h3>
                  
                  <div className="space-y-4 max-h-72 overflow-y-auto pr-2">
                    <div className="bg-cosmic-blue/40 p-3 rounded-md border border-white/5">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-cosmic-teal">2025-05-16 09:23:14</span>
                        <span className="text-xs text-white/50">System</span>
                      </div>
                      <p className="text-sm text-white">Device status check completed successfully</p>
                    </div>
                    
                    <div className="bg-cosmic-blue/40 p-3 rounded-md border border-white/5">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-cosmic-teal">2025-05-15 18:42:07</span>
                        <span className="text-xs text-white/50">User Action</span>
                      </div>
                      <p className="text-sm text-white">Device settings modified by user</p>
                    </div>
                    
                    <div className="bg-cosmic-blue/40 p-3 rounded-md border border-white/5">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-cosmic-teal">2025-05-15 12:15:33</span>
                        <span className="text-xs text-white/50">System</span>
                      </div>
                      <p className="text-sm text-white">Connection quality check performed</p>
                    </div>
                    
                    <div className="bg-cosmic-blue/40 p-3 rounded-md border border-white/5">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-cosmic-teal">2025-05-14 20:37:51</span>
                        <span className="text-xs text-white/50">System</span>
                      </div>
                      <p className="text-sm text-white">Automated diagnostic check completed</p>
                    </div>
                    
                    <div className="bg-cosmic-blue/40 p-3 rounded-md border border-white/5">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-cosmic-amber">2025-05-13 14:22:09</span>
                        <span className="text-xs text-white/50">Warning</span>
                      </div>
                      <p className="text-sm text-white">Signal strength dropped below 70% temporarily</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-cosmic-blue/30 p-4 rounded-lg border border-white/10">
                  <h3 className="font-orbitron text-base text-white mb-4">Advanced Settings</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm text-white/70 mb-1">Device Name</label>
                      <input 
                        type="text" 
                        className="w-full bg-cosmic-blue/40 border border-white/10 rounded-md p-2 text-white"
                        defaultValue={selectedDevice.name}
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-white/70 mb-1">Location</label>
                      <input 
                        type="text" 
                        className="w-full bg-cosmic-blue/40 border border-white/10 rounded-md p-2 text-white"
                        defaultValue={selectedDevice.location}
                      />
                    </div>
                  </div>
                  
                  <div className="mb-5">
                    <label className="block text-sm text-white/70 mb-1">Notes</label>
                    <textarea 
                      className="w-full bg-cosmic-blue/40 border border-white/10 rounded-md p-2 text-white h-24 resize-none"
                      defaultValue={selectedDevice.notes || ''}
                      placeholder="Add your notes about this device..."
                    ></textarea>
                  </div>
                  
                  <div className="flex justify-between">
                    <Button
                      variant="outline"
                      className="bg-red-500/10 text-red-400 border-red-500/30 hover:bg-red-500/20"
                    >
                      Remove Device
                    </Button>
                    
                    <div className="space-x-2">
                      <Button
                        variant="outline"
                        className="bg-cosmic-blue/20 border-white/10 hover:bg-cosmic-blue/40"
                        onClick={() => setSelectedDevice(null)}
                      >
                        Cancel
                      </Button>
                      <Button
                        className="bg-cosmic-teal text-black hover:bg-cosmic-teal/80"
                      >
                        Save Changes
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ModuleCard>
        )}
      </div>
    </DashboardLayout>
  );
};

export default DeviceManager;
