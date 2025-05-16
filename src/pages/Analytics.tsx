
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Activity, Download, BarChart3, RefreshCw } from 'lucide-react';
import { AreaChart, Area, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Sample data for charts
const dailyData = [
  { name: '00:00', energy: 24, comfort: 75, security: 90 },
  { name: '04:00', energy: 13, comfort: 85, security: 95 },
  { name: '08:00', energy: 98, comfort: 88, security: 100 },
  { name: '12:00', energy: 75, comfort: 92, security: 100 },
  { name: '16:00', energy: 85, comfort: 90, security: 95 },
  { name: '20:00', energy: 47, comfort: 94, security: 100 },
];

const weeklyData = [
  { name: 'Mon', energy: 65, light: 38, climate: 27, security: 90 },
  { name: 'Tue', energy: 59, light: 32, climate: 27, security: 95 },
  { name: 'Wed', energy: 80, light: 43, climate: 37, security: 92 },
  { name: 'Thu', energy: 81, light: 41, climate: 40, security: 90 },
  { name: 'Fri', energy: 56, light: 33, climate: 23, security: 95 },
  { name: 'Sat', energy: 55, light: 30, climate: 25, security: 100 },
  { name: 'Sun', energy: 40, light: 22, climate: 18, security: 100 },
];

// Events data for the activity log
const events = [
  { id: 1, type: 'security', description: 'Front door unlocked by Emily', time: '15 min ago' },
  { id: 2, type: 'energy', description: 'Energy usage spike detected in Living Room', time: '1.2 hrs ago' },
  { id: 3, type: 'automation', description: 'Sleep mode automation activated', time: '8 hrs ago' },
  { id: 4, type: 'climate', description: 'Temperature automatically adjusted to 72°F', time: '9 hrs ago' },
  { id: 5, type: 'lighting', description: 'Living room lights turned off by automation', time: '9.5 hrs ago' },
];

const Analytics = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-orbitron text-gradient-teal">Analytics Dashboard</h1>
            <p className="text-white/70">Visualize and understand your smart home data</p>
          </div>
          <div className="flex items-center gap-3">
            <Select defaultValue="7d">
              <SelectTrigger className="w-[140px] bg-cosmic-blue/30 border-cosmic-teal/20">
                <SelectValue placeholder="Time Range" />
              </SelectTrigger>
              <SelectContent className="bg-cosmic-blue border border-cosmic-teal/20">
                <SelectItem value="24h">Last 24 Hours</SelectItem>
                <SelectItem value="7d">Last 7 Days</SelectItem>
                <SelectItem value="30d">Last 30 Days</SelectItem>
                <SelectItem value="custom">Custom Range</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="border-cosmic-teal/20 text-black">
              <RefreshCw size={16} className="mr-2 text-black" /> Refresh
            </Button>
            <Button className="bg-cosmic-teal hover:bg-cosmic-teal/80 text-black">
              <Download size={16} className="mr-2" /> Export
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-cosmic-blue/30 border border-cosmic-teal/20 backdrop-blur-md overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2 text-white">
                <div className="bg-cosmic-teal/20 w-8 h-8 rounded-md flex items-center justify-center">
                  <Activity size={18} className="text-cosmic-teal" />
                </div>
                Energy Efficiency
              </CardTitle>
              <CardDescription>Overall home efficiency score</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center py-6">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full border-8 border-cosmic-teal/20 flex items-center justify-center">
                    <div className="text-4xl font-bold text-white">87<span className="text-base font-normal text-white/60">%</span></div>
                  </div>
                  <div className="absolute top-0 left-0 w-32 h-32 rounded-full border-8 border-transparent border-t-cosmic-teal border-r-cosmic-teal animate-spin-slow"></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-center mt-4">
                <div className="bg-white/5 rounded-md py-2">
                  <div className="text-sm text-white/60">Yesterday</div>
                  <div className="font-medium text-white">82%</div>
                </div>
                <div className="bg-white/5 rounded-md py-2">
                  <div className="text-sm text-white/60">Improvement</div>
                  <div className="font-medium text-cosmic-teal">+5%</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-cosmic-blue/30 border border-cosmic-teal/20 backdrop-blur-md overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2 text-white">
                <div className="bg-cosmic-teal/20 w-8 h-8 rounded-md flex items-center justify-center">
                  <BarChart3 size={18} className="text-cosmic-teal" />
                </div>
                Usage Metrics
              </CardTitle>
              <CardDescription>Device usage breakdown</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[230px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={weeklyData}
                    margin={{ top: 20, right: 5, left: 0, bottom: 5 }}
                    barGap={0}
                    barSize={15}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="name" tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 10 }} axisLine={{ stroke: 'rgba(255,255,255,0.1)' }} />
                    <YAxis tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 10 }} axisLine={{ stroke: 'rgba(255,255,255,0.1)' }} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'rgba(10, 20, 40, 0.8)', borderColor: 'rgba(0,229,229,0.2)', borderRadius: '8px' }}
                      itemStyle={{ color: 'rgba(255,255,255,0.8)' }}
                      labelStyle={{ color: 'rgba(255,255,255,0.6)' }}
                    />
                    <Legend 
                      verticalAlign="top" 
                      wrapperStyle={{ fontSize: '10px', color: 'rgba(255,255,255,0.6)' }}
                    />
                    <Bar dataKey="light" name="Lighting" fill="rgba(0,229,229,0.8)" radius={[3, 3, 0, 0]} />
                    <Bar dataKey="climate" name="Climate" fill="rgba(255,170,0,0.8)" radius={[3, 3, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-cosmic-blue/30 border border-cosmic-teal/20 backdrop-blur-md overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-white">System Performance</CardTitle>
              <CardDescription>Response time & reliability</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[230px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={dailyData}
                    margin={{ top: 20, right: 5, left: 0, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="name" tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 10 }} axisLine={{ stroke: 'rgba(255,255,255,0.1)' }} />
                    <YAxis tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 10 }} axisLine={{ stroke: 'rgba(255,255,255,0.1)' }} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'rgba(10, 20, 40, 0.8)', borderColor: 'rgba(0,229,229,0.2)', borderRadius: '8px' }}
                      itemStyle={{ color: 'rgba(255,255,255,0.8)' }}
                      labelStyle={{ color: 'rgba(255,255,255,0.6)' }}
                    />
                    <Line type="monotone" dataKey="security" name="Security" stroke="rgba(0,229,229,0.8)" strokeWidth={2} dot={{ r: 4, strokeWidth: 0, fill: 'rgba(0,229,229,0.8)' }} activeDot={{ r: 6 }} />
                    <Line type="monotone" dataKey="comfort" name="Comfort" stroke="rgba(255,170,0,0.8)" strokeWidth={2} dot={{ r: 4, strokeWidth: 0, fill: 'rgba(255,170,0,0.8)' }} activeDot={{ r: 6 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Tabs defaultValue="energy" className="w-full">
              <TabsList className="bg-cosmic-blue/30 border border-cosmic-teal/20">
                <TabsTrigger value="energy">Energy</TabsTrigger>
                <TabsTrigger value="comfort">Comfort</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
              </TabsList>
              
              <TabsContent value="energy" className="mt-4">
                <Card className="bg-cosmic-blue/30 border border-cosmic-teal/20 backdrop-blur-md overflow-hidden">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-white">Energy Consumption Trends</CardTitle>
                      <Select defaultValue="daily">
                        <SelectTrigger className="w-[100px] bg-cosmic-blue/30 border-cosmic-teal/20 h-8">
                          <SelectValue placeholder="View" className="text-white" />
                        </SelectTrigger>
                        <SelectContent className="bg-cosmic-blue border border-cosmic-teal/20">
                          <SelectItem value="daily">Daily</SelectItem>
                          <SelectItem value="weekly">Weekly</SelectItem>
                          <SelectItem value="monthly">Monthly</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <CardDescription>Visualize power consumption patterns</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                          data={weeklyData}
                          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                        >
                          <defs>
                            <linearGradient id="colorEnergy" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="rgba(0,229,229,0.8)" stopOpacity={0.8} />
                              <stop offset="95%" stopColor="rgba(0,229,229,0.1)" stopOpacity={0} />
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
                          <XAxis dataKey="name" tick={{ fill: 'rgba(255,255,255,0.6)' }} axisLine={{ stroke: 'rgba(255,255,255,0.1)' }} />
                          <YAxis tick={{ fill: 'rgba(255,255,255,0.6)' }} axisLine={{ stroke: 'rgba(255,255,255,0.1)' }} />
                          <Tooltip 
                            contentStyle={{ backgroundColor: 'rgba(10, 20, 40, 0.8)', borderColor: 'rgba(0,229,229,0.2)', borderRadius: '8px' }}
                            itemStyle={{ color: 'rgba(255,255,255,0.8)' }}
                            labelStyle={{ color: 'rgba(255,255,255,0.6)' }}
                          />
                          <Area type="monotone" dataKey="energy" name="Energy (kWh)" stroke="rgba(0,229,229,1)" fillOpacity={1} fill="url(#colorEnergy)" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mt-6">
                      <div className="text-center p-3 bg-white/5 rounded-lg">
                        <div className="text-xs text-white/60">Daily Average</div>
                        <div className="text-xl font-medium text-white">4.7 kWh</div>
                        <div className="text-xs text-cosmic-teal">-12% from last week</div>
                      </div>
                      <div className="text-center p-3 bg-white/5 rounded-lg">
                        <div className="text-xs text-white/60">Peak Usage</div>
                        <div className="text-xl font-medium text-white">8.2 kWh</div>
                        <div className="text-xs text-cosmic-teal">Wed, 2-4pm</div>
                      </div>
                      <div className="text-center p-3 bg-white/5 rounded-lg">
                        <div className="text-xs text-white/60">Projected Monthly</div>
                        <div className="text-xl font-medium text-white">142 kWh</div>
                        <div className="text-xs text-cosmic-teal">-8% from last month</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="comfort">
                <Card className="bg-cosmic-blue/30 border border-cosmic-teal/20 backdrop-blur-md overflow-hidden">
                  <CardHeader>
                    <CardTitle className="text-white">Comfort Analysis</CardTitle>
                    <CardDescription>Indoor environment quality metrics</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px] flex items-center justify-center">
                      <p className="text-white/60">Comfort analysis visualization would display here</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="security">
                <Card className="bg-cosmic-blue/30 border border-cosmic-teal/20 backdrop-blur-md overflow-hidden">
                  <CardHeader>
                    <CardTitle className="text-white">Security Analytics</CardTitle>
                    <CardDescription>System performance and event analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px] flex items-center justify-center">
                      <p className="text-white/60">Security analytics visualization would display here</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          
          <div>
            <Card className="bg-cosmic-blue/30 border border-cosmic-teal/20 backdrop-blur-md overflow-hidden">
              <CardHeader>
                <CardTitle className="text-white">Recent Activity</CardTitle>
                <CardDescription>Latest system events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {events.map((event) => (
                    <div key={event.id} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        event.type === 'security' ? 'bg-cosmic-teal' : 
                        event.type === 'energy' ? 'bg-cosmic-amber' : 'bg-white/50'
                      }`} />
                      <div className="flex-1">
                        <p className="text-sm text-white">{event.description}</p>
                        <p className="text-xs text-white/60 mt-1">{event.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4 border-cosmic-teal/20">
                  View All Activity
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
