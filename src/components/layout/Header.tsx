
import { useState, useEffect } from 'react';
import { 
  Bell, 
  MoonStar, 
  Mic, 
  Search, 
  Power, 
  Lock, 
  Lightbulb, 
  Zap,
  User
} from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [currentPower, setCurrentPower] = useState(1.2);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
      // Simulate power fluctuations
      setCurrentPower(1 + Math.random() * 0.5);
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(currentDateTime);

  const formattedTime = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  }).format(currentDateTime);

  return (
    <header className="cosmic-header py-3 px-4 flex items-center z-20 relative">
      {/* Logo & App Name */}
      <div className="flex items-center">
        <div className="relative mr-2">
          <MoonStar size={24} className="text-cosmic-teal animate-pulse-glow" />
          <div className="absolute inset-0 animate-orbit-reverse">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-cosmic-amber rounded-full" />
          </div>
        </div>
        <div className="font-orbitron text-xl font-bold tracking-wider">
          Home<span className="text-cosmic-teal">Sphere</span>
        </div>
      </div>

      {/* Date & Time */}
      <div className="ml-6 hidden md:block">
        <div className="text-sm text-white/80">{formattedDate}</div>
        <div className="text-lg font-semibold">{formattedTime}</div>
      </div>

      {/* Home Status Orb */}
      <div className="ml-6 hidden lg:flex items-center">
        <div className="orb w-12 h-12 mr-2">
          <span className="font-orbitron text-sm">92%</span>
        </div>
        <div>
          <div className="text-sm text-white/80">Comfort Level</div>
          <div className="text-sm font-semibold">Optimal</div>
        </div>
      </div>
      
      {/* Energy Pulse */}
      <div className="ml-6 hidden md:flex items-center">
        <Zap size={18} className="text-cosmic-amber mr-1" />
        <div>
          <div className="text-sm text-white/80">Energy</div>
          <div className="text-sm font-semibold">{currentPower.toFixed(1)} kW</div>
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-1"></div>

      {/* Search Nebula */}
      <div className="mr-3 hidden md:flex items-center">
        <div className="relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <Search size={16} className="text-white/50" />
          </div>
          <input 
            type="text" 
            placeholder="Search Nebula..." 
            className="bg-white/10 border border-white/20 text-white/90 pl-9 pr-4 py-1.5 rounded-full w-48 lg:w-64 focus:outline-none focus:border-cosmic-teal focus:teal-glow text-sm"
          />
        </div>
      </div>

      {/* Voice Command */}
      <button className="quick-toggle mr-3">
        <Mic size={18} className="text-white/80" />
      </button>

      {/* Quick Toggles */}
      <div className="hidden md:flex space-x-2 mr-3">
        <button className="quick-toggle group">
          <Lightbulb size={18} className="text-white/80 group-hover:text-cosmic-amber transition-colors" />
          <span className="absolute -bottom-5 opacity-0 group-hover:opacity-100 text-xs text-white/80 transition-opacity whitespace-nowrap">All Lights Off</span>
        </button>
        
        <button className="quick-toggle group">
          <Lock size={18} className="text-white/80 group-hover:text-cosmic-amber transition-colors" />
          <span className="absolute -bottom-5 opacity-0 group-hover:opacity-100 text-xs text-white/80 transition-opacity whitespace-nowrap">Lock All</span>
        </button>
        
        <button className="quick-toggle group">
          <Power size={18} className="text-white/80 group-hover:text-cosmic-amber transition-colors" />
          <span className="absolute -bottom-5 opacity-0 group-hover:opacity-100 text-xs text-white/80 transition-opacity whitespace-nowrap">Power Save</span>
        </button>
      </div>

      {/* Alerts Constellation */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="quick-toggle mr-3 relative">
            <Bell size={18} className="text-white/80" />
            <span className="status-badge bg-cosmic-amber text-xs flex items-center justify-center text-black font-bold">3</span>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="cosmic-gradient border-cosmic-teal/30 shadow-lg w-72">
          <div className="p-3">
            <div className="font-orbitron text-sm">Alerts Constellation</div>
          </div>
          <DropdownMenuSeparator className="bg-white/10" />
          {[
            { text: "Front door unlocked at 18:30", time: "2m ago" },
            { text: "Kitchen motion detected", time: "15m ago" },
            { text: "Energy consumption spike", time: "1h ago" }
          ].map((alert, i) => (
            <DropdownMenuItem key={i} className="py-2 cursor-pointer">
              <div className="flex flex-col">
                <div className="text-sm">{alert.text}</div>
                <div className="text-xs text-white/60">{alert.time}</div>
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* User Orbit */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="quick-toggle relative">
            <User size={18} className="text-white/80" />
            <span className="status-badge status-optimal"></span>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="cosmic-gradient border-cosmic-teal/30 shadow-lg">
          <div className="p-3">
            <div className="font-orbitron text-sm">User Orbit</div>
            <div className="text-xs text-white/60">admin@homesphere.io</div>
          </div>
          <DropdownMenuSeparator className="bg-white/10" />
          <DropdownMenuItem className="cursor-pointer">Profile Settings</DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">Guest Mode</DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">Export Logs</DropdownMenuItem>
          <DropdownMenuSeparator className="bg-white/10" />
          <DropdownMenuItem className="cursor-pointer text-cosmic-amber">Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default Header;
