
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
            <h1 className="text-3xl font-orbitron text-gradient-teal">Network Mesh</h1>
            <p className="text-white/70">Monitor and optimize your smart home network</p>
          </div>
          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              className="border-cosmic-teal/20"
              disabled={scanningNetwork}
              onClick={startNetworkScan}
            >
              <RefreshCw size={16} className={`mr-2 ${scanningNetwork ? 'animate-spin' : ''}`} />
              {scanningNetwork ? 'Scanning...' : 'Scan Network'}
            </Button>
            <Button className="bg-cosmic-teal hover:bg-cosmic-teal/80 text-black">Network Health Report</Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-cosmic-blue/30 backdrop-blur-md border border-cosmic-teal/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-cosmic-teal via-cosmic-teal/50 to-transparent"></div>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wifi size={18} className="text-cosmic-teal" /> Main Network
              </CardTitle>
              <CardDescription>Primary WiFi network</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">Connection Status</span>
                <Badge className="bg-cosmic-teal text-black">Online</Badge>
              </div>
              
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span>Signal Strength</span>
                  <span>Excellent</span>
                </div>
                <Progress value={96} className="h-1.5" indicatorClassName="bg-cosmic-teal" />
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-white/60 text-xs">SSID</div>
                  <div className="font-medium">HomeSphere_Main</div>
                </div>
                <div>
                  <div className="text-white/60 text-xs">Security</div>
                  <div className="font-medium">WPA3</div>
                </div>
                <div>
                  <div className="text-white/60 text-xs">Band</div>
                  <div className="font-medium">5GHz</div>
                </div>
                <div>
                  <div className="text-white/60 text-xs">Channel</div>
                  <div className="font-medium">36 (Auto)</div>
                </div>
                <div>
                  <div className="text-white/60 text-xs">IP Address</div>
                  <div className="font-medium">192.168.1.1</div>
                </div>
                <div>
                  <div className="text-white/60 text-xs">MAC Address</div>
                  <div className="font-medium">A4:C3:...:F8</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-cosmic-blue/30 backdrop-blur-md border border-cosmic-teal/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gitlab size={18} className="text-cosmic-teal" /> Mesh Performance
              </CardTitle>
              <CardDescription>Coverage and connectivity</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <div className="text-center p-3 bg-white/5 rounded-lg flex-1">
                  <div className="text-xs text-white/60">Connected Devices</div>
                  <div className="text-2xl font-medium">24</div>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-lg flex-1 mx-2">
                  <div className="text-xs text-white/60">Network Load</div>
                  <div className="text-2xl font-medium">38%</div>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-lg flex-1">
                  <div className="text-xs text-white/60">Avg. Latency</div>
                  <div className="text-2xl font-medium">8ms</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>Download Speed</span>
                    <span>482 Mbps</span>
                  </div>
                  <Progress value={85} className="h-1.5" indicatorClassName="bg-cosmic-teal" />
                </div>
                
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>Upload Speed</span>
                    <span>125 Mbps</span>
                  </div>
                  <Progress value={65} className="h-1.5" indicatorClassName="bg-cosmic-teal" />
                </div>
                
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>Coverage Quality</span>
                    <span>92%</span>
                  </div>
                  <Progress value={92} className="h-1.5" indicatorClassName="bg-cosmic-teal" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-cosmic-blue/30 backdrop-blur-md border border-cosmic-teal/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity size={18} className="text-cosmic-teal" /> Network Activity
              </CardTitle>
              <CardDescription>Current data transfer</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative h-32 w-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold">5.2</div>
                    <div className="text-sm text-white/60">GB Today</div>
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
              
              <div className="space-y-3 mt-6">
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-cosmic-teal mr-2"></div>
                    <span className="text-sm">Media Streaming</span>
                  </div>
                  <span>2.8 GB</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-cosmic-amber mr-2"></div>
                    <span className="text-sm">Security Cameras</span>
                  </div>
                  <span>1.5 GB</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-white/50 mr-2"></div>
                    <span className="text-sm">Other Devices</span>
                  </div>
                  <span>0.9 GB</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="devices" className="w-full">
          <TabsList className="bg-cosmic-blue/30 border border-cosmic-teal/20">
            <TabsTrigger value="devices">Connected Devices</TabsTrigger>
            <TabsTrigger value="mesh">Mesh Nodes</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="optimization">Optimization</TabsTrigger>
          </TabsList>
          
          <TabsContent value="devices" className="mt-4">
            <Card className="bg-cosmic-blue/30 backdrop-blur-md border border-cosmic-teal/20">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Connected Devices</CardTitle>
                  <Badge className="bg-cosmic-teal/20 text-cosmic-teal">24 Online</Badge>
                </div>
                <CardDescription>All devices currently connected to your network</CardDescription>
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
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <div className="flex items-center">
                        <div className={`w-2 h-2 rounded-full mr-3 ${device.status === 'optimal' ? 'bg-cosmic-teal' : 'bg-cosmic-amber'}`}></div>
                        <div>
                          <div className="font-medium">{device.name}</div>
                          <div className="text-xs text-white/60">{device.type} • {device.ip}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 mt-2 sm:mt-0 justify-between sm:justify-start">
                        <div className="text-xs">
                          <div className="text-white/60">Bandwidth</div>
                          <div>{device.bandwidth}</div>
                        </div>
                        <div className="text-xs">
                          <div className="text-white/60">Connected</div>
                          <div>{device.connected}</div>
                        </div>
                        <Button variant="ghost" size="sm" className="ml-2">Details</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="border-t border-white/10 flex justify-center pt-4">
                <Button variant="outline" className="border-cosmic-teal/20">View All 24 Devices</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="mesh" className="mt-4">
            <Card className="bg-cosmic-blue/30 backdrop-blur-md border border-cosmic-teal/20">
              <CardHeader>
                <CardTitle>Mesh Network Nodes</CardTitle>
                <CardDescription>Your connected mesh network devices</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  <div className="p-4 bg-white/5 rounded-lg border border-cosmic-teal/30">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-medium">Main Router</h3>
                        <p className="text-xs text-white/60">Gateway Node</p>
                      </div>
                      <Badge className="bg-cosmic-teal text-black">Primary</Badge>
                    </div>
                    <div className="space-y-3 mt-4">
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span>Signal Quality</span>
                          <span>100%</span>
                        </div>
                        <Progress value={100} className="h-1" indicatorClassName="bg-cosmic-teal" />
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
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
                  
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-medium">Mesh Node 1</h3>
                        <p className="text-xs text-white/60">Extender Node</p>
                      </div>
                      <Badge className="bg-white/20">Connected</Badge>
                    </div>
                    <div className="space-y-3 mt-4">
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span>Signal Quality</span>
                          <span>92%</span>
                        </div>
                        <Progress value={92} className="h-1" indicatorClassName="bg-cosmic-teal" />
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
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
                  
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-medium">Mesh Node 2</h3>
                        <p className="text-xs text-white/60">Extender Node</p>
                      </div>
                      <Badge className="bg-white/20">Connected</Badge>
                    </div>
                    <div className="space-y-3 mt-4">
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span>Signal Quality</span>
                          <span>86%</span>
                        </div>
                        <Progress value={86} className="h-1" indicatorClassName="bg-cosmic-teal" />
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
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
                
                <div className="flex flex-col items-center justify-center p-8 border border-dashed border-cosmic-teal/20 rounded-lg">
                  <Zap size={40} className="text-cosmic-teal/40 mb-4" />
                  <h3 className="text-lg font-medium mb-1">Add Mesh Node</h3>
                  <p className="text-sm text-white/60 text-center max-w-xs mb-4">Extend your network coverage by adding another mesh node to your network</p>
                  <Button className="bg-cosmic-teal hover:bg-cosmic-teal/80 text-black">Add New Node</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="security">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <Card className="bg-cosmic-blue/30 backdrop-blur-md border border-cosmic-teal/20">
                <CardHeader>
                  <CardTitle>Network Protection</CardTitle>
                  <CardDescription>Security features and status</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { feature: 'Firewall Protection', status: 'Active', icon: <CheckCircle2 size={18} className="text-cosmic-teal" /> },
                      { feature: 'Intrusion Detection', status: 'Active', icon: <CheckCircle2 size={18} className="text-cosmic-teal" /> },
                      { feature: 'Device Authentication', status: 'Active', icon: <CheckCircle2 size={18} className="text-cosmic-teal" /> },
                      { feature: 'DNS Protection', status: 'Update Available', icon: <AlertCircle size={18} className="text-cosmic-amber" /> },
                      { feature: 'Content Filtering', status: 'Configured', icon: <CheckCircle2 size={18} className="text-cosmic-teal" /> },
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                        <span>{item.feature}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm">{item.status}</span>
                          {item.icon}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-cosmic-blue/30 backdrop-blur-md border border-cosmic-teal/20">
                <CardHeader>
                  <CardTitle>Threat Detection</CardTitle>
                  <CardDescription>Security events and monitoring</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <div className="text-center p-6 bg-white/5 rounded-lg">
                      <CheckCircle2 size={48} className="mx-auto text-cosmic-teal mb-2" />
                      <h3 className="text-lg font-medium mb-1">Network Secure</h3>
                      <p className="text-sm text-white/70">No threats detected in the last 7 days</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium mb-2">Protection Summary</h4>
                    <div className="grid grid-cols-2 gap-3 text-center">
                      <div className="p-3 bg-white/5 rounded-lg">
                        <div className="text-2xl font-medium">32</div>
                        <div className="text-xs text-white/60">Threats Blocked</div>
                      </div>
                      <div className="p-3 bg-white/5 rounded-lg">
                        <div className="text-2xl font-medium">18</div>
                        <div className="text-xs text-white/60">Unsafe Sites</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-white/10 flex justify-end pt-4">
                  <Button variant="outline" className="border-cosmic-teal/20">Security Report</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="optimization">
            <Card className="bg-cosmic-blue/30 backdrop-blur-md border border-cosmic-teal/20 mt-4">
              <CardHeader>
                <CardTitle>Network Optimization</CardTitle>
                <CardDescription>Settings to improve your network performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                    <div>
                      <h3 className="font-medium mb-1">Auto Channel Selection</h3>
                      <p className="text-sm text-white/60">Automatically choose the best WiFi channel with least interference</p>
                    </div>
                    <div className="w-12 h-6 bg-cosmic-teal/20 rounded-full relative">
                      <div className="absolute top-1 left-1 w-4 h-4 bg-cosmic-teal rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                    <div>
                      <h3 className="font-medium mb-1">Band Steering</h3>
                      <p className="text-sm text-white/60">Guide compatible devices to 5GHz band for better performance</p>
                    </div>
                    <div className="w-12 h-6 bg-cosmic-teal/20 rounded-full relative">
                      <div className="absolute top-1 left-1 w-4 h-4 bg-cosmic-teal rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                    <div>
                      <h3 className="font-medium mb-1">Traffic Prioritization</h3>
                      <p className="text-sm text-white/60">Prioritize critical smart home devices over general web browsing</p>
                    </div>
                    <div className="w-12 h-6 bg-cosmic-teal/20 rounded-full relative">
                      <div className="absolute top-1 left-1 w-4 h-4 bg-cosmic-teal rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                    <div>
                      <h3 className="font-medium mb-1">Automatic Firmware Updates</h3>
                      <p className="text-sm text-white/60">Keep your network devices updated with latest security patches</p>
                    </div>
                    <div className="w-12 h-6 bg-white/10 rounded-full relative">
                      <div className="absolute top-1 right-1 w-4 h-4 bg-white/40 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center mt-6">
                    <Button className="bg-cosmic-teal hover:bg-cosmic-teal/80 text-black">Apply Optimizations</Button>
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
