
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
      'module-card relative',
      floating && 'animate-float',
      className
    )}>
      <div className="flex items-center mb-3">
        {icon && <div className="mr-2">{icon}</div>}
        <h3 className="font-orbitron text-base font-medium">{title}</h3>
        
        {status !== 'none' && (
          <div className={cn(
            'ml-auto w-3 h-3 rounded-full',
            status === 'optimal' && 'bg-cosmic-teal animate-pulse-glow',
            status === 'warning' && 'bg-cosmic-amber animate-pulse-amber',
            status === 'alert' && 'bg-red-500 animate-pulse'
          )} />
        )}
      </div>
      
      <div>{children}</div>
    </div>
  );
};

export default ModuleCard;
