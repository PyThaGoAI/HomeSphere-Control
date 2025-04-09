
import { Film, Moon, Sunrise, Coffee, Tv, Utensils } from 'lucide-react';
import ModuleCard from './ModuleCard';

const scenes = [
  {
    id: 'movie',
    name: 'Movie Night',
    icon: Tv,
    color: 'bg-cosmic-amber/20',
    iconColor: 'text-cosmic-amber'
  },
  {
    id: 'sleep',
    name: 'Sleep Mode',
    icon: Moon,
    color: 'bg-indigo-500/20',
    iconColor: 'text-indigo-400'
  },
  {
    id: 'morning',
    name: 'Morning Routine',
    icon: Sunrise,
    color: 'bg-orange-400/20',
    iconColor: 'text-orange-300'
  },
  {
    id: 'dinner',
    name: 'Dinner Time',
    icon: Utensils,
    color: 'bg-red-400/20',
    iconColor: 'text-red-300'
  },
  {
    id: 'focus',
    name: 'Focus Mode',
    icon: Coffee,
    color: 'bg-cosmic-teal/20',
    iconColor: 'text-cosmic-teal'
  },
];

const ScenesModule = () => {
  return (
    <ModuleCard 
      title="Scenes" 
      icon={<Film className="text-cosmic-teal" />}
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {scenes.map(scene => (
          <button 
            key={scene.id}
            className={`${scene.color} rounded-xl p-3 flex flex-col items-center justify-center text-center hover:scale-105 transition-transform`}
          >
            <div className="p-3 rounded-full bg-cosmic-blue/50 mb-2">
              <scene.icon size={18} className={scene.iconColor} />
            </div>
            <span className="text-xs font-medium">{scene.name}</span>
          </button>
        ))}
      </div>
    </ModuleCard>
  );
};

export default ScenesModule;
