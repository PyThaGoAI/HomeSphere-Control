
import { useState, useEffect } from 'react';
import { Activity, Zap, Wifi, CheckCircle, AlertTriangle, XCircle, Server, Database, Clock, RefreshCw, Maximize } from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import ModuleCard from '@/components/dashboard/ModuleCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import {
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';
import { useToast } from '@/hooks/use-toast';

// System component health type
interface SystemComponent {
  id: string;
  name: string;
  status: 'optimal' | 'warning' | 'error';
  uptime: string;
  latency?: number;
  load?: number;
  details: string;
  lastChecked: string;
  category: 'network' | 'server' | 'hardware' | 'sensor' | 'database';
}

// System metrics type
interface SystemMetrics {
  time: string;
  networkSpeed: number;
  cpuUsage: number;
  memoryUsage: number;
  responseTime: number;
}

const SystemHealth = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [systemComponents, setSystemComponents] = useState<SystemComponent[]>([]);
  const [systemMetrics, setSystemMetrics] = useState<SystemMetrics[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [healthScore, setHealthScore] = useState(92);
  const { toast } = useToast();
  
  // Generate mock system components data
  useEffect(() => {
    const mockComponents: SystemComponent[] = [
      {
        id: 'net-001',
        name: 'Main Wi-Fi Router',
        status: 'optimal',
        uptime: '34 days, 12 hours',
        latency: 18,
        details: 'All services operational, signal strength at 95%',
        lastChecked: '2 minutes ago',
        category: 'network'
      },
      {
        id: 'net-002',
        name: 'Mesh Network Node 1',
        status: 'optimal',
        uptime: '29 days, 8 hours',
        latency: 22,
        details: 'All services operational, signal strength at 92%',
        lastChecked: '2 minutes ago',
        category: 'network'
      },
      {
        id: 'net-003',
        name: 'Mesh Network Node 2',
        status: 'warning',
        uptime: '5 days, 3 hours',
        latency: 45,
        details: 'Higher than normal latency detected',
        lastChecked: '2 minutes ago',
        category: 'network'
      },
      {
        id: 'srv-001',
        name: 'Home Automation Hub',
        status: 'optimal',
        uptime: '41 days, 5 hours',
        load: 42,
        details: 'Processing load normal, all services running',
        lastChecked: '2 minutes ago',
        category: 'server'
      },
      {
        id: 'srv-002',
        name: 'Media Server',
        status: 'optimal',
        uptime: '15 days, 19 hours',
        load: 28,
        details: 'Operations normal, transcoding available',
        lastChecked: '2 minutes ago',
        category: 'server'
      },
      {
        id: 'hw-001',
        name: 'Primary Hub Controller',
        status: 'optimal',
        uptime: '41 days, 5 hours',
        load: 32,
        details: 'Temperature normal, all processes stable',
        lastChecked: '2 minutes ago',
        category: 'hardware'
      },
      {
        id: 'hw-002',
        name: 'Backup Power System',
        status: 'warning',
        uptime: '41 days, 5 hours',
        details: 'Battery capacity at 62%, below recommended threshold',
        lastChecked: '2 minutes ago',
        category: 'hardware'
      },
      {
        id: 'sen-001',
        name: 'Environmental Sensor Network',
        status: 'optimal',
        uptime: '36 days, 4 hours',
        details: 'All sensors reporting, calibration normal',
        lastChecked: '2 minutes ago',
        category: 'sensor'
      },
      {
        id: 'sen-002',
        name: 'Motion Sensor Network',
        status: 'error',
        uptime: '2 days, 8 hours',
        details: 'Zone 3 sensors not responding, system degraded',
        lastChecked: '2 minutes ago',
        category: 'sensor'
      },
      {
        id: 'db-001',
        name: 'Time-Series Database',
        status: 'optimal',
        uptime: '41 days, 5 hours',
        load: 45,
        details: 'Data storage at 38% capacity, backup schedule normal',
        lastChecked: '2 minutes ago',
        category: 'database'
      },
      {
        id: 'db-002',
        name: 'Configuration Database',
        status: 'optimal',
        uptime: '41 days, 5 hours',
        load: 22,
        details: 'Last backup 8 hours ago, integrity verified',
        lastChecked: '2 minutes ago',
        category: 'database'
      }
    ];
    
    setSystemComponents(mockComponents);
  }, []);
  
  // Generate mock metrics data
  useEffect(() => {
    const generateMetricsData = () => {
      const now = new Date();
      const data: SystemMetrics[] = [];
      
      // Generate data for the past 24 hours
      for (let i = 24; i >= 0; i--) {
        const time = new Date(now);
        time.setHours(now.getHours() - i);
        
        data.push({
          time: `${String(time.getHours()).padStart(2, '0')}:00`,
          networkSpeed: 80 + Math.random() * 20,
          cpuUsage: 30 + Math.random() * 30,
          memoryUsage: 40 + Math.random() * 35,
          responseTime: 100 + Math.random() * 50
        });
      }
      
      return data;
    };
    
    setSystemMetrics(generateMetricsData());
  }, []);
  
  // Filter system components based on active category
  const filteredComponents = systemComponents.filter(comp => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'issues') return comp.status === 'warning' || comp.status === 'error';
    return comp.category === activeCategory;
  });
  
  // Calculate system health metrics
  const systemHealth = {
    optimal: systemComponents.filter(c => c.status === 'optimal').length,
    warning: systemComponents.filter(c => c.status === 'warning').length,
    error: systemComponents.filter(c => c.status === 'error').length,
    total: systemComponents.length
  };
  
  // Health distribution data for pie chart
  const healthDistributionData = [
    { name: 'Optimal', value: systemHealth.optimal },
    { name: 'Warning', value: systemHealth.warning },
    { name: 'Error', value: systemHealth.error }
  ];
  
  // Colors for the pie chart
  const COLORS = ['#00E5E5', '#FFAA00', '#FF5252'];
  
  // Handle refresh system status
  const handleRefresh = () => {
    setIsRefreshing(true);
    toast({
      title: "Refreshing system health status",
      description: "Checking all components for current status...",
    });
    
    // Simulate refresh completion after delay
    setTimeout(() => {
      setIsRefreshing(false);
      // Simulate a small change in health score
      setHealthScore(prevScore => {
        const newScore = prevScore + (Math.random() > 0.5 ? 1 : -1);
        return Math.min(100, Math.max(0, newScore));
      });
      
      toast({
        title: "System health check complete",
        description: "All component statuses have been updated",
      });
    }, 3000);
  };
  
  return (
    <DashboardLayout>
      <div className="pb-10 space-y-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h1 className="font-orbitron text-3xl text-gradient-premium">System Health Monitor</h1>
          <Button
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="bg-cosmic-teal text-black hover:bg-cosmic-teal/80"
          >
            {isRefreshing ? (
              <>
                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                Refreshing...
              </>
            ) : (
              <>
                <RefreshCw className="mr-2 h-4 w-4" />
                Refresh Status
              </>
            )}
          </Button>
        </div>
        
        {/* Health Score and Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <ModuleCard
              title="System Health Score"
              icon={<Activity className="text-cosmic-teal" size={22} />}
              status={healthScore > 90 ? 'optimal' : healthScore > 70 ? 'warning' : 'alert'}
              className="bg-gradient-to-br from-cosmic-blue/40 to-cosmic-blue/20 h-full"
            >
              <div className="flex flex-col items-center justify-center p-6">
                <div className="w-48 h-48 relative flex items-center justify-center">
                  {/* Circular progress background */}
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="45" 
                      fill="none" 
                      stroke="rgba(255,255,255,0.1)" 
                      strokeWidth="8" 
                    />
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="45" 
                      fill="none" 
                      stroke={healthScore > 90 ? "#00E5E5" : healthScore > 70 ? "#FFAA00" : "#FF5252"} 
                      strokeWidth="8" 
                      strokeDasharray={`${healthScore * 2.83} ${283 - healthScore * 2.83}`}
                      strokeDashoffset="70.75"
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                      className="transition-all duration-1000 ease-in-out"
                    />
                  </svg>
                  
                  {/* Center score display */}
                  <div className="absolute flex flex-col items-center">
                    <span className="text-4xl font-orbitron">{healthScore}</span>
                    <span className="text-sm text-white/70">Health Score</span>
                  </div>
                </div>
                
                <div className="mt-6 w-full bg-cosmic-blue/30 rounded-lg p-4 text-center">
                  <h3 className="text-base font-orbitron mb-2">Status</h3>
                  
                  <div className={cn(
                    "text-lg font-medium",
                    healthScore > 90 ? "text-cosmic-teal" : 
                    healthScore > 70 ? "text-cosmic-amber" : "text-red-400"
                  )}>
                    {healthScore > 90 ? "Optimal" : healthScore > 70 ? "Good with Issues" : "Attention Required"}
                  </div>
                  
                  <p className="text-sm text-white/70 mt-2">
                    {healthScore > 90 
                      ? "All systems operating within optimal parameters."
                      : healthScore > 70 
                      ? "Minor issues detected but system is stable."
                      : "Critical issues affecting system performance."
                    }
                  </p>
                </div>
              </div>
            </ModuleCard>
          </div>
          
          <div className="lg:col-span-2">
            <ModuleCard
              title="Component Health Distribution"
              icon={<CheckCircle className="text-cosmic-teal" size={22} />}
              className="bg-gradient-to-br from-cosmic-blue/40 to-cosmic-blue/20 h-full"
            >
              <div className="h-80 flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={healthDistributionData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      innerRadius={50}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {healthDistributionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Legend 
                      verticalAlign="bottom" 
                      height={36}
                      formatter={(value) => <span style={{ color: 'white' }}>{value}</span>}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(26, 42, 68, 0.9)', 
                        borderColor: 'rgba(0, 229, 229, 0.3)',
                        borderRadius: '8px',
                        fontSize: '12px'
                      }}
                      formatter={(value, name) => [`${value} components`, name]}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="bg-cosmic-blue/30 p-3 rounded-lg text-center">
                  <div className="flex items-center justify-center mb-2">
                    <CheckCircle size={18} className="text-cosmic-teal" />
                  </div>
                  <div className="text-2xl font-orbitron text-cosmic-teal">{systemHealth.optimal}</div>
                  <div className="text-xs text-white/70">Optimal</div>
                </div>
                
                <div className="bg-cosmic-blue/30 p-3 rounded-lg text-center">
                  <div className="flex items-center justify-center mb-2">
                    <AlertTriangle size={18} className="text-cosmic-amber" />
                  </div>
                  <div className="text-2xl font-orbitron text-cosmic-amber">{systemHealth.warning}</div>
                  <div className="text-xs text-white/70">Warning</div>
                </div>
                
                <div className="bg-cosmic-blue/30 p-3 rounded-lg text-center">
                  <div className="flex items-center justify-center mb-2">
                    <XCircle size={18} className="text-red-400" />
                  </div>
                  <div className="text-2xl font-orbitron text-red-400">{systemHealth.error}</div>
                  <div className="text-xs text-white/70">Error</div>
                </div>
              </div>
            </ModuleCard>
          </div>
        </div>
        
        {/* System Performance Metrics */}
        <ModuleCard
          title="System Performance Metrics"
          icon={<Activity className="text-cosmic-amber" size={22} />}
          className="bg-gradient-to-br from-cosmic-blue/40 to-cosmic-blue/20"
        >
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={systemMetrics}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                <XAxis 
                  dataKey="time" 
                  tick={{ fontSize: 12, fill: 'rgba(255,255,255,0.7)' }}
                  axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                />
                <YAxis 
                  tick={{ fontSize: 12, fill: 'rgba(255,255,255,0.7)' }}
                  axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(26, 42, 68, 0.9)', 
                    borderColor: 'rgba(0, 229, 229, 0.3)',
                    borderRadius: '8px',
                    fontSize: '12px'
                  }}
                  labelStyle={{ color: 'rgba(255,255,255,0.8)' }}
                />
                <Legend 
                  wrapperStyle={{ paddingTop: '10px' }}
                  formatter={(value) => <span style={{ color: 'rgba(255,255,255,0.8)' }}>{value}</span>} 
                />
                <Line 
                  type="monotone" 
                  dataKey="cpuUsage" 
                  name="CPU Load (%)" 
                  stroke="#00E5E5" 
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 6 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="memoryUsage" 
                  name="Memory Usage (%)" 
                  stroke="#FFAA00" 
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 6 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="networkSpeed" 
                  name="Network Speed (%)" 
                  stroke="#FF5252" 
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 6 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="responseTime" 
                  name="Response Time (ms)" 
                  stroke="#8884d8" 
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="flex justify-end mt-4">
            <Button
              variant="outline"
              className="flex items-center text-white bg-cosmic-blue/30 border-white/10 hover:bg-cosmic-blue/50"
            >
              <Maximize size={16} className="mr-2" />
              View Full Analytics
            </Button>
          </div>
        </ModuleCard>
        
        {/* System Components List */}
        <ModuleCard
          title="System Components"
          icon={<Server className="text-cosmic-teal" size={22} />}
          className="bg-gradient-to-br from-cosmic-blue/40 to-cosmic-blue/20"
        >
          <div className="mb-6">
            <Tabs 
              value={activeCategory} 
              onValueChange={setActiveCategory}
              className="w-full"
            >
              <TabsList className="bg-cosmic-blue/40 w-full justify-start overflow-x-auto">
                <TabsTrigger 
                  value="all"
                  className="data-[state=active]:bg-cosmic-teal/20 data-[state=active]:text-cosmic-teal"
                >
                  All Components
                </TabsTrigger>
                <TabsTrigger 
                  value="network"
                  className="data-[state=active]:bg-cosmic-teal/20 data-[state=active]:text-cosmic-teal"
                >
                  Network
                </TabsTrigger>
                <TabsTrigger 
                  value="server"
                  className="data-[state=active]:bg-cosmic-teal/20 data-[state=active]:text-cosmic-teal"
                >
                  Servers
                </TabsTrigger>
                <TabsTrigger 
                  value="hardware"
                  className="data-[state=active]:bg-cosmic-teal/20 data-[state=active]:text-cosmic-teal"
                >
                  Hardware
                </TabsTrigger>
                <TabsTrigger 
                  value="sensor"
                  className="data-[state=active]:bg-cosmic-teal/20 data-[state=active]:text-cosmic-teal"
                >
                  Sensors
                </TabsTrigger>
                <TabsTrigger 
                  value="database"
                  className="data-[state=active]:bg-cosmic-teal/20 data-[state=active]:text-cosmic-teal"
                >
                  Databases
                </TabsTrigger>
                <TabsTrigger 
                  value="issues"
                  className="data-[state=active]:bg-cosmic-amber/20 data-[state=active]:text-cosmic-amber"
                >
                  Issues
                </TabsTrigger>
              </TabsList>
              
              <div className="mt-6 space-y-4">
                {filteredComponents.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center text-white/60">
                    <Server size={48} className="mb-4 text-white/30" />
                    <p className="text-lg">No components found in this category</p>
                  </div>
                ) : (
                  filteredComponents.map(component => (
                    <div
                      key={component.id}
                      className={cn(
                        "border rounded-lg p-5 transition-all duration-300",
                        component.status === 'optimal' && "border-cosmic-teal/30 bg-cosmic-teal/5",
                        component.status === 'warning' && "border-cosmic-amber/30 bg-cosmic-amber/5",
                        component.status === 'error' && "border-red-500/30 bg-red-500/5"
                      )}
                    >
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center">
                          <div className={cn(
                            "w-3 h-3 rounded-full mr-3",
                            component.status === 'optimal' && "bg-cosmic-teal animate-pulse-glow",
                            component.status === 'warning' && "bg-cosmic-amber animate-pulse-amber",
                            component.status === 'error' && "bg-red-500 animate-pulse"
                          )}></div>
                          <h3 className="font-orbitron text-base text-white">{component.name}</h3>
                        </div>
                        
                        <div className={cn(
                          "text-sm",
                          component.status === 'optimal' && "text-cosmic-teal",
                          component.status === 'warning' && "text-cosmic-amber",
                          component.status === 'error' && "text-red-400"
                        )}>
                          {component.status.charAt(0).toUpperCase() + component.status.slice(1)}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <div className="text-xs text-white/70">Category</div>
                          <div className="text-sm text-white capitalize">{component.category}</div>
                        </div>
                        <div>
                          <div className="text-xs text-white/70">Uptime</div>
                          <div className="text-sm text-white">{component.uptime}</div>
                        </div>
                        <div>
                          <div className="text-xs text-white/70">Last Checked</div>
                          <div className="text-sm text-white">{component.lastChecked}</div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        {component.latency && (
                          <div>
                            <div className="flex justify-between items-center text-xs mb-1">
                              <span className="text-white/70">Latency</span>
                              <span className={cn(
                                component.latency < 30 
                                  ? "text-cosmic-teal" 
                                  : component.latency < 50 
                                  ? "text-cosmic-amber" 
                                  : "text-red-400"
                              )}>
                                {component.latency} ms
                              </span>
                            </div>
                            <Progress 
                              value={100 - (component.latency / 100) * 100} 
                              className="h-1.5" 
                              indicatorClassName={cn(
                                component.latency < 30 ? "bg-cosmic-teal" : 
                                component.latency < 50 ? "bg-cosmic-amber" : "bg-red-400"
                              )}
                            />
                          </div>
                        )}
                        
                        {component.load && (
                          <div>
                            <div className="flex justify-between items-center text-xs mb-1">
                              <span className="text-white/70">System Load</span>
                              <span className={cn(
                                component.load < 60 
                                  ? "text-cosmic-teal" 
                                  : component.load < 80 
                                  ? "text-cosmic-amber" 
                                  : "text-red-400"
                              )}>
                                {component.load}%
                              </span>
                            </div>
                            <Progress 
                              value={component.load} 
                              className="h-1.5" 
                              indicatorClassName={cn(
                                component.load < 60 ? "bg-cosmic-teal" : 
                                component.load < 80 ? "bg-cosmic-amber" : "bg-red-400"
                              )}
                            />
                          </div>
                        )}
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <p className="text-sm text-white/80">{component.details}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </Tabs>
          </div>
        </ModuleCard>
      </div>
    </DashboardLayout>
  );
};

export default SystemHealth;
