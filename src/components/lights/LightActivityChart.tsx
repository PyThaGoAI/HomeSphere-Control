
import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { ChartContainer, ChartTooltipContent, ChartConfig } from '@/components/ui/chart';
import { TrendingUp } from 'lucide-react';

// Mock data generation for light usage over the past 24 hours
const generateLightActivityData = () => {
  const data = [];
  const now = new Date();
  for (let i = 0; i < 24; i++) {
    const hour = new Date(now);
    hour.setHours(now.getHours() - 23 + i);
    
    let usage = 0.2 + Math.random() * 0.1; // Base light usage
    
    // Simulate higher usage during evening and morning
    if (hour.getHours() >= 6 && hour.getHours() <= 9) { // Morning
      usage += 0.3 + Math.random() * 0.2;
    }
    if (hour.getHours() >= 18 && hour.getHours() <= 22) { // Evening
      usage += 0.4 + Math.random() * 0.3;
    }
    // Lower usage during deep night and midday
    if ((hour.getHours() >= 0 && hour.getHours() <= 5) || (hour.getHours() >=10 && hour.getHours() <= 16)) {
      usage = Math.max(0.1, usage - 0.1 - Math.random() * 0.1);
    }
    
    data.push({
      time: `${String(hour.getHours()).padStart(2, '0')}:00`,
      usage: parseFloat(usage.toFixed(2)),
    });
  }
  return data;
};

const chartConfig = {
  usage: {
    label: "Utilizare (kWh)",
    color: "hsl(180, 100%, 45%)", // cosmic-teal like color
    icon: TrendingUp,
  },
} satisfies ChartConfig;

const LightActivityChart: React.FC = () => {
  const [activityData, setActivityData] = useState(generateLightActivityData());

  useEffect(() => {
    // Optionally, refresh data periodically or on specific events
    const interval = setInterval(() => {
      // setActivityData(generateLightActivityData()); // Uncomment to make chart dynamic
    }, 60000); // Refresh every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <ChartContainer config={chartConfig} className="h-full w-full">
      <AreaChart
        accessibilityLayer
        data={activityData}
        margin={{
          left: 0,
          right: 10,
          top: 10,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="fillUsage" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="var(--color-usage)" stopOpacity={0.8} />
            <stop offset="95%" stopColor="var(--color-usage)" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
        <XAxis
          dataKey="time"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value: string, index: number) => {
            // Show every 3rd label to prevent clutter
            if (index % 3 === 0) {
              return value;
            }
            return "";
          }}
          stroke="rgba(255, 255, 255, 0.7)"
          fontSize={12}
        />
        <YAxis 
          tickLine={false} 
          axisLine={false} 
          tickMargin={8}
          stroke="rgba(255, 255, 255, 0.7)"
          fontSize={12}
          domain={['auto', 'auto']}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="line" />}
          defaultCellStyle={{
            backgroundColor: 'transparent',
            border: 'none',
          }}
          contentStyle={{ 
            backgroundColor: 'rgba(10, 20, 40, 0.85)', 
            borderColor: 'var(--color-usage)',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            color: '#FFFFFF'
          }}
          itemStyle={{ color: '#E0E0E0' }}
          labelStyle={{ color: 'rgba(255, 255, 255, 0.9)' }}
        />
        <Area
          dataKey="usage"
          type="monotone"
          fill="url(#fillUsage)"
          strokeWidth={2}
          stroke="var(--color-usage)"
          stackId="a"
        />
      </AreaChart>
    </ChartContainer>
  );
};

export default LightActivityChart;

