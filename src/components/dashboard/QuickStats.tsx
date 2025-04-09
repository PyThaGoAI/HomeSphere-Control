
import { Battery, Droplets, Thermometer, Plug } from 'lucide-react';

const QuickStats = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {[
        {
          icon: Thermometer,
          title: "Temperature",
          value: "22°C",
          trend: "Optimal",
          color: "cosmic-teal"
        },
        {
          icon: Droplets,
          title: "Humidity",
          value: "45%",
          trend: "Normal",
          color: "cosmic-teal"
        },
        {
          icon: Plug,
          title: "Energy",
          value: "1.2 kW",
          trend: "-5% vs. yesterday",
          color: "cosmic-amber"
        },
        {
          icon: Battery,
          title: "Battery",
          value: "90%",
          trend: "4h remaining",
          color: "cosmic-teal"
        }
      ].map((stat, index) => (
        <div 
          key={index} 
          className="bg-cosmic-blue/40 backdrop-blur-md rounded-xl border border-white/10 p-4 hover:border-cosmic-teal/30 transition-all duration-300"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-white/60 text-sm font-medium mb-1">{stat.title}</p>
              <h3 className="text-2xl font-orbitron">{stat.value}</h3>
              <p className={`text-xs text-${stat.color}`}>{stat.trend}</p>
            </div>
            <div className={`p-2 rounded-lg bg-${stat.color}/10`}>
              <stat.icon className={`text-${stat.color}`} size={20} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuickStats;
