
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  // Changed default state to collapsed (true)
  const [collapsed, setCollapsed] = useState(true);
  const location = useLocation();
  const currentPath = location.pathname;
  
  // Get active item based on current path
  const getActiveItem = () => {
    const path = currentPath.split('/')[1]; // Get the first part of the path
    if (path === '') return 'home';
    return path;
  };

  const activeItem = getActiveItem();
  
  const menuItems = [
    { id: 'home', icon: Home, label: 'Home Hub', path: '/' },
    { id: 'lights', icon: Lightbulb, label: 'Lights', path: '/lights' },
    { id: 'climate', icon: Thermometer, label: 'Climate', path: '/climate' },
    { id: 'security', icon: Lock, label: 'Security Hub', path: '/security' },
    { id: 'energy', icon: Zap, label: 'Energy Insights', path: '/energy' },
    { id: 'scenes', icon: Film, label: 'Scenes', path: '/scenes' },
    { id: 'assistant', icon: Bot, label: 'Sphere AI', path: '/assistant' },
    { id: 'guests', icon: Users, label: 'Guests', path: '/guests' },
    { id: 'logs', icon: FileText, label: 'Activity Log', path: '/logs' },
    { id: 'settings', icon: Settings, label: 'Settings', path: '/settings' },
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
            <Link 
              key={item.id}
              to={item.path}
              className={cn(
                "sidebar-item relative cursor-pointer",
                activeItem === item.id && "active"
              )}
            >
              {activeItem === item.id && (
                <div className="absolute left-0 top-1/2 w-1 h-7 transform -translate-y-1/2 bg-cosmic-teal rounded-r-full shadow-[0_0_8px_rgba(0,229,229,0.8)]" />
              )}
              <item.icon size={20} className={activeItem === item.id ? "text-cosmic-teal" : ""} />
              {!collapsed && <span className="transition-opacity">{item.label}</span>}
            </Link>
          ))}
        </div>
        
        {/* Collapse toggle button - Fixed with better styling */}
        <div className="p-4 border-t border-cosmic-teal/20">
          <button 
            onClick={() => setCollapsed(!collapsed)}
            className="sidebar-item justify-center md:justify-start w-full text-white hover:text-cosmic-teal transition-colors"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <div className="flex items-center justify-center w-full">
              {collapsed ? (
                <ChevronRight size={20} className="text-cosmic-teal animate-pulse" />
              ) : (
                <>
                  <ChevronLeft size={20} />
                  <span className="ml-2">Collapse</span>
                </>
              )}
            </div>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
