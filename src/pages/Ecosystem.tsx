
import { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Hexagon, Plus, RefreshCw, Check, X, Info, AlertCircle } from 'lucide-react';

const Ecosystem = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'connections'>('grid');
  
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-orbitron text-gradient-teal">Smart Ecosystem</h1>
            <p className="text-white">Manage your connected devices and integrations</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex rounded-lg overflow-hidden border border-cosmic-teal/30">
              <button 
                className={`px-4 py-2 text-white ${viewMode === 'grid' ? 'bg-cosmic-teal' : 'bg-cosmic-blue/30'}`}
                onClick={() => setViewMode('grid')}
              >
                Devices
              </button>
              <button 
                className={`px-4 py-2 text-white ${viewMode === 'connections' ? 'bg-cosmic-teal' : 'bg-cosmic-blue/30'}`}
                onClick={() => setViewMode('connections')}
              >
                Connections
              </button>
            </div>
            <Button className="bg-cosmic-teal hover:bg-cosmic-teal/80 text-black font-medium">
              <Plus size={18} className="mr-2 text-black" /> Add Device
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <Card className="bg-cosmic-blue/30 border border-cosmic-teal/40 backdrop-blur-md overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cosmic-teal to-transparent"></div>
            <CardHeader>
              <div className="flex justify-between">
                <Badge className="bg-cosmic-teal text-white">Connected</Badge>
                <span className="text-xs text-white/60">v3.2.1</span>
              </div>
              <CardTitle className="flex items-center gap-2 text-white">
                <div className="w-8 h-8 bg-cosmic-teal/20 flex items-center justify-center rounded-md">
                  <Hexagon size={20} className="text-cosmic-teal" />
                </div>
                HomeNode Hub
              </CardTitle>
              <CardDescription>Central Hub • Main Floor</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs mb-1 text-white">
                    <span>System Health</span>
                    <span>Excellent</span>
                  </div>
                  <Progress value={92} className="h-1.5 bg-white/10" indicatorClassName="bg-cosmic-teal" />
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex flex-col gap-1">
                    <span className="text-white/60">Connected Devices</span>
                    <span className="font-medium text-white">34 / 50</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-white/60">Uptime</span>
                    <span className="font-medium text-white">43 days</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-white/60">Protocols</span>
                    <span className="font-medium text-white">Z-Wave, Zigbee, BLE</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-white/60">Signal Strength</span>
                    <span className="font-medium text-white">Excellent</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t border-white/10 flex justify-between pt-3">
              <Button variant="ghost" size="sm" className="text-cosmic-teal hover:text-cosmic-teal/80 hover:bg-cosmic-teal/10">
                <RefreshCw size={14} className="mr-1.5" />
                Restart
              </Button>
              <Button variant="ghost" size="sm">
                Configure
              </Button>
            </CardFooter>
          </Card>
          
          {['DoorSense Pro', 'Quantum Light Strip', 'EcoThermostat', 'Motion Eye', 'PresenceSensor'].map((device, index) => (
            <Card 
              key={index} 
              className="bg-cosmic-blue/30 border border-white/10 backdrop-blur-md overflow-hidden hover:border-cosmic-teal/20 transition-colors"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Badge className={index === 3 ? "bg-cosmic-amber text-white" : "bg-cosmic-teal/80 text-white"}>
                    {index === 3 ? "Low Battery" : "Connected"}
                  </Badge>
                  <span className="text-xs text-white/60">v2.0.{Math.floor(Math.random() * 9) + 1}</span>
                </div>
                <CardTitle className="text-base text-white">{device}</CardTitle>
                <CardDescription>{["Living Room", "Bedroom", "Kitchen", "Front Door", "Hallway"][index]}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex flex-col gap-1">
                    <span className="text-white/60">Type</span>
                    <span className="font-medium text-white">{["Sensor", "Lighting", "Climate", "Security", "Sensor"][index]}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-white/60">Battery</span>
                    <span className="font-medium text-white">{index === 3 ? "18%" : "92%"}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-white/60">Protocol</span>
                    <span className="font-medium text-white">{["Z-Wave", "Zigbee", "Wi-Fi", "Bluetooth", "Z-Wave"][index]}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-white/60">Signal</span>
                    <span className="font-medium text-white">{index === 4 ? "Fair" : "Good"}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t border-white/10 flex justify-between pt-3">
                <Button variant="ghost" size="sm">
                  Details
                </Button>
                <Button variant="ghost" size="sm">
                  Configure
                </Button>
              </CardFooter>
            </Card>
          ))}

          <Card className="border border-dashed border-white/20 bg-white/5 flex flex-col items-center justify-center p-6 text-center hover:border-cosmic-teal/30 transition-colors cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-cosmic-teal/10 flex items-center justify-center mb-3">
              <Plus size={24} className="text-cosmic-teal" />
            </div>
            <h3 className="text-lg font-medium text-white">Add New Device</h3>
            <p className="text-white/60 text-sm mt-1">Connect a new smart device to your ecosystem</p>
          </Card>
        </div>
        
        <div className="mt-8">
          <h2 className="text-2xl font-orbitron mb-4 text-gradient-teal">Integration Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {[
              { name: "Cloud Sync", status: "Connected", icon: <Check size={16} className="text-cosmic-teal" /> },
              { name: "Voice Control", status: "Connected", icon: <Check size={16} className="text-cosmic-teal" /> },
              { name: "Weather Services", status: "Connected", icon: <Check size={16} className="text-cosmic-teal" /> },
              { name: "Security API", status: "Connected", icon: <Check size={16} className="text-cosmic-teal" /> },
              { name: "Smart Lighting API", status: "Issue", icon: <AlertCircle size={16} className="text-cosmic-amber" /> },
              { name: "Energy Provider", status: "Not Connected", icon: <X size={16} className="text-white" /> },
              { name: "Media Services", status: "Connected", icon: <Check size={16} className="text-cosmic-teal" /> },
              { name: "Calendar Integration", status: "Connected", icon: <Check size={16} className="text-cosmic-teal" /> },
            ].map((integration, i) => (
              <div key={i} className="flex items-center justify-between p-3 border border-white/10 rounded-lg bg-cosmic-blue/20 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center">
                    <Info size={16} className="text-white" />
                  </div>
                  <span className="text-white">{integration.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-white">{integration.status}</span>
                  <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                    {integration.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Ecosystem;
