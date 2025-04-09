
import DashboardLayout from '@/components/layout/DashboardLayout';
import { useState } from 'react';
import { Film, Moon, Sunrise, Coffee, Tv, Utensils, Plus, Edit, Trash, Check } from 'lucide-react';

const SceneCard = ({ scene, onActivate, onEdit, onDelete, isActive }) => {
  return (
    <div 
      className={`p-6 bg-cosmic-blue/30 backdrop-blur-md border rounded-xl transition-all ${
        isActive ? 'border-cosmic-amber shadow-lg shadow-cosmic-amber/10' : 'border-cosmic-teal/20 hover:border-cosmic-teal/40'
      }`}
    >
      <div className="flex items-center mb-4">
        <div className={`p-3 rounded-full ${scene.color}`}>
          <scene.icon size={20} className={scene.iconColor} />
        </div>
        <h3 className="ml-3 font-medium">{scene.name}</h3>
        {isActive && (
          <div className="ml-auto px-2 py-0.5 bg-cosmic-amber/20 rounded-full text-cosmic-amber text-xs flex items-center">
            <Check size={12} className="mr-1" />
            Active
          </div>
        )}
      </div>
      
      <p className="text-sm text-white/70 mb-4">{scene.description}</p>
      
      <div className="flex items-center text-xs text-white/60 mb-4">
        <div>Affects: {scene.affects.join(", ")}</div>
      </div>
      
      <div className="flex space-x-2">
        <button 
          onClick={() => onActivate(scene.id)}
          className={`flex-1 py-2 rounded-lg transition-colors ${
            isActive ? 'bg-cosmic-amber/50 text-cosmic-amber' : 'bg-cosmic-blue/50 hover:bg-cosmic-blue/70'
          }`}
        >
          {isActive ? 'Activated' : 'Activate'}
        </button>
        <button 
          onClick={() => onEdit(scene.id)}
          className="p-2 bg-cosmic-blue/50 rounded-lg hover:bg-cosmic-blue/70 transition-colors"
        >
          <Edit size={16} />
        </button>
        <button 
          onClick={() => onDelete(scene.id)}
          className="p-2 bg-cosmic-blue/50 rounded-lg hover:bg-cosmic-blue/70 transition-colors"
        >
          <Trash size={16} />
        </button>
      </div>
    </div>
  );
};

const Scenes = () => {
  const [activeScene, setActiveScene] = useState("movie");
  const [scenes, setScenes] = useState([
    {
      id: "movie",
      name: "Movie Night",
      icon: Tv,
      color: "bg-cosmic-amber/20",
      iconColor: "text-cosmic-amber",
      description: "Dims lights to 20%, closes blinds, and sets living room to warm light.",
      affects: ["Lights", "Blinds", "TV"]
    },
    {
      id: "sleep",
      name: "Sleep Mode",
      icon: Moon,
      color: "bg-indigo-500/20",
      iconColor: "text-indigo-400",
      description: "Turns off all lights except hallway (5%), locks doors, and sets room to 19°C.",
      affects: ["Lights", "Climate", "Security"]
    },
    {
      id: "morning",
      name: "Morning Routine",
      icon: Sunrise,
      color: "bg-orange-400/20",
      iconColor: "text-orange-300",
      description: "Gradually increases lights (30-100%), opens blinds, and sets temp to 22°C.",
      affects: ["Lights", "Blinds", "Climate"]
    },
    {
      id: "dinner",
      name: "Dinner Time",
      icon: Utensils,
      color: "bg-red-400/20",
      iconColor: "text-red-300",
      description: "Dining area to 80% warm light, kitchen to 100%, plays dinner music.",
      affects: ["Lights", "Music"]
    },
    {
      id: "focus",
      name: "Focus Mode",
      icon: Coffee,
      color: "bg-cosmic-teal/20",
      iconColor: "text-cosmic-teal",
      description: "Office lights to 100% cool tone, minimal notifications, pleasant background music.",
      affects: ["Lights", "Notifications", "Music"]
    },
  ]);

  const handleActivateScene = (id) => {
    setActiveScene(id);
  };

  const handleEditScene = (id) => {
    // Would open an edit modal in a real app
    console.log('Edit scene', id);
  };

  const handleDeleteScene = (id) => {
    // Would show a confirmation in a real app
    setScenes(scenes.filter(scene => scene.id !== id));
    if (activeScene === id) {
      setActiveScene(null);
    }
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-6">
        <div className="flex items-center">
          <h1 className="text-2xl font-orbitron">Scenes</h1>
          <div className="ml-auto">
            <button className="px-4 py-2 bg-cosmic-blue/50 rounded-lg hover:bg-cosmic-blue/70 transition-colors flex items-center">
              <Plus size={18} className="mr-2" />
              Create New Scene
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {scenes.map((scene) => (
            <SceneCard 
              key={scene.id} 
              scene={scene} 
              isActive={scene.id === activeScene}
              onActivate={handleActivateScene}
              onEdit={handleEditScene}
              onDelete={handleDeleteScene}
            />
          ))}
          
          <div className="p-6 bg-cosmic-blue/20 border border-dashed border-cosmic-teal/30 rounded-xl flex flex-col items-center justify-center text-center">
            <div className="p-4 rounded-full bg-cosmic-blue/30 mb-3">
              <Plus size={24} className="text-cosmic-teal" />
            </div>
            <h3 className="font-medium mb-2">Create Custom Scene</h3>
            <p className="text-sm text-white/70 mb-4">
              Build your own scene with custom lighting, climate, and security settings
            </p>
            <button className="px-4 py-2 bg-cosmic-blue/50 rounded-lg hover:bg-cosmic-blue/70 transition-colors text-sm">
              Get Started
            </button>
          </div>
        </div>
        
        <div className="p-6 bg-cosmic-blue/30 backdrop-blur-md border border-cosmic-teal/20 rounded-xl">
          <h2 className="font-orbitron text-lg mb-4">Scene Scheduling</h2>
          <div className="space-y-3">
            {[
              { scene: "Morning Routine", time: "07:00 AM", days: "Weekdays", status: "active" },
              { scene: "Sleep Mode", time: "11:00 PM", days: "Every day", status: "active" },
              { scene: "Focus Mode", time: "09:00 AM", days: "Weekdays", status: "inactive" }
            ].map((schedule, index) => (
              <div 
                key={index} 
                className={`p-3 rounded-lg flex items-center ${
                  schedule.status === "active" ? 'bg-cosmic-blue/40' : 'bg-cosmic-blue/20'
                }`}
              >
                <div className="w-2 h-2 rounded-full mr-3 bg-cosmic-teal"></div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <span className="font-medium">{schedule.scene}</span>
                    <span className="text-sm">{schedule.time}</span>
                  </div>
                  <div className="text-xs text-white/70">Repeats: {schedule.days}</div>
                </div>
                <div className="flex items-center ml-4">
                  <div className="flex items-center">
                    <span className="text-xs text-white/70 mr-2">
                      {schedule.status === "active" ? "Enabled" : "Disabled"}
                    </span>
                    <div className={`w-10 h-5 ${schedule.status === "active" ? 'bg-cosmic-teal/50' : 'bg-cosmic-blue/50'} rounded-full flex items-center`}>
                      <div className={`w-4 h-4 rounded-full ${schedule.status === "active" ? 'bg-cosmic-teal ml-0.5' : 'bg-white/70 ml-5'}`}></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <button className="px-4 py-2 bg-cosmic-blue/50 rounded-lg hover:bg-cosmic-blue/70 transition-colors text-sm">
              Add New Schedule
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Scenes;
