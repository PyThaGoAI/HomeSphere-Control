
import DashboardLayout from '@/components/layout/DashboardLayout';
import { useState } from 'react';
import { 
  AreaChart, 
  Area,
  XAxis, 
  YAxis, 
  ResponsiveContainer, 
  ReferenceLine,
  Tooltip
} from 'recharts';

// Sample energy data
const dailyData = [
  { time: '00:00', usage: 0.4 },
  { time: '02:00', usage: 0.3 },
  { time: '04:00', usage: 0.4 },
  { time: '06:00', usage: 1.2 },
  { time: '08:00', usage: 1.8 },
  { time: '10:00', usage: 1.1 },
  { time: '12:00', usage: 1.3 },
  { time: '14:00', usage: 0.9 },
  { time: '16:00', usage: 1.2 },
  { time: '18:00', usage: 2.0 },
  { time: '20:00', usage: 2.2 },
  { time: '22:00', usage: 1.5 },
];

const weeklyData = [
  { day: 'Mon', usage: 12.4 },
  { day: 'Tue', usage: 13.1 },
  { day: 'Wed', usage: 12.8 },
  { day: 'Thu', usage: 14.2 },
  { day: 'Fri', usage: 15.3 },
  { day: 'Sat', usage: 16.5 },
  { day: 'Sun', usage: 15.1 },
];

const Energy = () => {
  const [timeRange, setTimeRange] = useState("daily");
  const data = timeRange === "daily" ? dailyData : weeklyData;
  const xKey = timeRange === "daily" ? "time" : "day";
  
  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 w-full">
          <h1 className="text-2xl font-orbitron">Energy Insights</h1>
          <div className="flex flex-wrap gap-2 sm:space-x-3">
            <button 
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-colors ${timeRange === 'daily' ? 'bg-cosmic-teal/30 text-cosmic-teal' : 'bg-cosmic-blue/50 hover:bg-cosmic-blue/70'}`}
              onClick={() => setTimeRange('daily')}
            >
              Daily
            </button>
            <button 
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-colors ${timeRange === 'weekly' ? 'bg-cosmic-teal/30 text-cosmic-teal' : 'bg-cosmic-blue/50 hover:bg-cosmic-blue/70'}`}
              onClick={() => setTimeRange('weekly')}
            >
              Weekly
            </button>
            <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-cosmic-blue/50 rounded-lg hover:bg-cosmic-blue/70 transition-colors">
              Download Data
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-4 sm:p-6 bg-cosmic-blue/30 backdrop-blur-md border border-cosmic-teal/20 rounded-xl flex items-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-cosmic-blue/60 flex items-center justify-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-cosmic-teal animate-pulse-glow"></div>
            </div>
            <div className="ml-4">
              <div className="text-xs sm:text-sm text-white/70">Current Usage</div>
              <div className="text-xl sm:text-2xl font-orbitron">1.2 kW</div>
            </div>
          </div>
          
          <div className="p-4 sm:p-6 bg-cosmic-blue/30 backdrop-blur-md border border-cosmic-teal/20 rounded-xl flex items-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-cosmic-blue/60 flex items-center justify-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-cosmic-amber"></div>
            </div>
            <div className="ml-4">
              <div className="text-xs sm:text-sm text-white/70">{timeRange === 'daily' ? "Today's Total" : "Weekly Total"}</div>
              <div className="text-xl sm:text-2xl font-orbitron">{timeRange === 'daily' ? "15.8" : "98.4"} kWh</div>
            </div>
          </div>
          
          <div className="p-4 sm:p-6 bg-cosmic-blue/30 backdrop-blur-md border border-cosmic-teal/20 rounded-xl flex items-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-cosmic-blue/60 flex items-center justify-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/60"></div>
            </div>
            <div className="ml-4">
              <div className="text-xs sm:text-sm text-white/70">Estimated Cost</div>
              <div className="text-xl sm:text-2xl font-orbitron">${timeRange === 'daily' ? "3.95" : "24.60"}</div>
            </div>
          </div>
          
          <div className="p-4 sm:p-6 bg-cosmic-blue/30 backdrop-blur-md border border-cosmic-teal/20 rounded-xl flex items-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-cosmic-blue/60 flex items-center justify-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-cosmic-teal/60"></div>
            </div>
            <div className="ml-4">
              <div className="text-xs sm:text-sm text-white/70">Average</div>
              <div className="text-xl sm:text-2xl font-orbitron">{timeRange === 'daily' ? "1.3" : "14.0"} kWh</div>
            </div>
          </div>
        </div>
        
        <div className="p-4 sm:p-6 bg-cosmic-blue/30 backdrop-blur-md border border-cosmic-teal/20 rounded-xl">
          <h2 className="font-orbitron text-base sm:text-lg mb-4">Energy Consumption</h2>
          <div className="h-48 sm:h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
                <defs>
                  <linearGradient id="energyGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00E5E5" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#00E5E5" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis 
                  dataKey={xKey} 
                  tick={{ fontSize: 10, fill: 'rgba(255,255,255,0.7)' }} 
                  axisLine={{ stroke: 'rgba(255,255,255,0.2)' }}
                  tickLine={false}
                  interval={timeRange === "daily" ? 2 : 0}
                />
                <YAxis 
                  tick={{ fontSize: 10, fill: 'rgba(255,255,255,0.7)' }}
                  axisLine={{ stroke: 'rgba(255,255,255,0.2)' }}
                  tickLine={false}
                  domain={[0, 'dataMax + 0.5']}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(26, 42, 68, 0.9)', 
                    borderColor: 'rgba(0, 229, 229, 0.3)',
                    borderRadius: '8px',
                    fontSize: '12px'
                  }}
                  itemStyle={{ color: '#FFFFFF' }}
                  labelStyle={{ color: 'rgba(255, 255, 255, 0.7)' }}
                />
                <ReferenceLine 
                  y={timeRange === "daily" ? 1.3 : 14.0} 
                  stroke="rgba(255, 170, 0, 0.5)" 
                  strokeDasharray="3 3" 
                />
                <Area 
                  type="monotone" 
                  dataKey="usage" 
                  stroke="#00E5E5" 
                  fillOpacity={1} 
                  fill="url(#energyGradient)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <div className="p-4 sm:p-6 bg-cosmic-blue/30 backdrop-blur-md border border-cosmic-teal/20 rounded-xl">
            <h2 className="font-orbitron text-base sm:text-lg mb-4">Device Usage</h2>
            <div className="space-y-3">
              {[
                { device: "HVAC System", usage: 5.2, percentage: 38 },
                { device: "Kitchen Appliances", usage: 3.8, percentage: 27 },
                { device: "Lighting", usage: 2.1, percentage: 15 },
                { device: "Entertainment", usage: 1.8, percentage: 13 },
                { device: "Other Devices", usage: 0.9, percentage: 7 }
              ].map((device) => (
                <div key={device.device} className="flex flex-wrap items-center">
                  <span className="text-xs sm:text-sm w-24 sm:w-44 mb-1 sm:mb-0">{device.device}</span>
                  <div className="flex-1 mx-2 sm:mx-4 h-2 bg-cosmic-blue/50 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-cosmic-teal"
                      style={{ width: `${device.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-xs sm:text-sm text-white/70 min-w-[60px] text-right">{device.usage} kWh</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="p-4 sm:p-6 bg-cosmic-blue/30 backdrop-blur-md border border-cosmic-teal/20 rounded-xl">
            <h2 className="font-orbitron text-base sm:text-lg mb-4">Energy Saving Tips</h2>
            <div className="space-y-3 sm:space-y-4">
              {[
                { tip: "Dim lights 10% to save approximately 2 kWh per day", saving: "~$0.50" },
                { tip: "Lower thermostat by 2°C during sleep hours", saving: "~$1.20" },
                { tip: "Unplug entertainment devices when not in use", saving: "~$0.75" },
                { tip: "Run dishwasher during off-peak hours", saving: "~$0.40" }
              ].map((item, index) => (
                <div key={index} className="p-2 sm:p-3 bg-cosmic-blue/40 rounded-lg flex items-center">
                  <div className="p-1 sm:p-2 bg-cosmic-amber/20 rounded-full mr-2 sm:mr-3">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-cosmic-amber"></div>
                  </div>
                  <div className="flex-1">
                    <span className="text-xs sm:text-sm">{item.tip}</span>
                    <div className="text-xs text-cosmic-teal">Potential saving: {item.saving}/day</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Energy;
