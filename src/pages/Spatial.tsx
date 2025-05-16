
import { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Map, Plus, Lightbulb, Thermometer, Lock, Wifi, Eye } from 'lucide-react';

const Spatial = () => {
  const [viewMode, setViewMode] = useState<'2d' | '3d'>('2d');
  const [selectedFloor, setSelectedFloor] = useState('main');
  
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-orbitron text-gradient-teal">Spatial Map</h1>
            <p className="text-white">Interactive 3D visualization of your smart home</p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex rounded-lg overflow-hidden border border-cosmic-teal/30">
              <button 
                className={`px-4 py-2 text-white ${viewMode === '2d' ? 'bg-cosmic-teal' : 'bg-cosmic-blue/30'}`}
                onClick={() => setViewMode('2d')}
              >
                2D View
              </button>
              <button 
                className={`px-4 py-2 text-white ${viewMode === '3d' ? 'bg-cosmic-teal' : 'bg-cosmic-blue/30'}`}
                onClick={() => setViewMode('3d')}
              >
                3D View
              </button>
            </div>
            
            <Select value={selectedFloor} onValueChange={setSelectedFloor}>
              <SelectTrigger className="w-[150px] bg-cosmic-blue/30 border-cosmic-teal/20 text-white">
                <SelectValue placeholder="Select Floor" />
              </SelectTrigger>
              <SelectContent className="bg-cosmic-blue border border-cosmic-teal/20">
                <SelectItem value="main" className="text-white">Main Floor</SelectItem>
                <SelectItem value="upper" className="text-white">Upper Floor</SelectItem>
                <SelectItem value="basement" className="text-white">Basement</SelectItem>
              </SelectContent>
            </Select>
            
            <Button className="bg-cosmic-teal hover:bg-cosmic-teal/80 text-black">
              <Plus size={16} className="mr-2 text-black" /> Add Device
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          <div className="lg:col-span-4">
            <Card className="bg-cosmic-blue/30 border border-cosmic-teal/20 backdrop-blur-md overflow-hidden">
              <CardHeader className="border-b border-white/10">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-white">{viewMode === '2d' ? '2D Floor Plan' : '3D Spatial View'}</CardTitle>
                  <div className="flex gap-2">
                    <Badge className="bg-cosmic-teal text-white">Main Floor</Badge>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-white">
                      <Map size={16} className="text-white" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0 relative">
                <div className="w-full h-[600px] bg-cosmic-blue/40 relative">
                  {/* This would be the actual floor plan / 3D view in a real implementation */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Map size={64} className="mx-auto mb-4 opacity-30 text-white" />
                      <p>Interactive {viewMode === '2d' ? '2D' : '3D'} floor plan would render here</p>
                      <p className="text-sm mt-2">Complete with device positioning and status indicators</p>
                    </div>
                  </div>
                  
                  {/* Example device indicators that would overlay on the actual floor plan */}
                  <div className="absolute top-[20%] left-[30%] w-4 h-4 teal-glow rounded-full bg-cosmic-teal" title="Living Room Light"></div>
                  <div className="absolute top-[40%] left-[60%] w-4 h-4 teal-glow rounded-full bg-cosmic-teal" title="Kitchen Hub"></div>
                  <div className="absolute top-[70%] left-[40%] w-4 h-4 teal-glow rounded-full bg-cosmic-teal animate-pulse" title="Front Door Lock"></div>
                  <div className="absolute top-[25%] left-[70%] w-4 h-4 amber-glow rounded-full bg-cosmic-amber" title="Thermostat"></div>
                  <div className="absolute top-[60%] left-[20%] w-4 h-4 teal-glow rounded-full bg-cosmic-teal" title="Window Sensor"></div>
                </div>
                
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <Button variant="outline" size="sm" className="bg-black/30 border-white/20 backdrop-blur-md text-white">
                    Zoom In
                  </Button>
                  <Button variant="outline" size="sm" className="bg-black/30 border-white/20 backdrop-blur-md text-white">
                    Zoom Out
                  </Button>
                  <Button variant="outline" size="sm" className="bg-black/30 border-white/20 backdrop-blur-md text-white">
                    Reset View
                  </Button>
                </div>
                
                <div className="absolute bottom-4 left-4 p-3 bg-black/30 border border-white/20 rounded-lg backdrop-blur-md">
                  <div className="flex flex-wrap gap-3 text-xs text-white">
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-cosmic-teal"></div>
                      <span>Active Devices</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-cosmic-amber"></div>
                      <span>Alerts</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-white/30"></div>
                      <span>Inactive</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-cosmic-teal animate-pulse"></div>
                      <span>In Use</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-2">
            <Tabs defaultValue="devices" className="w-full">
              <TabsList className="bg-cosmic-blue/30 border border-cosmic-teal/20 w-full">
                <TabsTrigger value="devices" className="flex-1 text-white">Devices</TabsTrigger>
                <TabsTrigger value="zones" className="flex-1 text-white">Zones</TabsTrigger>
                <TabsTrigger value="paths" className="flex-1 text-white">Paths</TabsTrigger>
              </TabsList>
              
              <TabsContent value="devices" className="mt-4 space-y-4">
                <div className="space-y-1">
                  <p className="text-sm text-white ml-1">Filter by Type</p>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" className="bg-cosmic-teal/10 border-cosmic-teal/30 text-cosmic-teal">
                      <Lightbulb size={14} className="mr-1 text-cosmic-teal" /> Lighting
                    </Button>
                    <Button variant="outline" size="sm" className="bg-transparent border-white/20 text-white">
                      <Thermometer size={14} className="mr-1 text-white" /> Climate
                    </Button>
                    <Button variant="outline" size="sm" className="bg-transparent border-white/20 text-white">
                      <Lock size={14} className="mr-1 text-white" /> Security
                    </Button>
                    <Button variant="outline" size="sm" className="bg-transparent border-white/20 text-white">
                      <Wifi size={14} className="mr-1 text-white" /> Network
                    </Button>
                  </div>
                </div>

                <div className="space-y-2 overflow-y-auto max-h-[420px]">
                  {[
                    { name: 'Living Room Lights', location: 'Living Room', type: 'lighting', status: 'on' },
                    { name: 'Kitchen Pendant', location: 'Kitchen', type: 'lighting', status: 'off' },
                    { name: 'Smart Thermostat', location: 'Hallway', type: 'climate', status: 'alert' },
                    { name: 'Front Door Lock', location: 'Entrance', type: 'security', status: 'locked' },
                    { name: 'Motion Sensor', location: 'Living Room', type: 'security', status: 'active' },
                    { name: 'TV Backlight', location: 'Living Room', type: 'lighting', status: 'on' },
                    { name: 'Window Sensor', location: 'Kitchen', type: 'security', status: 'closed' },
                    { name: 'Mesh Node', location: 'Office', type: 'network', status: 'online' },
                  ].map((device, i) => (
                    <Card key={i} className="bg-cosmic-blue/20 border border-white/10 hover:border-cosmic-teal/20 transition-colors">
                      <CardContent className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${
                            device.status === 'on' || device.status === 'active' || device.status === 'online' || device.status === 'locked' ? 'bg-cosmic-teal' : 
                            device.status === 'alert' ? 'bg-cosmic-amber' : 'bg-white/30'
                          }`}></div>
                          <div>
                            <p className="font-medium text-white">{device.name}</p>
                            <p className="text-xs text-white/60">{device.location}</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon" className="h-7 w-7">
                          <Eye size={14} />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="zones" className="mt-4 space-y-4">
                <div className="space-y-2">
                  <Card className="bg-cosmic-blue/20 border border-cosmic-teal/30">
                    <CardContent className="p-4">
                      <h3 className="font-medium text-white">Living Area</h3>
                      <p className="text-xs text-white/60 mb-2">6 devices • 450 sq ft</p>
                      <div className="flex flex-wrap gap-1 text-xs">
                        <Badge className="bg-cosmic-teal/10 text-cosmic-teal">Entertainment</Badge>
                        <Badge className="bg-cosmic-teal/10 text-cosmic-teal">Lighting</Badge>
                        <Badge className="bg-cosmic-teal/10 text-cosmic-teal">Climate</Badge>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-cosmic-blue/20 border border-white/10">
                    <CardContent className="p-4">
                      <h3 className="font-medium text-white">Kitchen</h3>
                      <p className="text-xs text-white/60 mb-2">4 devices • 280 sq ft</p>
                      <div className="flex flex-wrap gap-1 text-xs">
                        <Badge className="bg-cosmic-teal/10 text-cosmic-teal">Lighting</Badge>
                        <Badge className="bg-cosmic-teal/10 text-cosmic-teal">Appliances</Badge>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-cosmic-blue/20 border border-white/10">
                    <CardContent className="p-4">
                      <h3 className="font-medium text-white">Master Bedroom</h3>
                      <p className="text-xs text-white/60 mb-2">5 devices • 320 sq ft</p>
                      <div className="flex flex-wrap gap-1 text-xs">
                        <Badge className="bg-cosmic-teal/10 text-cosmic-teal">Lighting</Badge>
                        <Badge className="bg-cosmic-teal/10 text-cosmic-teal">Climate</Badge>
                        <Badge className="bg-cosmic-teal/10 text-cosmic-teal">Privacy</Badge>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-cosmic-blue/20 border border-white/10">
                    <CardContent className="p-4">
                      <h3 className="font-medium text-white">Home Office</h3>
                      <p className="text-xs text-white/60 mb-2">3 devices • 180 sq ft</p>
                      <div className="flex flex-wrap gap-1 text-xs">
                        <Badge className="bg-cosmic-teal/10 text-cosmic-teal">Productivity</Badge>
                        <Badge className="bg-cosmic-teal/10 text-cosmic-teal">Lighting</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="paths" className="mt-4 h-[500px] flex items-center justify-center p-6">
                <div className="text-center text-white">
                  <p>Movement paths and activity heatmaps would display here</p>
                  <p className="text-sm mt-2">Showing how residents move through the home</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-cosmic-blue/30 border border-cosmic-teal/20 backdrop-blur-md">
            <CardContent className="p-4 flex justify-between">
              <div>
                <p className="text-sm text-white">Total Mapped Area</p>
                <p className="text-2xl font-medium text-white">2,450 sq ft</p>
                <p className="text-xs text-cosmic-teal">3 floors • 12 rooms</p>
              </div>
              <div className="w-12 h-12 bg-cosmic-teal/10 rounded-full flex items-center justify-center">
                <Map size={20} className="text-cosmic-teal" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-cosmic-blue/30 border border-cosmic-teal/20 backdrop-blur-md">
            <CardContent className="p-4 flex justify-between">
              <div>
                <p className="text-sm text-white">Mapped Devices</p>
                <p className="text-2xl font-medium text-white">37 / 42</p>
                <p className="text-xs text-cosmic-teal">5 unmapped devices</p>
              </div>
              <div className="w-12 h-12 bg-cosmic-teal/10 rounded-full flex items-center justify-center">
                <Wifi size={20} className="text-cosmic-teal" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-cosmic-blue/30 border border-cosmic-teal/20 backdrop-blur-md">
            <CardContent className="p-4 flex justify-between">
              <div>
                <p className="text-sm text-white">Coverage Quality</p>
                <p className="text-2xl font-medium text-white">92%</p>
                <p className="text-xs text-cosmic-teal">Excellent coverage</p>
              </div>
              <div className="w-12 h-12 bg-cosmic-teal/10 rounded-full flex items-center justify-center">
                <Wifi size={20} className="text-cosmic-teal" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-cosmic-blue/30 border border-cosmic-teal/20 backdrop-blur-md">
            <CardContent className="p-4 flex justify-between">
              <div>
                <p className="text-sm text-white">3D Model Status</p>
                <p className="text-2xl font-medium text-white">Up to Date</p>
                <p className="text-xs text-cosmic-teal">Last updated 2 days ago</p>
              </div>
              <div className="w-12 h-12 bg-cosmic-teal/10 rounded-full flex items-center justify-center">
                <Map size={20} className="text-cosmic-teal" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Spatial;
