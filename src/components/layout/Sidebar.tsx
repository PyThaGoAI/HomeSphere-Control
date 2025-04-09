
import { useState } from 'react';
import { 
  Home, 
  Lightbulb, 
  Thermometer,
  Lock, 
  Zap, 
  Settings, 
  FileText,
  Film,
  Bot,
  Users,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState('home');

  const menuItems = [
    { id: 'home', icon: Home, label: 'Home Hub' },
    { id: 'lights', icon: Lightbulb, label: 'Lights' },
    { id: 'climate', icon: Thermometer, label: 'Climate' },
    { id: 'security', icon: Lock, label: 'Security Hub' },
    { id: 'energy', icon: Zap, label: 'Energy Insights' },
    { id: 'scenes', icon: Film, label: 'Scenes' },
    { id: 'assistant', icon: Bot, label: 'Sphere AI' },
    { id: 'guests', icon: Users, label: 'Guests' },
    { id: 'logs', icon: FileText, label: 'Activity Log' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <aside 
      className={cn(
        "bg-cosmic-blue/30 backdrop-blur-md border-r border-cosmic-teal/20 h-full transition-all duration-300 overflow-hidden relative z-10",
        collapsed ? "w-[70px]" : "w-[280px]"
      )}
    >
      <div className="flex flex-col h-full">
        <div className="py-4 space-y-1 flex-1">
          {menuItems.map((item) => (
            <div 
              key={item.id} 
              className={cn(
                "sidebar-item relative cursor-pointer",
                activeItem === item.id && "active"
              )}
              onClick={() => setActiveItem(item.id)}
            >
              {activeItem === item.id && (
                <div className="absolute left-0 top-1/2 w-1 h-7 transform -translate-y-1/2 bg-cosmic-teal rounded-r-full shadow-[0_0_8px_rgba(0,229,229,0.8)]" />
              )}
              <item.icon size={20} className={activeItem === item.id ? "text-cosmic-teal" : ""} />
              {!collapsed && <span className="transition-opacity">{item.label}</span>}
            </div>
          ))}
        </div>
        
        {/* Collapse toggle button */}
        <div className="p-4 border-t border-cosmic-teal/20">
          <button 
            onClick={() => setCollapsed(!collapsed)}
            className="sidebar-item justify-center md:justify-start w-full"
          >
            {collapsed ? <ChevronRight size={20} /> : <>
              <ChevronLeft size={20} />
              {!collapsed && <span>Collapse</span>}
            </>}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
