
import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartTooltipContent, ChartConfig, ChartTooltip } from '@/components/ui/chart';
import { Thermometer } from 'lucide-react';

// Mock data generation for temperature history over the past 24 hours
const generateTemperatureHistoryData = () => {
  const data = [];
  const now = new Date();
  for (let i = 0; i < 24; i++) {
    const hour = new Date(now);
    hour.setHours(now.getHours() - 23 + i);
    
    let baseTemp = 20; // Base temperature
    const hourOfDay = hour.getHours();

    if (hourOfDay >= 0 && hourOfDay < 6) { // Night (18-20°C)
      baseTemp -= (Math.random() * 2);
    } else if (hourOfDay >= 6 && hourOfDay < 9) { // Morning rise (20-22°C)
      baseTemp += (hourOfDay - 6) * 0.6 + Math.random();
    } else if (hourOfDay >= 9 && hourOfDay < 14) { // Late Morning/Midday (21-23°C)
        baseTemp += 1.5 + Math.random();
    } else if (hourOfDay >= 14 && hourOfDay < 18) { // Afternoon peak (22-24°C)
      baseTemp += 2.5 + Math.random() * 1.5;
    } else if (hourOfDay >= 18 && hourOfDay < 21) { // Evening (21-23°C)
      baseTemp += 1 - (hourOfDay - 18) * 0.5 + Math.random();
    }
     else { // Late Evening/Night cool down (19-21°C)
      baseTemp -= (hourOfDay - 21) * 0.7 + Math.random();
    }
    baseTemp = Math.max(18, Math.min(25, baseTemp)); // Clamp temperature
    
    data.push({
      time: `${String(hour.getHours()).padStart(2, '0')}:00`,
      temperature: parseFloat(baseTemp.toFixed(1)),
    });
  }
  return data;
};

const chartConfig = {
  temperature: {
    label: "Temperatura",
    color: "hsl(180, 100%, 45%)", // cosmic-teal
    icon: Thermometer,
  },
} satisfies ChartConfig;

const TemperatureHistoryChart: React.FC = () => {
  const [historyData, setHistoryData] = useState(generateTemperatureHistoryData());

  useEffect(() => {
    // Data is static for this example
  }, []);

  return (
    <ChartContainer config={chartConfig} className="h-full w-full">
      <AreaChart
        accessibilityLayer
        data={historyData}
        margin={{
          left: -20, // Show YAxis labels
          right: 10,
          top: 10,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="fillTemperature" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="var(--color-temperature)" stopOpacity={0.8} />
            <stop offset="95%" stopColor="var(--color-temperature)" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
        <XAxis
          dataKey="time"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value: string, index: number) => (index % 3 === 0 ? value : "")}
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
          unit="°C"
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="line" />}
          contentStyle={{ 
            backgroundColor: 'rgba(10, 20, 40, 0.85)', 
            borderColor: 'var(--color-temperature)',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            color: '#FFFFFF'
          }}
          itemStyle={{ color: '#E0E0E0' }}
          labelStyle={{ color: 'rgba(255, 255, 255, 0.9)' }}
        />
        <Area
          dataKey="temperature"
          type="monotone"
          fill="url(#fillTemperature)"
          strokeWidth={2}
          stroke="var(--color-temperature)"
          name="Temperatura"
          unit="°C"
        />
      </AreaChart>
    </ChartContainer>
  );
};

export default TemperatureHistoryChart;
