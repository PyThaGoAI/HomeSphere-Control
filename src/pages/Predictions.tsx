
import { useState } from 'react';
import { TrendingUp, Zap, Thermometer, Clock, AlertTriangle, Lightbulb, Calendar, Download } from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import ModuleCard from '@/components/dashboard/ModuleCard';
import { Button } from '@/components/ui/button';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
  ReferenceLine
} from 'recharts';
import { cn } from '@/lib/utils';

const Predictions = () => {
  const [timeRange, setTimeRange] = useState('7d');
  const [predictionType, setPredictionType] = useState('energy');
  
  // Mock data for energy prediction
  const energyPredictionData = [
    { day: 'Mon', actual: 15.2, predicted: 14.8, average: 16.4 },
    { day: 'Tue', actual: 16.5, predicted: 15.9, average: 16.2 },
    { day: 'Wed', actual: 14.8, predicted: 15.2, average: 16.0 },
    { day: 'Thu', actual: 17.2, predicted: 16.8, average: 16.1 },
    { day: 'Fri', actual: 16.9, predicted: 17.4, average: 16.3 },
    { day: 'Sat', actual: 13.5, predicted: 14.1, average: 15.2 },
    { day: 'Sun', actual: 12.8, predicted: 13.0, average: 14.8 },
    { day: 'Next Mon', actual: null, predicted: 15.5, average: 16.4 },
    { day: 'Next Tue', actual: null, predicted: 16.2, average: 16.2 },
    { day: 'Next Wed', actual: null, predicted: 15.8, average: 16.0 }
  ];
  
  // Mock data for temperature prediction
  const temperaturePredictionData = [
    { day: 'Mon', actual: 72, predicted: 71, average: 70 },
    { day: 'Tue', actual: 73, predicted: 72, average: 70 },
    { day: 'Wed', actual: 71, predicted: 71, average: 70 },
    { day: 'Thu', actual: 70, predicted: 70, average: 70 },
    { day: 'Fri', actual: 74, predicted: 73, average: 70 },
    { day: 'Sat', actual: 75, predicted: 74, average: 71 },
    { day: 'Sun', actual: 72, predicted: 73, average: 71 },
    { day: 'Next Mon', actual: null, predicted: 74, average: 70 },
    { day: 'Next Tue', actual: null, predicted: 75, average: 70 },
    { day: 'Next Wed', actual: null, predicted: 73, average: 70 }
  ];
  
  // Mock data for lighting prediction
  const lightingPredictionData = [
    { day: 'Mon', actual: 8.5, predicted: 8.2, average: 8.8 },
    { day: 'Tue', actual: 7.8, predicted: 8.0, average: 8.8 },
    { day: 'Wed', actual: 8.2, predicted: 8.1, average: 8.7 },
    { day: 'Thu', actual: 8.7, predicted: 8.5, average: 8.7 },
    { day: 'Fri', actual: 9.1, predicted: 8.8, average: 8.9 },
    { day: 'Sat', actual: 10.2, predicted: 9.8, average: 9.5 },
    { day: 'Sun', actual: 9.8, predicted: 9.5, average: 9.3 },
    { day: 'Next Mon', actual: null, predicted: 8.4, average: 8.8 },
    { day: 'Next Tue', actual: null, predicted: 8.2, average: 8.8 },
    { day: 'Next Wed', actual: null, predicted: 8.5, average: 8.7 }
  ];
  
  // Select data based on prediction type
  const getPredictionData = () => {
    switch (predictionType) {
      case 'energy': return energyPredictionData;
      case 'temperature': return temperaturePredictionData;
      case 'lighting': return lightingPredictionData;
      default: return energyPredictionData;
    }
  };
  
  // Get chart data based on time range
  const getChartData = () => {
    const allData = getPredictionData();
    if (timeRange === '3d') return allData.slice(4, 10);
    if (timeRange === '7d') return allData;
    return allData;
  };
  
  const chartData = getChartData();
  
  // Calculate potential savings
  const calculateSavings = () => {
    switch (predictionType) {
      case 'energy': 
        return {
          value: 28.5,
          percentage: 15,
          unit: 'kWh',
          impact: 'Reduction in power consumption'
        };
      case 'temperature':
        return {
          value: 12,
          percentage: 8,
          unit: '%',
          impact: 'Improved comfort efficiency'
        };
      case 'lighting':
        return {
          value: 5.2,
          percentage: 12,
          unit: 'kWh',
          impact: 'Optimized lighting usage'
        };
      default:
        return {
          value: 0,
          percentage: 0,
          unit: '',
          impact: ''
        };
    }
  };
  
  const savings = calculateSavings();
  
  // Get insights based on prediction type
  const getInsights = () => {
    switch (predictionType) {
      case 'energy':
        return [
          {
            id: 1,
            type: 'efficiency',
            title: 'Peak Usage Pattern',
            description: 'Energy consumption peaks at 6-8PM. Consider scheduling appliances outside this window.',
            icon: Zap
          },
          {
            id: 2,
            type: 'warning',
            title: 'Unusual Consumption',
            description: 'Thursday shows 15% higher than predicted usage. Check for anomalies in the kitchen.',
            icon: AlertTriangle
          },
          {
            id: 3,
            type: 'optimization',
            title: 'Weekend Optimization',
            description: 'Reducing standby power on weekends could save up to 2.3 kWh daily.',
            icon: Calendar
          }
        ];
      case 'temperature':
        return [
          {
            id: 1,
            type: 'efficiency',
            title: 'Temperature Drift',
            description: 'System takes 45 minutes to reach optimal temperature after adjustments.',
            icon: Thermometer
          },
          {
            id: 2,
            type: 'warning',
            title: 'Inconsistent Zones',
            description: 'Bedroom 2 temperature varies by 3°F compared to adjacent rooms.',
            icon: AlertTriangle
          },
          {
            id: 3,
            type: 'optimization',
            title: 'Pre-cooling Effectiveness',
            description: 'Morning pre-cooling is reducing afternoon energy usage by 8%.',
            icon: Clock
          }
        ];
      case 'lighting':
        return [
          {
            id: 1,
            type: 'efficiency',
            title: 'Natural Light Periods',
            description: 'South-facing rooms need artificial lighting 2.5 hours less than north-facing ones.',
            icon: Lightbulb
          },
          {
            id: 2,
            type: 'warning',
            title: 'Motion Sensor Issues',
            description: 'Bathroom lights staying on 35% longer than necessary. Check motion sensor.',
            icon: AlertTriangle
          },
          {
            id: 3,
            type: 'optimization',
            title: 'Brightness Optimization',
            description: 'Reducing living room brightness by 15% after 9PM would maintain comfort while saving energy.',
            icon: TrendingUp
          }
        ];
      default:
        return [];
    }
  };
  
  const insights = getInsights();
  
  return (
    <DashboardLayout>
      <div className="pb-10 space-y-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h1 className="font-orbitron text-3xl text-gradient-premium">AI Predictive Analysis</h1>
          <Button 
            variant="outline" 
            className="border-cosmic-teal/30 bg-cosmic-blue/30 hover:bg-cosmic-blue/50 text-white"
          >
            <Download className="mr-2 h-4 w-4" /> Export Report
          </Button>
        </div>
        
        {/* Filter Controls */}
        <div className="flex flex-wrap gap-6 bg-cosmic-blue/30 p-4 rounded-xl border border-white/10">
          <div>
            <div className="text-sm text-white/70 mb-2">Prediction Type</div>
            <ToggleGroup type="single" value={predictionType} onValueChange={(value) => value && setPredictionType(value)}>
              <ToggleGroupItem 
                value="energy" 
                className={cn("border border-white/10", predictionType === "energy" && "text-cosmic-teal border-cosmic-teal/50")}
                aria-label="Energy Consumption"
              >
                <Zap className="mr-1" size={16} />
                Energy
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="temperature" 
                className={cn("border border-white/10", predictionType === "temperature" && "text-cosmic-teal border-cosmic-teal/50")}
                aria-label="Temperature Optimization"
              >
                <Thermometer className="mr-1" size={16} />
                Temperature
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="lighting" 
                className={cn("border border-white/10", predictionType === "lighting" && "text-cosmic-teal border-cosmic-teal/50")}
                aria-label="Lighting Efficiency"
              >
                <Lightbulb className="mr-1" size={16} />
                Lighting
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          
          <div>
            <div className="text-sm text-white/70 mb-2">Time Range</div>
            <ToggleGroup type="single" value={timeRange} onValueChange={(value) => value && setTimeRange(value)}>
              <ToggleGroupItem 
                value="3d" 
                className={cn("border border-white/10", timeRange === "3d" && "text-cosmic-teal border-cosmic-teal/50")}
              >
                3 Days
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="7d" 
                className={cn("border border-white/10", timeRange === "7d" && "text-cosmic-teal border-cosmic-teal/50")}
              >
                7 Days
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
        
        {/* Prediction Chart */}
        <ModuleCard
          title={`${predictionType === 'energy' ? 'Energy Consumption' : predictionType === 'temperature' ? 'Temperature' : 'Lighting'} Prediction`}
          icon={<TrendingUp className="text-cosmic-teal" size={22} />}
          status="optimal"
          className="bg-gradient-to-br from-cosmic-blue/40 to-cosmic-blue/20"
        >
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00E5E5" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#00E5E5" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorPredicted" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FFAA00" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#FFAA00" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorAverage" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ffffff" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#ffffff" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                <XAxis 
                  dataKey="day" 
                  tick={{ fontSize: 12, fill: 'rgba(255,255,255,0.7)' }}
                  axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                />
                <YAxis 
                  tick={{ fontSize: 12, fill: 'rgba(255,255,255,0.7)' }}
                  axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                  tickFormatter={(value) => {
                    if (predictionType === 'energy' || predictionType === 'lighting') {
                      return `${value} kWh`;
                    } else {
                      return `${value}°F`;
                    }
                  }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(26, 42, 68, 0.9)', 
                    borderColor: 'rgba(0, 229, 229, 0.3)',
                    borderRadius: '8px',
                    fontSize: '12px'
                  }}
                  labelStyle={{ color: 'rgba(255,255,255,0.8)' }}
                  formatter={(value, name) => {
                    if (value === null) return ['Not yet recorded', name];
                    
                    if (predictionType === 'energy' || predictionType === 'lighting') {
                      return [`${value} kWh`, name];
                    } else {
                      return [`${value}°F`, name];
                    }
                  }}
                />
                <Legend 
                  wrapperStyle={{ paddingTop: '10px' }}
                  formatter={(value) => <span style={{ color: 'rgba(255,255,255,0.8)' }}>{value}</span>} 
                />
                <ReferenceLine 
                  x="Sun" 
                  stroke="rgba(255,255,255,0.5)" 
                  strokeDasharray="3 3" 
                  label={{ 
                    value: "Today", 
                    position: "insideTopLeft", 
                    fill: "rgba(255,255,255,0.7)",
                    fontSize: 12
                  }} 
                />
                <Area 
                  type="monotone" 
                  dataKey="actual" 
                  name="Actual" 
                  stroke="#00E5E5" 
                  fillOpacity={1}
                  fill="url(#colorActual)" 
                  strokeWidth={2}
                  activeDot={{ r: 6 }}
                />
                <Area 
                  type="monotone" 
                  dataKey="predicted" 
                  name="Predicted" 
                  stroke="#FFAA00" 
                  fillOpacity={1}
                  fill="url(#colorPredicted)" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                />
                <Area 
                  type="monotone" 
                  dataKey="average" 
                  name="Historical Average" 
                  stroke="#ffffff" 
                  fillOpacity={1}
                  fill="url(#colorAverage)" 
                  strokeWidth={1}
                  strokeOpacity={0.5}
                  strokeDasharray="3 3"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-cosmic-blue/30 p-4 rounded-lg border border-white/10">
              <div className="text-sm text-white/70 mb-1">Potential Savings</div>
              <div className="text-2xl font-orbitron text-cosmic-teal mb-1">
                {savings.value} {savings.unit}
              </div>
              <div className="flex items-center text-xs text-cosmic-amber">
                <TrendingUp size={12} className="mr-1" />
                {savings.percentage}% Improvement
              </div>
            </div>
            
            <div className="bg-cosmic-blue/30 p-4 rounded-lg border border-white/10">
              <div className="text-sm text-white/70 mb-1">Forecast Accuracy</div>
              <div className="text-2xl font-orbitron text-cosmic-teal mb-1">
                96.4%
              </div>
              <div className="text-xs text-white/50">
                Based on last 30 days of predictions
              </div>
            </div>
            
            <div className="bg-cosmic-blue/30 p-4 rounded-lg border border-white/10">
              <div className="text-sm text-white/70 mb-1">Environmental Impact</div>
              <div className="text-2xl font-orbitron text-cosmic-teal mb-1">
                -12.4 kg
              </div>
              <div className="text-xs text-white/50">
                CO₂ emissions reduction
              </div>
            </div>
          </div>
        </ModuleCard>
        
        {/* AI Insights Module */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <ModuleCard
              title="AI-Generated Insights"
              icon={<TrendingUp className="text-cosmic-amber" size={22} />}
              className="bg-gradient-to-br from-cosmic-blue/40 to-cosmic-blue/20 h-full"
            >
              <div className="space-y-4">
                {insights.map(insight => (
                  <div 
                    key={insight.id}
                    className={cn(
                      "p-4 rounded-lg border flex",
                      insight.type === 'efficiency' && "bg-cosmic-teal/10 border-cosmic-teal/30",
                      insight.type === 'warning' && "bg-cosmic-amber/10 border-cosmic-amber/30",
                      insight.type === 'optimization' && "bg-white/10 border-white/30"
                    )}
                  >
                    <div className={cn(
                      "w-10 h-10 rounded-full mr-4 flex items-center justify-center flex-shrink-0",
                      insight.type === 'efficiency' && "bg-cosmic-teal/20",
                      insight.type === 'warning' && "bg-cosmic-amber/20",
                      insight.type === 'optimization' && "bg-white/10"
                    )}>
                      <insight.icon 
                        size={20} 
                        className={cn(
                          insight.type === 'efficiency' && "text-cosmic-teal",
                          insight.type === 'warning' && "text-cosmic-amber",
                          insight.type === 'optimization' && "text-white"
                        )} 
                      />
                    </div>
                    <div>
                      <h3 className="font-orbitron text-white text-base mb-1">{insight.title}</h3>
                      <p className="text-white/70 text-sm">{insight.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ModuleCard>
          </div>
          
          <div>
            <ModuleCard
              title="Consumption Breakdown"
              icon={<Zap className="text-cosmic-teal" size={22} />}
              className="bg-gradient-to-br from-cosmic-blue/40 to-cosmic-blue/20 h-full"
            >
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart 
                    data={[
                      {name: 'Living Room', value: 28},
                      {name: 'Kitchen', value: 35},
                      {name: 'Bedroom', value: 15},
                      {name: 'Bathroom', value: 12},
                      {name: 'Other', value: 10},
                    ]}
                    margin={{top: 5, right: 5, left: 5, bottom: 5}}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                    <XAxis 
                      dataKey="name" 
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
                      formatter={(value) => [`${value}%`, 'Usage']}
                    />
                    <Bar 
                      dataKey="value" 
                      name="Usage"
                      fill="#00E5E5"
                      radius={[4, 4, 0, 0]} 
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </ModuleCard>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Predictions;
