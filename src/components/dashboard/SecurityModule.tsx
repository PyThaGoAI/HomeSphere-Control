
import { useState } from 'react';
import { Lock, Camera, Shield, CheckCircle } from 'lucide-react';
import ModuleCard from './ModuleCard';
import { cn } from '@/lib/utils';

interface SecurityDevice {
  id: string;
  name: string;
  type: 'camera' | 'lock' | 'sensor';
  status: 'secure' | 'unsecure' | 'motion' | 'offline';
  lastEvent?: string;
}

const SecurityModule = () => {
  const [devices, setDevices] = useState<SecurityDevice[]>([
    { id: 'frontdoor', name: 'Front Door', type: 'lock', status: 'secure' },
    { id: 'backdoor', name: 'Back Door', type: 'lock', status: 'secure' },
    { id: 'frontcam', name: 'Front Camera', type: 'camera', status: 'secure' },
    { id: 'backcam', name: 'Back Camera', type: 'camera', status: 'motion', lastEvent: '18:40' },
    { id: 'garage', name: 'Garage Door', type: 'sensor', status: 'secure' },
  ]);

  const toggleLock = (id: string) => {
    setDevices(devices.map(device => {
      if (device.id === id && device.type === 'lock') {
        return {
          ...device,
          status: device.status === 'secure' ? 'unsecure' : 'secure'
        };
      }
      return device;
    }));
  };

  // Check if all security devices are secure
  const allSecure = devices.every(d => d.status === 'secure' || d.status === 'offline');
  const hasMotion = devices.some(d => d.status === 'motion');

  return (
    <ModuleCard 
      title="Security Hub" 
      icon={<Shield className={allSecure ? "text-cosmic-teal" : "text-cosmic-amber"} />}
      status={allSecure ? 'optimal' : hasMotion ? 'warning' : 'alert'}
    >
      <div className="flex items-center justify-between mb-3">
        <div className={cn(
          "flex items-center px-3 py-1 rounded-full",
          allSecure ? "bg-cosmic-teal/20" : "bg-cosmic-amber/20"
        )}>
          {allSecure ? 
            <CheckCircle size={16} className="text-cosmic-teal mr-2" /> : 
            <Lock size={16} className="text-cosmic-amber mr-2" />
          }
          <span className="text-sm font-medium">
            {allSecure ? "All Secure" : "Attention Needed"}
          </span>
        </div>

        <button className="text-xs underline text-cosmic-teal">
          View All Cameras
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {devices.map(device => (
          <div 
            key={device.id} 
            className={cn(
              "flex items-center justify-between p-2 rounded-md",
              device.status === 'secure' ? "bg-cosmic-blue/30" : 
              device.status === 'motion' ? "bg-cosmic-amber/20" : 
              device.status === 'unsecure' ? "bg-red-500/20" : "bg-gray-500/20"
            )}
          >
            <div className="flex items-center">
              {device.type === 'camera' && <Camera size={16} className="mr-2" />}
              {device.type === 'lock' && <Lock size={16} className="mr-2" />}
              {device.type === 'sensor' && <Shield size={16} className="mr-2" />}
              
              <div>
                <div className="text-sm">{device.name}</div>
                <div className="text-xs text-white/70">
                  {device.status === 'secure' && 'Secure'}
                  {device.status === 'unsecure' && 'Unlocked'}
                  {device.status === 'motion' && `Motion detected ${device.lastEvent}`}
                  {device.status === 'offline' && 'Offline'}
                </div>
              </div>
            </div>
            
            {device.type === 'lock' && (
              <button 
                onClick={() => toggleLock(device.id)}
                className={cn(
                  "text-xs px-2 py-1 rounded-md transition-colors",
                  device.status === 'secure' ? 
                    "bg-cosmic-teal/20 hover:bg-cosmic-teal/30 text-cosmic-teal" : 
                    "bg-cosmic-amber/20 hover:bg-cosmic-amber/30 text-cosmic-amber"
                )}
              >
                {device.status === 'secure' ? 'Unlock' : 'Lock'}
              </button>
            )}
            
            {device.type === 'camera' && (
              <button className="text-xs px-2 py-1 rounded-md bg-cosmic-blue/40 hover:bg-cosmic-blue/50 transition-colors">
                View
              </button>
            )}
          </div>
        ))}
      </div>
    </ModuleCard>
  );
};

export default SecurityModule;
