
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface HomeStatusOrbProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  level?: number;
}

const HomeStatusOrb = ({ 
  className, 
  size = 'md',
  level = 92 
}: HomeStatusOrbProps) => {
  const [orbLevel, setOrbLevel] = useState(level);
  
  // Simulate small comfort level fluctuations
  useEffect(() => {
    const interval = setInterval(() => {
      const fluctuation = Math.random() * 2 - 1; // -1 to 1
      setOrbLevel(prev => {
        const newLevel = prev + fluctuation;
        return Math.max(60, Math.min(100, newLevel));
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const sizeClasses = {
    sm: 'w-16 h-16 text-xs',
    md: 'w-28 h-28 text-xl',
    lg: 'w-36 h-36 text-2xl'
  };

  const orbColor = orbLevel >= 80 ? 'teal' : orbLevel >= 60 ? 'amber' : 'red';

  return (
    <div className={cn(
      "relative flex items-center justify-center rounded-full",
      sizeClasses[size],
      className
    )}>
      {/* Orbiting paths */}
      <div className="absolute inset-0 rounded-full border border-white/10"></div>
      <div className="absolute inset-[-15px] rounded-full border border-white/5"></div>
      <div className="absolute inset-[-30px] rounded-full border border-white/3"></div>
      
      {/* Main orb */}
      <div className={cn(
        "rounded-full flex items-center justify-center z-10",
        sizeClasses[size],
        orbColor === 'teal' ? 'orb' : 'orb-amber',
      )}>
        <div className="font-orbitron font-bold">
          {Math.round(orbLevel)}%
        </div>
      </div>
      
      {/* Orbiting particles */}
      <div className="absolute inset-0 animate-orbit">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-cosmic-teal/80 rounded-full shadow-lg"></div>
      </div>
      
      <div className="absolute inset-[-15px] animate-orbit-reverse">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-cosmic-amber/80 rounded-full shadow-lg"></div>
      </div>
    </div>
  );
};

export default HomeStatusOrb;
