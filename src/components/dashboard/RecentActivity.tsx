
import { Clock, Lock, Lightbulb, Thermometer } from 'lucide-react';
import { cn } from '@/lib/utils';

const activities = [
  {
    id: 1,
    type: "security",
    icon: Lock,
    message: "Front door locked",
    time: "2 minutes ago",
    colorClass: "bg-cosmic-teal/20",
    textColorClass: "text-cosmic-teal"
  },
  {
    id: 2,
    type: "light",
    icon: Lightbulb,
    message: "Living room lights turned on",
    time: "15 minutes ago",
    colorClass: "bg-cosmic-amber/20",
    textColorClass: "text-cosmic-amber"
  },
  {
    id: 3,
    type: "climate",
    icon: Thermometer,
    message: "Temperature set to 22°C",
    time: "32 minutes ago",
    colorClass: "bg-cosmic-teal/20",
    textColorClass: "text-cosmic-teal"
  },
  {
    id: 4,
    type: "security",
    icon: Lock,
    message: "Garage door opened",
    time: "1 hour ago",
    colorClass: "bg-cosmic-amber/20",
    textColorClass: "text-cosmic-amber"
  },
];

const RecentActivity = () => {
  return (
    <div className="module-card h-full">
      <div className="flex items-center mb-4">
        <Clock size={20} className="text-cosmic-teal mr-2.5" />
        <h3 className="font-orbitron text-xl tracking-wide bg-gradient-to-r from-white via-cosmic-teal to-white bg-clip-text text-transparent">Recent Activity</h3>
      </div>
      
      <div className="space-y-3.5">
        {activities.map((activity) => (
          <div 
            key={activity.id} 
            className="flex items-center p-3.5 bg-cosmic-blue/60 rounded-lg border border-white/5 hover:border-white/10 transition-all duration-300 hover:translate-x-0.5"
          >
            <div className={cn("p-2.5 rounded-full mr-3.5", activity.colorClass)}>
              <activity.icon size={18} className={activity.textColorClass} />
            </div>
            <div className="flex-1">
              <p className="text-base font-medium">{activity.message}</p>
              <p className="text-xs text-white/60 font-light tracking-wide mt-0.5">{activity.time}</p>
            </div>
            <div className="w-2 h-2 rounded-full bg-white/20"></div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-5 py-2.5 px-4 bg-cosmic-blue/50 hover:bg-cosmic-blue/70 rounded-lg border border-cosmic-teal/10 text-sm tracking-wide transition-all duration-300 font-medium">
        View All Activity
      </button>
    </div>
  );
};

export default RecentActivity;
