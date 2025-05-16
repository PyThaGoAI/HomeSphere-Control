
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ModuleCardProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  status?: 'optimal' | 'warning' | 'alert' | 'none';
  floating?: boolean;
}

const ModuleCard = ({ 
  title, 
  icon, 
  children, 
  className,
  status = 'none',
  floating = false
}: ModuleCardProps) => {
  return (
    <div className={cn(
      'module-card relative h-full flex flex-col',
      'bg-cosmic-blue/20 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-lg hover:border-cosmic-teal/20 transition-all duration-300',
      className
    )}>
      <div className="flex items-center mb-5">
        {icon && <div className="mr-3">{icon}</div>}
        <h3 className="font-orbitron text-lg font-medium tracking-wide bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">{title}</h3>
        
        {status !== 'none' && (
          <div className={cn(
            'ml-auto flex items-center',
          )}>
            <div className={cn(
              'w-3 h-3 rounded-full',
              status === 'optimal' && 'bg-cosmic-teal animate-pulse-glow',
              status === 'warning' && 'bg-cosmic-amber animate-pulse-amber',
              status === 'alert' && 'bg-red-500 animate-pulse'
            )} />
            <span className="ml-2 text-xs text-white/70 font-light">
              {status === 'optimal' && 'Optimal'}
              {status === 'warning' && 'Warning'}
              {status === 'alert' && 'Alert'}
            </span>
          </div>
        )}
      </div>
      
      <div className="flex-grow flex flex-col">{children}</div>
    </div>
  );
};

export default ModuleCard;
