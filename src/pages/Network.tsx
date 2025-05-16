
import { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Gitlab, Wifi, AlertCircle, CheckCircle2, RefreshCw, Activity, Zap } from 'lucide-react';

const Network = () => {
  const [scanningNetwork, setScanningNetwork] = useState(false);
  
  const startNetworkScan = () => {
    setScanningNetwork(true);
    setTimeout(() => setScanningNetwork(false), 3000);
  };
  
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-orbitron text-gradient-teal">Network Mesh</h1>
            <p className="text-sm md:text-base text-white/70">Monitor and optimize your smart home network</p>
          </div>
          <div className="flex flex-col xs:flex-row w-full md:w-auto items-stretch xs:items-center gap-3">
            <Button 
              variant="outline" 
              className="border-cosmic-teal/20 w-full xs:w-auto"
              disabled={scanningNetwork}
              onClick={startNetworkScan}
            >
              <RefreshCw size={16} className={`mr-2 text-cosmic-teal ${scanningNetwork ? 'animate-spin' : ''}`} />
              <span className="text-black">{scanningNetwork ? 'Scanning...' : 'Scan Network'}</span>
            </Button>
            <Button className="bg-cosmic-teal hover:bg-cosmic-teal/80 w-full xs:w-auto">
              <span className="text-black">Network Health Report</span>
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <Card className="bg-cosmic-blue/30 backdrop-blur-md border border-cosmic-teal/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-cosmic-teal via-cosmic-teal/50 to-transparent"></div>
            <CardHeader className="pb-2 md:pb-4">
              <CardTitle className="flex items-center gap-2 text-white text-base md:text-lg">
                <Wifi size={18} className="text-cosmic-teal" /> Main Network
              </CardTitle>
              <CardDescription className="text-xs md:text-sm">Primary WiFi network</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 md:space-y-4 pt-0">
              <div className="flex justify-between items-center">
                <span className="text-xs md:text-sm text-white">Connection Status</span>
                <Badge className="bg-cosmic-teal text-white text-xs">Online</Badge>
              </div>
              
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-white">
                  <span>Signal Strength</span>
                  <span>Excellent</span>
                </div>
                <Progress value={96} className="h-1.5" indicatorClassName="bg-cosmic-teal" />
              </div>
              
              <div className="grid grid-cols-2 gap-2 md:gap-4 text-xs md:text-sm">
                <div>
                  <div className="text-white/60 text-xs">SSID</div>
                  <div className="font-medium text-white">HomeSphere_Main</div>
                </div>
                <div>
                  <div className="text-white/60 text-xs">Security</div>
                  <div className="font-medium text-white">WPA3</div>
                </div>
                <div>
                  <div className="text-white/60 text-xs">Band</div>
                  <div className="font-medium text-white">5GHz</div>
                </div>
                <div>
                  <div className="text-white/60 text-xs">Channel</div>
                  <div className="font-medium text-white">36 (Auto)</div>
                </div>
                <div>
                  <div className="text-white/60 text-xs">IP Address</div>
                  <div className="font-medium text-white">192.168.1.1</div>
                </div>
                <div>
                  <div className="text-white/60 text-xs">MAC Address</div>
                  <div className="font-medium text-white">A4:C3:...:F8</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-cosmic-blue/30 backdrop-blur-md border border-cosmic-teal/20">
            <CardHeader className="pb-2 md:pb-4">
              <CardTitle className="flex items-center gap-2 text-white text-base md:text-lg">
                <Gitlab size={18} className="text-cosmic-teal" /> Mesh Performance
              </CardTitle>
              <CardDescription className="text-xs md:text-sm">Coverage and connectivity</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 md:space-y-4 pt-0">
              <div className="flex flex-col xs:flex-row justify-between gap-2">
                <div className="text-center p-2 md:p-3 bg-white/5 rounded-lg flex-1">
                  <div className="text-xs text-white/60">Connected Devices</div>
                  <div className="text-lg md:text-2xl font-medium text-white">24</div>
                </div>
                <div className="text-center p-2 md:p-3 bg-white/5 rounded-lg flex-1">
                  <div className="text-xs text-white/60">Network Load</div>
                  <div className="text-lg md:text-2xl font-medium text-white">38%</div>
                </div>
                <div className="text-center p-2 md:p-3 bg-white/5 rounded-lg flex-1">
                  <div className="text-xs text-white/60">Avg. Latency</div>
                  <div className="text-lg md:text-2xl font-medium text-white">8ms</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-white">
                    <span>Download Speed</span>
                    <span>482 Mbps</span>
                  </div>
                  <Progress value={85} className="h-1.5" indicatorClassName="bg-cosmic-teal" />
                </div>
                
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-white">
                    <span>Upload Speed</span>
                    <span>125 Mbps</span>
                  </div>
                  <Progress value={65} className="h-1.5" indicatorClassName="bg-cosmic-teal" />
                </div>
                
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-white">
                    <span>Coverage Quality</span>
                    <span>92%</span>
                  </div>
                  <Progress value={92} className="h-1.5" indicatorClassName="bg-cosmic-teal" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-cosmic-blue/30 backdrop-blur-md border border-cosmic-teal/20">
            <CardHeader className="pb-2 md:pb-4">
              <CardTitle className="flex items-center gap-2 text-white text-base md:text-lg">
                <Activity size={18} className="text-cosmic-teal" /> Network Activity
              </CardTitle>
              <CardDescription className="text-xs md:text-sm">Current data transfer</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 md:space-y-4 pt-0">
              <div className="relative h-24 md:h-32 w-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-white">5.2</div>
                    <div className="text-xs md:text-sm text-white/60">GB Today</div>
                  </div>
                </div>
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="transparent" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="45" 
                    fill="transparent" 
                    stroke="rgba(0,229,229,0.8)" 
                    strokeWidth="8" 
                    strokeLinecap="round"
                    strokeDasharray="282.74"
                    strokeDashoffset="70.7"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
              </div>
              
              <div className="space-y-2 mt-2 md:mt-6">
                <div className="flex items-center justify-between p-2 md:p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-cosmic-teal mr-2"></div>
                    <span className="text-xs md:text-sm text-white">Media Streaming</span>
                  </div>
                  <span className="text-xs md:text-sm text-white">2.8 GB</span>
                </div>
                
                <div className="flex items-center justify-between p-2 md:p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-cosmic-amber mr-2"></div>
                    <span className="text-xs md:text-sm text-white">Security Cameras</span>
                  </div>
                  <span className="text-xs md:text-sm text-white">1.5 GB</span>
                </div>
                
                <div className="flex items-center justify-between p-2 md:p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-white/50 mr-2"></div>
                    <span className="text-xs md:text-sm text-white">Other Devices</span>
                  </div>
                  <span className="text-xs md:text-sm text-white">0.9 GB</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="devices" className="w-full">
          <TabsList className="bg-cosmic-blue/30 border border-cosmic-teal/20 overflow-x-auto flex-nowrap w-full md:w-auto">
            <TabsTrigger value="devices" className="text-xs md:text-sm text-white whitespace-nowrap">Connected Devices</TabsTrigger>
            <TabsTrigger value="mesh" className="text-xs md:text-sm text-white whitespace-nowrap">Mesh Nodes</TabsTrigger>
            <TabsTrigger value="security" className="text-xs md:text-sm text-white whitespace-nowrap">Security</TabsTrigger>
            <TabsTrigger value="optimization" className="text-xs md:text-sm text-white whitespace-nowrap">Optimization</TabsTrigger>
          </TabsList>
          
          <TabsContent value="devices" className="mt-4">
            <Card className="bg-cosmic-blue/30 backdrop-blur-md border border-cosmic-teal/20">
              <CardHeader>
                <div className="flex flex-col xs:flex-row justify-between items-start xs:items-center gap-2">
                  <CardTitle className="text-lg md:text-xl text-white">Connected Devices</CardTitle>
                  <Badge className="bg-cosmic-teal/20 text-cosmic-teal text-xs whitespace-nowrap">24 Online</Badge>
                </div>
                <CardDescription className="text-xs md:text-sm">All devices currently connected to your network</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    { name: 'HomeSphere Hub', type: 'Hub', ip: '192.168.1.10', status: 'optimal', bandwidth: 'Low', connected: '43 days' },
                    { name: 'Living Room TV', type: 'Media', ip: '192.168.1.15', status: 'optimal', bandwidth: 'High', connected: '12 days' },
                    { name: 'Security Camera', type: 'Security', ip: '192.168.1.25', status: 'optimal', bandwidth: 'Medium', connected: '30 days' },
                    { name: 'Smart Thermostat', type: 'Climate', ip: '192.168.1.18', status: 'warning', bandwidth: 'Low', connected: '21 days' },
                    { name: 'Emily\'s Laptop', type: 'Computer', ip: '192.168.1.35', status: 'optimal', bandwidth: 'Medium', connected: '2 hours' },
                  ].map((device, index) => (
                    <div 
                      key={index} 
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-2 sm:p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <div className="flex items-center">
                        <div className={`w-2 h-2 rounded-full mr-3 ${device.status === 'optimal' ? 'bg-cosmic-teal' : 'bg-cosmic-amber'}`}></div>
                        <div>
                          <div className="font-medium text-white text-sm md:text-base">{device.name}</div>
                          <div className="text-xs text-white/60">{device.type} • {device.ip}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 md:gap-4 mt-2 sm:mt-0 justify-between sm:justify-start">
                        <div className="text-xs">
                          <div className="text-white/60">Bandwidth</div>
                          <div className="text-white">{device.bandwidth}</div>
                        </div>
                        <div className="text-xs">
                          <div className="text-white/60">Connected</div>
                          <div className="text-white">{device.connected}</div>
                        </div>
                        <Button variant="ghost" size="sm" className="ml-0 md:ml-2 text-cosmic-amber hover:text-cosmic-amber/80 hover:bg-cosmic-amber/10 text-xs">Details</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="border-t border-white/10 flex justify-center pt-4">
                <Button variant="outline" className="border-cosmic-teal/20 bg-cosmic-blue/40 text-xs md:text-sm w-full sm:w-auto">
                  <span className="text-white">View All 24 Devices</span>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="mesh" className="mt-4">
            <Card className="bg-cosmic-blue/30 backdrop-blur-md border border-cosmic-teal/20">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl text-white">Mesh Network Nodes</CardTitle>
                <CardDescription className="text-xs md:text-sm">Your connected mesh network devices</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  <div className="p-3 md:p-4 bg-white/5 rounded-lg border border-cosmic-teal/30">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-medium text-white text-sm md:text-base">Main Router</h3>
                        <p className="text-xs text-white/60">Gateway Node</p>
                      </div>
                      <Badge className="bg-cosmic-teal text-white text-xs whitespace-nowrap">Primary</Badge>
                    </div>
                    <div className="space-y-3 mt-4">
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs text-white">
                          <span>Signal Quality</span>
                          <span>100%</span>
                        </div>
                        <Progress value={100} className="h-1" indicatorClassName="bg-cosmic-teal" />
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs text-white">
                        <div>
                          <span className="text-white/60">Location</span>
                          <p>Living Room</p>
                        </div>
                        <div>
                          <span className="text-white/60">Connections</span>
                          <p>15 devices</p>
                        </div>
                        <div>
                          <span className="text-white/60">Firmware</span>
                          <p>v3.2.1</p>
                        </div>
                        <div>
                          <span className="text-white/60">Last Updated</span>
                          <p>2 weeks ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-3 md:p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-medium text-white text-sm md:text-base">Mesh Node 1</h3>
                        <p className="text-xs text-white/60">Extender Node</p>
                      </div>
                      <Badge className="bg-white/20 text-white text-xs whitespace-nowrap">Connected</Badge>
                    </div>
                    <div className="space-y-3 mt-4">
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs text-white">
                          <span>Signal Quality</span>
                          <span>92%</span>
                        </div>
                        <Progress value={92} className="h-1" indicatorClassName="bg-cosmic-teal" />
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs text-white">
                        <div>
                          <span className="text-white/60">Location</span>
                          <p>Upstairs Hall</p>
                        </div>
                        <div>
                          <span className="text-white/60">Connections</span>
                          <p>7 devices</p>
                        </div>
                        <div>
                          <span className="text-white/60">Firmware</span>
                          <p>v3.2.1</p>
                        </div>
                        <div>
                          <span className="text-white/60">Last Updated</span>
                          <p>2 weeks ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-3 md:p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-medium text-white text-sm md:text-base">Mesh Node 2</h3>
                        <p className="text-xs text-white/60">Extender Node</p>
                      </div>
                      <Badge className="bg-white/20 text-white text-xs whitespace-nowrap">Connected</Badge>
                    </div>
                    <div className="space-y-3 mt-4">
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs text-white">
                          <span>Signal Quality</span>
                          <span>86%</span>
                        </div>
                        <Progress value={86} className="h-1" indicatorClassName="bg-cosmic-teal" />
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs text-white">
                        <div>
                          <span className="text-white/60">Location</span>
                          <p>Basement</p>
                        </div>
                        <div>
                          <span className="text-white/60">Connections</span>
                          <p>2 devices</p>
                        </div>
                        <div>
                          <span className="text-white/60">Firmware</span>
                          <p>v3.1.9</p>
                        </div>
                        <div>
                          <span className="text-white/60">Last Updated</span>
                          <p>1 month ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col items-center justify-center p-4 md:p-8 border border-dashed border-cosmic-teal/20 rounded-lg">
                  <Zap size={32} className="text-cosmic-teal/40 mb-4" />
                  <h3 className="text-base md:text-lg font-medium text-white mb-1">Add Mesh Node</h3>
                  <p className="text-xs md:text-sm text-white/60 text-center max-w-xs mb-4">Extend your network coverage by adding another mesh node to your network</p>
                  <Button className="bg-cosmic-teal hover:bg-cosmic-teal/80 text-black text-xs md:text-sm w-full xs:w-auto">Add New Node</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="security">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-4">
              <Card className="bg-cosmic-blue/30 backdrop-blur-md border border-cosmic-teal/20">
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl text-white">Network Protection</CardTitle>
                  <CardDescription className="text-xs md:text-sm">Security features and status</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 md:space-y-4">
                    {[
                      { feature: 'Firewall Protection', status: 'Active', icon: <CheckCircle2 size={16} className="text-cosmic-teal" /> },
                      { feature: 'Intrusion Detection', status: 'Active', icon: <CheckCircle2 size={16} className="text-cosmic-teal" /> },
                      { feature: 'Device Authentication', status: 'Active', icon: <CheckCircle2 size={16} className="text-cosmic-teal" /> },
                      { feature: 'DNS Protection', status: 'Update Available', icon: <AlertCircle size={16} className="text-cosmic-amber" /> },
                      { feature: 'Content Filtering', status: 'Configured', icon: <CheckCircle2 size={16} className="text-cosmic-teal" /> },
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center p-2 md:p-3 bg-white/5 rounded-lg">
                        <span className="text-xs md:text-sm text-white">{item.feature}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs md:text-sm text-white">{item.status}</span>
                          {item.icon}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-cosmic-blue/30 backdrop-blur-md border border-cosmic-teal/20">
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl text-white">Threat Detection</CardTitle>
                  <CardDescription className="text-xs md:text-sm">Security events and monitoring</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 md:mb-6">
                    <div className="text-center p-4 md:p-6 bg-white/5 rounded-lg">
                      <CheckCircle2 size={32} className="mx-auto text-cosmic-teal mb-2" />
                      <h3 className="text-base md:text-lg font-medium text-white mb-1">Network Secure</h3>
                      <p className="text-xs md:text-sm text-white/70">No threats detected in the last 7 days</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-xs md:text-sm font-medium text-white mb-2">Protection Summary</h4>
                    <div className="grid grid-cols-2 gap-3 text-center">
                      <div className="p-2 md:p-3 bg-white/5 rounded-lg">
                        <div className="text-lg md:text-2xl font-medium text-white">32</div>
                        <div className="text-xs text-white/60">Threats Blocked</div>
                      </div>
                      <div className="p-2 md:p-3 bg-white/5 rounded-lg">
                        <div className="text-lg md:text-2xl font-medium text-white">18</div>
                        <div className="text-xs text-white/60">Unsafe Sites</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-white/10 flex justify-end pt-4">
                  <Button variant="outline" className="border-cosmic-teal/20 text-xs md:text-sm w-full xs:w-auto">
                    <span className="text-white">Security Report</span>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="optimization">
            <Card className="bg-cosmic-blue/30 backdrop-blur-md border border-cosmic-teal/20 mt-4">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl text-white">Network Optimization</CardTitle>
                <CardDescription className="text-xs md:text-sm">Settings to improve your network performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 md:space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 md:p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="mb-2 sm:mb-0">
                      <h3 className="font-medium text-white text-sm md:text-base mb-1">Auto Channel Selection</h3>
                      <p className="text-xs text-white/60">Automatically choose the best WiFi channel with least interference</p>
                    </div>
                    <div className="w-12 h-6 bg-cosmic-teal/20 rounded-full relative">
                      <div className="absolute top-1 left-1 w-4 h-4 bg-cosmic-teal rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 md:p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="mb-2 sm:mb-0">
                      <h3 className="font-medium text-white text-sm md:text-base mb-1">Band Steering</h3>
                      <p className="text-xs text-white/60">Guide compatible devices to 5GHz band for better performance</p>
                    </div>
                    <div className="w-12 h-6 bg-cosmic-teal/20 rounded-full relative">
                      <div className="absolute top-1 left-1 w-4 h-4 bg-cosmic-teal rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 md:p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="mb-2 sm:mb-0">
                      <h3 className="font-medium text-white text-sm md:text-base mb-1">Traffic Prioritization</h3>
                      <p className="text-xs text-white/60">Prioritize critical smart home devices over general web browsing</p>
                    </div>
                    <div className="w-12 h-6 bg-cosmic-teal/20 rounded-full relative">
                      <div className="absolute top-1 left-1 w-4 h-4 bg-cosmic-teal rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 md:p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="mb-2 sm:mb-0">
                      <h3 className="font-medium text-white text-sm md:text-base mb-1">Automatic Firmware Updates</h3>
                      <p className="text-xs text-white/60">Keep your network devices updated with latest security patches</p>
                    </div>
                    <div className="w-12 h-6 bg-white/10 rounded-full relative">
                      <div className="absolute top-1 right-1 w-4 h-4 bg-white/40 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center mt-4 md:mt-6">
                    <Button className="bg-cosmic-teal hover:bg-cosmic-teal/80 w-full xs:w-auto">
                      <span className="text-black text-xs md:text-sm">Apply Optimizations</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Network;
