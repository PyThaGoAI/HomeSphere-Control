
import { useState, useEffect } from 'react';
import { Zap, TrendingUp, LightbulbOff } from 'lucide-react';
import ModuleCard from './ModuleCard';
import { cn } from '@/lib/utils';
import { 
  AreaChart, 
  Area,
  XAxis, 
  YAxis, 
  ResponsiveContainer, 
  ReferenceLine,
  Tooltip
} from 'recharts';

// Generate mock energy data for the past 24 hours
const generateEnergyData = () => {
  const data = [];
  const now = new Date();
  for (let i = 0; i < 24; i++) {
    const hour = new Date(now);
    hour.setHours(now.getHours() - 23 + i);
    
    // Create a realistic energy usage pattern
    let usage = 0.8 + Math.random() * 0.3; // Base usage
    
    // Morning peak
    if (hour.getHours() >= 6 && hour.getHours() <= 9) {
      usage += 0.7 + Math.random() * 0.5;
    }
    
    // Evening peak
    if (hour.getHours() >= 17 && hour.getHours() <= 22) {
      usage += 0.9 + Math.random() * 0.8;
    }
    
    // Night low
    if (hour.getHours() >= 0 && hour.getHours() <= 5) {
      usage = 0.4 + Math.random() * 0.2;
    }
    
    data.push({
      time: hour.getHours() + ':00',
      usage: parseFloat(usage.toFixed(1)),
      fullTime: hour
    });
  }
  return data;
};

const EnergyModule = () => {
  const [energyData, setEnergyData] = useState(generateEnergyData());
  const [currentUsage, setCurrentUsage] = useState(1.2);

  // Update current usage every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentUsage(1 + (Math.random() * 0.5));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Calculate total energy usage
  const totalUsage = energyData.reduce((sum, dataPoint) => sum + dataPoint.usage, 0);
  
  // Calculate average usage
  const avgUsage = totalUsage / energyData.length;
  
  // Determine if current usage is high
  const isHighUsage = currentUsage > avgUsage * 1.2;

  return (
    <ModuleCard 
      title="Energy Insights" 
      icon={<Zap className={isHighUsage ? "text-cosmic-amber" : "text-cosmic-teal"} size={22} />}
      status={isHighUsage ? 'warning' : 'optimal'}
      floating
      className="bg-gradient-to-br from-cosmic-blue/40 to-cosmic-blue/20"
    >
      <div className="flex justify-between items-center mb-4 bg-cosmic-blue/30 p-3.5 rounded-lg border border-white/10">
        <div>
          <div className="text-xs text-white/70 uppercase tracking-wide font-light">Current Usage</div>
          <div className="text-2xl font-orbitron mt-1 bg-gradient-to-r from-white via-cosmic-teal to-white bg-clip-text text-transparent">
            {currentUsage.toFixed(1)} <span className="text-sm">kW</span>
          </div>
        </div>
        
        <div className="text-right border-l border-white/10 pl-5">
          <div className="text-xs text-white/70 uppercase tracking-wide font-light">Today's Total</div>
          <div className="text-xl font-orbitron mt-1">
            {totalUsage.toFixed(1)} <span className="text-sm">kWh</span>
          </div>
        </div>
      </div>
      
      <div className="h-40 mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={energyData} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
            <defs>
              <linearGradient id="energyGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00E5E5" stopOpacity={0.9}/>
                <stop offset="95%" stopColor="#00E5E5" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="time" 
              tick={{ fontSize: 10, fill: 'rgba(255,255,255,0.8)' }} 
              axisLine={{ stroke: 'rgba(255,255,255,0.2)' }}
              tickLine={false}
              interval={3}
            />
            <YAxis 
              hide={true}
              domain={[0, 'dataMax + 0.5']}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(26, 42, 68, 0.9)', 
                borderColor: 'rgba(0, 229, 229, 0.3)',
                borderRadius: '8px',
                fontSize: '12px',
                padding: '10px'
              }}
              itemStyle={{ color: '#FFFFFF', fontWeight: '500' }}
              labelStyle={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '5px' }}
            />
            <ReferenceLine 
              y={avgUsage} 
              stroke="rgba(255, 170, 0, 0.5)" 
              strokeDasharray="3 3" 
              strokeWidth={2}
            />
            <Area 
              type="monotone" 
              dataKey="usage" 
              stroke="#00E5E5" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#energyGradient)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      {/* AI Energy Tip */}
      <div className="mt-4 p-3.5 bg-cosmic-blue/30 rounded-lg flex items-center border border-cosmic-amber/20">
        <div className="p-2.5 bg-cosmic-amber/20 rounded-full mr-3.5">
          <LightbulbOff size={20} className="text-cosmic-amber" />
        </div>
        <div>
          <div className="text-base font-medium tracking-wide">Energy Saving Tip</div>
          <div className="text-sm text-white/80 mt-0.5">Dim lights 10% to save approximately 2 kWh per day</div>
        </div>
      </div>
    </ModuleCard>
  );
};

export default EnergyModule;
